/* Multiplayer networking layer: rooms, live battle state, input actions and presence over
 * Firestore. Exposes a small event-driven API on window.MP; script.js is the only other file
 * that touches game state, so this module never reaches into the DOM or the physics engine.
 *
 * Unlike a turn-based game (where syncing a move list is enough to reproduce the exact same
 * outcome on every client), a Beyblade battle is a continuous physics simulation with per-frame
 * randomness — there is no "move" to replay. Instead one player (the room's "host") runs the
 * authoritative simulation locally and streams state snapshots; the other player ("guest")
 * renders those snapshots instead of simulating physics itself, and sends its own input
 * (launch / special move) as small action events for the host to apply. This sidesteps needing
 * bit-identical floating point determinism across three different runtimes (JS/Swift/Kotlin).
 */
import { auth, db, configured, ensureSignedIn } from "./firebase-init.js";
import {
  doc, getDoc, setDoc, updateDoc, collection, addDoc,
  query, orderBy, onSnapshot, serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I/L — avoids transcription errors
const PRESENCE_HEARTBEAT_MS = 20000;
const PRESENCE_STALE_MS = 45000;
const STATE_PUSH_MIN_INTERVAL_MS = 90;
// Fixed pool of public "Quick Play" rooms — always exist (or get recycled once finished), so
// tapping Quick Play never requires coordinating a code with anyone.
const LOBBY_CODES = ["LOBBYA", "LOBBYB", "LOBBYC"];

function randomCode() {
  let s = "";
  for (let i = 0; i < 6; i++) s += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  return s;
}

const state = {
  roomCode: null,
  myUid: null,
  role: null, // "host" | "guest"
  unsubRoom: null,
  unsubState: null,
  unsubActions: null,
  appliedActionIds: new Set(),
  heartbeatTimer: null,
  staleCheckTimer: null,
  opponentOnline: false,
  lastOppPresence: null,
  sawGuest: false,
  lastStatePush: 0,
};

export const MP = {
  configured,
  onRoomUpdate: null,       // (room: object) => void — full room doc on every change
  onOpponentJoined: null,   // () => void — fires once, for the host, when a guest claims the room
  onOpponentPresence: null, // (online: boolean) => void
  onRemoteState: null,      // (state: object) => void — fires for the guest whenever the host pushes a snapshot
  onRemoteAction: null,     // (action: {type, by, ...payload}) => void — fires for actions from the OTHER player
  onError: null,            // (err) => void
  get myUid() { return state.myUid; },
  get role() { return state.role; },
  get roomCode() { return state.roomCode; },
  get isHost() { return state.role === "host"; },
};

function isFresh(ts) {
  if (!ts || !ts.toMillis) return false;
  return Date.now() - ts.toMillis() < PRESENCE_STALE_MS;
}

function recomputePresence() {
  const online = !!(state.lastOppPresence && state.lastOppPresence.online && isFresh(state.lastOppPresence.lastSeen));
  if (online !== state.opponentOnline) {
    state.opponentOnline = online;
    if (MP.onOpponentPresence) MP.onOpponentPresence(online);
  }
}

function attachRoomListener() {
  if (state.unsubRoom) state.unsubRoom();
  const ref = doc(db, "beyblade_rooms", state.roomCode);
  state.unsubRoom = onSnapshot(ref, (snap) => {
    if (!snap.exists()) return;
    const data = snap.data();
    if (data.guestUid && !state.sawGuest) {
      state.sawGuest = true;
      if (MP.onOpponentJoined) MP.onOpponentJoined();
    }
    state.lastOppPresence = state.role === "host" ? data.guestPresence : data.hostPresence;
    recomputePresence();
    if (MP.onRoomUpdate) MP.onRoomUpdate(data);
  });
  if (state.staleCheckTimer) clearInterval(state.staleCheckTimer);
  state.staleCheckTimer = setInterval(recomputePresence, 8000);
}

function attachStateListener() {
  if (state.unsubState) state.unsubState();
  const ref = doc(db, "beyblade_rooms", state.roomCode, "state", "live");
  state.unsubState = onSnapshot(ref, (snap) => {
    if (!snap.exists()) return;
    if (state.role === "host") return; // host is authoritative; it doesn't consume its own stream
    if (MP.onRemoteState) MP.onRemoteState(snap.data());
  });
}

function attachActionsListener() {
  if (state.unsubActions) state.unsubActions();
  const actionsCol = collection(db, "beyblade_rooms", state.roomCode, "actions");
  state.unsubActions = onSnapshot(query(actionsCol, orderBy("sentAt")), (snap) => {
    snap.docChanges().forEach((change) => {
      if (change.type !== "added") return;
      if (state.appliedActionIds.has(change.doc.id)) return;
      state.appliedActionIds.add(change.doc.id);
      const d = change.doc.data();
      if (d.by === state.myUid) return; // my own action, applied locally already when I sent it
      if (MP.onRemoteAction) MP.onRemoteAction(d);
    });
  });
}

function presenceField() { return state.role === "host" ? "hostPresence" : "guestPresence"; }

function sendHeartbeat(online) {
  if (!state.roomCode) return;
  updateDoc(doc(db, "beyblade_rooms", state.roomCode), {
    [presenceField()]: { online, lastSeen: serverTimestamp() },
    updatedAt: serverTimestamp(),
  }).catch(() => {});
}

function startPresenceHeartbeat() {
  sendHeartbeat(true);
  if (state.heartbeatTimer) clearInterval(state.heartbeatTimer);
  state.heartbeatTimer = setInterval(() => sendHeartbeat(true), PRESENCE_HEARTBEAT_MS);
  window.addEventListener("beforeunload", markOffline);
}

function markOffline() { sendHeartbeat(false); }

async function enterRoom(code, data) {
  const myUid = state.myUid;
  if (data.hostUid === myUid) {
    state.role = "host";
  } else if (data.guestUid === myUid) {
    state.role = "guest";
  } else if (!data.guestUid) {
    if (data.status === "finished") throw new Error("room-finished");
    try {
      await updateDoc(doc(db, "beyblade_rooms", code), {
        guestUid: myUid,
        status: "active",
        guestPresence: { online: true, lastSeen: serverTimestamp() },
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      throw new Error("room-full");
    }
    state.role = "guest";
  } else {
    throw new Error("room-full");
  }

  state.roomCode = code;
  state.sawGuest = !!data.guestUid || state.role === "guest";
  state.opponentOnline = false;
  state.lastOppPresence = null;
  state.appliedActionIds = new Set();
  attachRoomListener();
  attachStateListener();
  attachActionsListener();
  startPresenceHeartbeat();
  return { code, role: state.role };
}

function freshRoomDoc(hostUid) {
  return {
    hostUid,
    guestUid: null,
    status: "waiting",
    phase: "picking",
    hostTopIndex: null,
    guestTopIndex: null,
    hostWins: 0,
    guestWins: 0,
    roundNumber: 1,
    result: null,
    seed: Math.random() * 1000,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    hostPresence: { online: true, lastSeen: serverTimestamp() },
    guestPresence: { online: false, lastSeen: serverTimestamp() },
  };
}

export async function joinRoom(code) {
  await ensureSignedIn();
  state.myUid = auth.currentUser.uid;
  const ref = doc(db, "beyblade_rooms", code);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("room-not-found");
  return enterRoom(code, snap.data());
}

export async function createRoom() {
  await ensureSignedIn();
  const myUid = auth.currentUser.uid;
  state.myUid = myUid;
  for (let attempt = 0; attempt < 6; attempt++) {
    const code = randomCode();
    const ref = doc(db, "beyblade_rooms", code);
    const existing = await getDoc(ref);
    if (existing.exists()) continue;
    try {
      await setDoc(ref, freshRoomDoc(myUid));
    } catch (err) {
      continue;
    }
    return joinRoom(code);
  }
  throw new Error("room-create-failed");
}

/** Joins (or claims/recycles) the first available room in the fixed public lobby pool, so two
 * people can play without coordinating a code. */
export async function quickPlay() {
  if (!configured) throw new Error("not-configured");
  await ensureSignedIn();
  const myUid = auth.currentUser.uid;
  state.myUid = myUid;
  for (const code of LOBBY_CODES) {
    const ref = doc(db, "beyblade_rooms", code);
    const snap = await getDoc(ref).catch(() => null);
    const data = snap && snap.exists() ? snap.data() : null;

    if (!data || data.status === "finished") {
      try {
        await setDoc(ref, freshRoomDoc(myUid));
      } catch (err) {
        continue; // someone else claimed/recycled this slot first — try the next one
      }
      return enterRoom(code, freshRoomDoc(myUid));
    }
    if (data.hostUid === myUid || data.guestUid === myUid) {
      return enterRoom(code, data); // reconnecting to my own quick-play game
    }
    if (data.status === "waiting" && !data.guestUid) {
      return enterRoom(code, data); // joins as guest, starts immediately
    }
    try {
      await setDoc(ref, freshRoomDoc(myUid));
      return enterRoom(code, freshRoomDoc(myUid));
    } catch (err) {
      continue; // still genuinely occupied — try the next pool slot
    }
  }
  throw new Error("lobby-full");
}

export async function updateRoom(fields) {
  if (!state.roomCode) return;
  await updateDoc(doc(db, "beyblade_rooms", state.roomCode), { ...fields, updatedAt: serverTimestamp() });
}

export function pushState(snapshot) {
  if (!state.roomCode || state.role !== "host") return;
  const now = Date.now();
  if (now - state.lastStatePush < STATE_PUSH_MIN_INTERVAL_MS) return;
  state.lastStatePush = now;
  setDoc(doc(db, "beyblade_rooms", state.roomCode, "state", "live"), { ...snapshot, seq: now }).catch(() => {});
}

export async function sendAction(type, payload) {
  if (!state.roomCode) return;
  try {
    await addDoc(collection(db, "beyblade_rooms", state.roomCode, "actions"), {
      type, by: state.myUid, ...payload, sentAt: serverTimestamp(),
    });
  } catch (err) {
    if (MP.onError) MP.onError(err);
  }
}

export function leaveRoom() {
  markOffline();
  if (state.unsubRoom) state.unsubRoom();
  if (state.unsubState) state.unsubState();
  if (state.unsubActions) state.unsubActions();
  if (state.heartbeatTimer) clearInterval(state.heartbeatTimer);
  if (state.staleCheckTimer) clearInterval(state.staleCheckTimer);
  window.removeEventListener("beforeunload", markOffline);
  state.roomCode = null;
  state.role = null;
  state.opponentOnline = false;
  state.lastOppPresence = null;
  state.sawGuest = false;
  state.appliedActionIds = new Set();
}

Object.assign(MP, { createRoom, joinRoom, quickPlay, updateRoom, pushState, sendAction, leaveRoom });
window.MP = MP;
window.dispatchEvent(new CustomEvent("mp-ready"));
