"use strict";

/* ============================================================
   i18n — direct port of the L enum / TRANSLATIONS table used
   in the iOS (Localization.swift) and Android siblings.
   ============================================================ */

const TRANSLATIONS = {
  en: {
    eyebrow: "SPINNING TOP ARENA",
    title1: "Launch. Spin.",
    title2: "Battle.",
    title: "iBeyblade",
    tagline: "Pick your top, pull back to launch it into a glowing arena, and outlast your rival's spin.",
    footerBy: "Developed by",
    chooseMode: "MODE",
    modeVsCPU: "vs CPU",
    modeVsPlayer: "vs Player",
    diffEasy: "Easy", diffNormal: "Normal", diffHard: "Hard",
    chooseTop: "CHOOSE YOUR TOP",
    pickTopP1: "PLAYER 1: CHOOSE YOUR TOP",
    pickTopP2: "PLAYER 2: CHOOSE YOUR TOP",
    typeAttack: "Attack", typeDefense: "Defense", typeStamina: "Stamina", typeBalance: "Balance",
    statAtk: "ATK", statDef: "DEF", statStm: "STM",
    pressStart: "TAP TO START",
    pullHint: "Drag back from your top and release to launch",
    round: "Round",
    suddenDeath: "SUDDEN DEATH",
    pausedTitle: "PAUSED", pausedSub: "Tap to resume",
    spinOutToast: "SPUN OUT", ringOutToast: "RING OUT", burstToast: "BURST!",
    youWinRound: "YOU WON THE ROUND", cpuWinRound: "RIVAL WON THE ROUND",
    p1WinRound: "PLAYER 1 WON THE ROUND", p2WinRound: "PLAYER 2 WON THE ROUND",
    matchWinTitle: "VICTORY!", matchLoseTitle: "DEFEAT",
    p1MatchWin: "PLAYER 1 WINS!", p2MatchWin: "PLAYER 2 WINS!",
    playAgainBtn: "Play Again", menuBtn: "Menu",
    tapToContinue: "Tap to continue",
    spiritRisingSuffix: " RISING!",
    settingsTitle: "SETTINGS", soundLabel: "Sound", hapticsLabel: "Haptics", languageLabel: "Language", winsLabel: "Wins",
    closeBtn: "Close",
    helpTitle: "HELP",
    helpBody: "• Drag back from your top and release to launch it.\n• You lose with a Spin-out (stamina hits zero) or a Ring-out.\n• An extreme clash can trigger an instant Burst.\n• Spinning and clashing fills the special gauge — tap it to unleash your spirit.\n• Win 2 rounds to take the match.",
    tutorialSkip: "Skip", tutorialNext: "Next", tutorialDone: "Start",
    tut1Title: "Choose your top", tut1Body: "Each top has different Attack, Defense and Stamina. Pick the style that suits you.",
    tut2Title: "Launch it into the arena", tut2Body: "Drag back from your top and release to launch it — the further you pull, the stronger the launch.",
    tut3Title: "Spin-out, Ring-out, Burst", tut3Body: "You lose if your stamina hits zero (Spin-out) or you're knocked out of the arena (Ring-out). An extreme clash can trigger an instant Burst!",
    tut4Title: "Special Move", tut4Body: "Spinning and clashing fills your gauge. When it's full, tap the button to unleash your top's spirit.",
    tut5Title: "Win the Match", tut5Body: "Win 2 rounds to take the match. Good luck!",
    introSkipBtn: "Skip",
    modeOnline: "Online",
    onlinePlay: "ONLINE PLAY",
    createRoomBtn: "Create Room", joinRoomBtn: "Join Room", quickPlayBtn: "Quick Play",
    roomCodePlaceholder: "CODE", joinBtn: "Join", cancelBtn: "Cancel",
    roomCodeLabel: "ROOM CODE", waitingForOpponent: "Waiting for opponent…",
    opponentJoined: "Opponent joined! Pick your top below.",
    waitingForYourPick: "Waiting for you to pick a top…",
    waitingForOpponentPick: "Waiting for opponent to pick a top…",
    onlineNotConfigured: "Online play isn't set up yet.",
    roomNotFound: "That room code wasn't found.",
    roomFull: "That room is already full.",
    roomFinished: "That match already ended.",
    lobbyFull: "Quick Play is full right now — try again shortly.",
    opponentDisconnected: "Opponent disconnected.",
    p1WinsOnline: "YOU WON THE ROUND", p2WinsOnline: "OPPONENT WON THE ROUND",
    onlineMatchWin: "VICTORY!", onlineMatchLose: "DEFEAT",
    readyBtn: "READY",
  },
  pt: {
    eyebrow: "ARENA DE PIÕES",
    title1: "Lança. Roda.",
    title2: "Combate.",
    title: "iBeyblade",
    tagline: "Escolhe o teu pião, lança-o na arena e derruba o adversário.",
    footerBy: "Desenvolvido por",
    chooseMode: "MODO",
    modeVsCPU: "vs CPU",
    modeVsPlayer: "vs Jogador",
    diffEasy: "Fácil", diffNormal: "Normal", diffHard: "Difícil",
    chooseTop: "ESCOLHE O TEU PIÃO",
    pickTopP1: "JOGADOR 1: ESCOLHE O TEU PIÃO",
    pickTopP2: "JOGADOR 2: ESCOLHE O TEU PIÃO",
    typeAttack: "Ataque", typeDefense: "Defesa", typeStamina: "Resistência", typeBalance: "Equilíbrio",
    statAtk: "ATQ", statDef: "DEF", statStm: "RES",
    pressStart: "TOCA PARA COMEÇAR",
    pullHint: "Arrasta para trás e larga para lançar",
    round: "Ronda",
    suddenDeath: "MORTE SÚBITA",
    pausedTitle: "PAUSA", pausedSub: "Toca para retomar",
    spinOutToast: "GIRO PERDIDO", ringOutToast: "FORA DO RING", burstToast: "BURST!",
    youWinRound: "VENCESTE A RONDA", cpuWinRound: "O ADVERSÁRIO VENCEU A RONDA",
    p1WinRound: "JOGADOR 1 VENCEU A RONDA", p2WinRound: "JOGADOR 2 VENCEU A RONDA",
    matchWinTitle: "VITÓRIA!", matchLoseTitle: "DERROTA",
    p1MatchWin: "JOGADOR 1 VENCE!", p2MatchWin: "JOGADOR 2 VENCE!",
    playAgainBtn: "Jogar Novamente", menuBtn: "Menu",
    tapToContinue: "Toca para continuar",
    spiritRisingSuffix: " DESPERTA!",
    settingsTitle: "DEFINIÇÕES", soundLabel: "Som", hapticsLabel: "Vibração", languageLabel: "Idioma", winsLabel: "Vitórias",
    closeBtn: "Fechar",
    helpTitle: "AJUDA",
    helpBody: "• Arrasta para trás a partir do teu pião e larga para o lançar.\n• Perdes com Giro Perdido (resistência a zero) ou Fora do Ring.\n• Um choque muito forte pode causar um Burst instantâneo.\n• Girar e chocar enche o medidor especial — toca para libertar o espírito.\n• Vence 2 rondas para ganhar o combate.",
    tutorialSkip: "Saltar", tutorialNext: "Seguinte", tutorialDone: "Começar",
    tut1Title: "Escolhe o teu pião", tut1Body: "Cada pião tem Ataque, Defesa e Resistência diferentes. Escolhe o estilo que preferires.",
    tut2Title: "Lança-o na arena", tut2Body: "Arrasta para trás a partir do teu pião e larga para o lançar — quanto mais puxares, mais forte sai.",
    tut3Title: "Giro Perdido, Fora do Ring, Burst", tut3Body: "Perdes se a resistência chegar a zero (Giro Perdido) ou fores empurrado para fora da arena (Fora do Ring). Um choque muito forte pode causar um Burst instantâneo!",
    tut4Title: "Movimento Especial", tut4Body: "Girar e chocar enche o teu medidor. Quando estiver cheio, toca no botão para libertar o espírito do teu pião.",
    tut5Title: "Vence o Combate", tut5Body: "Ganha 2 rondas para vencer. Boa sorte!",
    introSkipBtn: "Saltar",
    modeOnline: "Online",
    onlinePlay: "JOGO ONLINE",
    createRoomBtn: "Criar Sala", joinRoomBtn: "Entrar em Sala", quickPlayBtn: "Jogo Rápido",
    roomCodePlaceholder: "CÓDIGO", joinBtn: "Entrar", cancelBtn: "Cancelar",
    roomCodeLabel: "CÓDIGO DA SALA", waitingForOpponent: "A aguardar adversário…",
    opponentJoined: "Adversário entrou! Escolhe o teu pião abaixo.",
    waitingForYourPick: "A aguardar que escolhas um pião…",
    waitingForOpponentPick: "A aguardar que o adversário escolha um pião…",
    onlineNotConfigured: "O modo online ainda não está configurado.",
    roomNotFound: "Esse código de sala não foi encontrado.",
    roomFull: "Essa sala já está cheia.",
    roomFinished: "Esse combate já terminou.",
    lobbyFull: "O Jogo Rápido está cheio agora — tenta novamente em breve.",
    opponentDisconnected: "O adversário desligou-se.",
    p1WinsOnline: "VENCESTE A RONDA", p2WinsOnline: "O ADVERSÁRIO VENCEU A RONDA",
    onlineMatchWin: "VITÓRIA!", onlineMatchLose: "DERROTA",
    readyBtn: "PRONTO",
  },
};

let lang = "en"; // always starts in English, never persisted (matches the iOS app)

function t(key) {
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
}
function typeName(type) {
  return t("type" + type.charAt(0).toUpperCase() + type.slice(1));
}
function spiritRising(spirit) {
  return spirit.toUpperCase() + t("spiritRisingSuffix");
}
function tutorialTitle(page) { return t("tut" + page + "Title"); }
function tutorialBody(page) { return t("tut" + page + "Body"); }

/* ============================================================
   Top presets — 1:1 port of BeybladeTypes.swift
   ============================================================ */

const TOPS = [
  { id: "inferno-fang", name: "Inferno Fang", spirit: "Phoenix", type: "attack", body: "#ff5a3c", glow: "#ff8a40", atk: 0.92, def: 0.30, stm: 0.45, spin: "cw", radius: 34, aggression: 0.9 },
  { id: "titan-shell", name: "Titan Shell", spirit: "Tortoise", type: "defense", body: "#3ca0ff", glow: "#6fd8ff", atk: 0.32, def: 0.94, stm: 0.55, spin: "ccw", radius: 38, aggression: 0.25 },
  { id: "chrono-drift", name: "Chrono Drift", spirit: "Serpent", type: "stamina", body: "#3cffb0", glow: "#7dffd0", atk: 0.38, def: 0.42, stm: 0.95, spin: "cw", radius: 32, aggression: 0.35 },
  { id: "vortex-core", name: "Vortex Core", spirit: "Wolf", type: "balance", body: "#b06bff", glow: "#d9a8ff", atk: 0.62, def: 0.62, stm: 0.62, spin: "ccw", radius: 35, aggression: 0.55 },
  { id: "thunder-claw", name: "Thunder Claw", spirit: "Tiger", type: "attack", body: "#ffd23c", glow: "#fff08a", atk: 0.97, def: 0.22, stm: 0.32, spin: "ccw", radius: 33, aggression: 0.95 },
  { id: "frost-wyrm", name: "Frost Wyrm", spirit: "Dragon", type: "defense", body: "#a8e8ff", glow: "#e0faff", atk: 0.28, def: 0.90, stm: 0.68, spin: "cw", radius: 39, aggression: 0.20 },
  { id: "sandstorm-fury", name: "Sandstorm Fury", spirit: "Scorpion", type: "stamina", body: "#e0a458", glow: "#ffd9a0", atk: 0.58, def: 0.40, stm: 0.88, spin: "ccw", radius: 33, aggression: 0.5 },
  { id: "abyssal-maw", name: "Abyssal Maw", spirit: "Shark", type: "balance", body: "#3c6bff", glow: "#7d9bff", atk: 0.72, def: 0.66, stm: 0.58, spin: "cw", radius: 35, aggression: 0.65 },
];

const TYPE_EMOJI = { attack: "⚔️", defense: "🛡️", stamina: "⏱️", balance: "⚖️" };

const DIFFICULTIES = {
  easy: { aimVariance: 0.5, powerMin: 0.45, powerMax: 0.7, specialUseChance: 0.35, specialCheckMin: 2.0, specialCheckMax: 3.5 },
  normal: { aimVariance: 0.28, powerMin: 0.6, powerMax: 0.88, specialUseChance: 0.55, specialCheckMin: 1.4, specialCheckMax: 2.6 },
  hard: { aimVariance: 0.12, powerMin: 0.75, powerMax: 1.0, specialUseChance: 0.8, specialCheckMin: 0.8, specialCheckMax: 1.8 },
};

const WINS_NEEDED = 2;
const SUDDEN_DEATH_AT = 22;
const SUDDEN_DEATH_MULT = 3.5;
const BASE_LAUNCH_SPEED = 300;

/* ============================================================
   DOM references
   ============================================================ */

const $ = (id) => document.getElementById(id);

const canvas = $("game-canvas");
const ctx = canvas.getContext("2d");
const bgCanvas = $("bg-canvas");
const bgCtx = bgCanvas.getContext("2d");

const dom = {
  hero: document.querySelector(".hero"),
  modePanel: $("mode-panel"), topPanel: $("top-panel"), iconRow: document.querySelector(".icon-row"),
  soundToggle: $("sound-toggle"), soundIcon: $("sound-icon"),
  langToggle: $("lang-toggle"), langLabel: $("lang-label"),
  modeRow: $("mode-row"), diffRow: $("diff-row"),
  topPanelLabel: $("top-panel-label"), topGrid: $("top-grid"),
  startBtn: $("start-btn"),
  settingsBtn: $("settings-btn"), tutorialBtn: $("tutorial-btn"), helpBtn: $("help-btn"),
  gameCard: $("game-card"),
  battleHud: $("battle-hud"),
  p1Name: $("p1-name"), p1Bar: $("p1-bar"), p2Name: $("p2-name"), p2Bar: $("p2-bar"),
  roundLabel: $("round-label"), suddenDeathLabel: $("sudden-death-label"),
  launchOverlay: $("launch-overlay"), pullHint: $("pull-hint"), pullHint2: $("pull-hint2"),
  pauseOverlay: $("pause-overlay"), pauseMenuBtn: $("pause-menu-btn"),
  roundResultOverlay: $("round-result-overlay"), roundResultTitle: $("round-result-title"), roundResultSub: $("round-result-sub"),
  specialToast: $("special-toast"),
  p1Special: $("p1-special"), p1SpecialPct: $("p1-special-pct"),
  p2Special: $("p2-special"), p2SpecialPct: $("p2-special-pct"),
  homeBtn: $("home-btn"), pauseBtn: $("pause-btn"),
  introOverlay: $("intro-overlay"), introPlay: $("intro-play"), introProgressFill: $("intro-progress-fill"),
  matchOverlay: $("match-overlay"), matchIcon: $("match-icon"), matchTitle: $("match-title"), matchSub: $("match-sub"),
  matchReplay: $("match-replay"), matchClose: $("match-close"),
  settingsOverlay: $("settings-overlay"), settingsSound: $("settings-sound"), settingsHaptics: $("settings-haptics"),
  settingsLang: $("settings-lang"), settingsWins: $("settings-wins"), settingsClose: $("settings-close"),
  helpOverlay: $("help-overlay"), helpBody: $("help-body"), helpClose: $("help-close"),
  tutorialOverlay: $("tutorial-overlay"), tutorialTitleEl: $("tutorial-title"), tutorialBodyEl: $("tutorial-body"),
  tutorialDots: $("tutorial-dots"), tutorialNext: $("tutorial-next"), tutorialSkip: $("tutorial-skip"),
  lobbyPanel: $("lobby-panel"),
  lobbyIdle: $("lobby-idle"), lobbyIdleStatus: $("lobby-idle-status"),
  lobbyCreateBtn: $("lobby-create-btn"), lobbyJoinBtn: $("lobby-join-btn"), lobbyQuickBtn: $("lobby-quick-btn"),
  lobbyJoinRow: $("lobby-join-row"), lobbyCodeInput: $("lobby-code-input"), lobbyJoinConfirmBtn: $("lobby-join-confirm-btn"),
  lobbyWaiting: $("lobby-waiting"), lobbyCodeDisplay: $("lobby-code-display"), lobbyCancelBtn: $("lobby-cancel-btn"),
  lobbyMatched: $("lobby-matched"), lobbyMatchedStatus: $("lobby-matched-status"),
};

/* ============================================================
   State
   ============================================================ */

const state = {
  phase: "menu", // menu | launch | battle | roundResult | matchOver
  matchMode: "cpu", // cpu | player
  menuStep: "main", // main | pickPlayer2
  difficulty: "normal",
  playerPresetIndex: 0,
  player2PresetIndex: 1,
  cpuPresetIndex: 1,
  playerWins: 0,
  cpuWins: 0,
  roundNumber: 1,
  paused: false,
  lastRoundLoser: null,
  lastRoundReason: null,
  pendingRoundEnd: null,
  collisionCooldown: 0,
  battleElapsed: 0,
  suddenDeathActive: false,
  cpuSpecialTimer: 0,
  arena: { cx: 300, cy: 300, radius: 250 },
  activeDrags: new Map(), // pointerId -> {target:'p1'|'p2', anchorX, anchorY, curX, curY}
  sparks: [],
  bursts: [],
  soundOn: true,
  hapticsOn: true,
  wins: 0,
  tutorialPage: 1,
  lastTime: 0,
  online: {
    active: false, // true once a room is joined/created
    role: null, // "host" | "guest"
    code: null,
    matched: false, // opponent has joined the room
    myReady: false, oppReady: false,
    oppOnline: false,
    lastRoundWinnerIsHost: null,
  },
};

let player = null;
let cpu = null;

function isLocal2P() { return state.matchMode === "player"; }
function isOnline() { return state.matchMode === "online"; }
function isAnyMultiplayer() { return isLocal2P() || isOnline(); }

/* ============================================================
   Sound — synthesized via the Web Audio API, no audio files.
   Direct port of SoundEngine.swift.
   ============================================================ */

const SoundEngine = {
  ctx: null,
  ensure() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  tone(freq, duration, shape, gain, delay, freqEnd) {
    if (!state.soundOn) return;
    const ac = this.ensure();
    const start = ac.currentTime + (delay || 0);
    const osc = ac.createOscillator();
    osc.type = shape || "square";
    osc.frequency.setValueAtTime(freq, start);
    if (freqEnd) osc.frequency.linearRampToValueAtTime(freqEnd, start + duration);
    const g = ac.createGain();
    g.gain.setValueAtTime(Math.max(gain, 0.0001), start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(g).connect(ac.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  },
  noise(duration, gain, delay, freqStart, freqEnd) {
    if (!state.soundOn) return;
    const ac = this.ensure();
    const start = ac.currentTime + (delay || 0);
    const bufferSize = Math.max(1, Math.floor(ac.sampleRate * duration));
    const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const src = ac.createBufferSource();
    src.buffer = buffer;
    const filter = ac.createBiquadFilter();
    filter.type = "bandpass";
    const f0 = freqStart || 2000;
    const f1 = freqEnd != null ? freqEnd : f0;
    filter.frequency.setValueAtTime(f0, start);
    filter.frequency.linearRampToValueAtTime(f1, start + duration);
    filter.Q.value = 0.8;
    const g = ac.createGain();
    g.gain.setValueAtTime(Math.max(gain, 0.0001), start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    src.connect(filter).connect(g).connect(ac.destination);
    src.start(start);
    src.stop(start + duration + 0.02);
  },
  playLaunch() { this.tone(180, 0.35, "sawtooth", 0.16, 0, 900); this.noise(0.3, 0.1, 0, 2000, 400); },
  playClash(intensity) { const g = 0.12 + 0.14 * Math.min(1, Math.max(0, intensity)); this.noise(0.12, g, 0, 3000, 300); this.tone(220, 0.1, "square", g * 0.8, 0); },
  playBoost() { this.tone(500, 0.18, "square", 0.15, 0, 1100); },
  playSpecialMove() {
    this.tone(220, 0.22, "sawtooth", 0.16, 0, 900);
    this.tone(440, 0.24, "square", 0.16, 0.06, 1400);
    this.tone(660, 0.3, "square", 0.16, 0.14, 1800);
    this.noise(0.4, 0.14, 0, 3200, 600);
  },
  playSpinOut() { this.tone(260, 0.5, "sawtooth", 0.16, 0, 140); this.noise(0.5, 0.08, 0, 1600, 200); },
  playRingOut() { this.tone(500, 0.14, "square", 0.16, 0, 900); this.tone(700, 0.18, "square", 0.16, 0.1, 1200); },
  playBurst() { this.noise(0.4, 0.22, 0, 4000, 100); this.tone(80, 0.4, "sawtooth", 0.2, 0); },
  playRoundWin() { this.tone(523, 0.12, "square", 0.16, 0); this.tone(659, 0.12, "square", 0.16, 0.1); this.tone(784, 0.2, "square", 0.16, 0.2); },
  playRoundLose() { this.tone(392, 0.16, "sawtooth", 0.15, 0); this.tone(330, 0.22, "sawtooth", 0.15, 0.14); },
  playMatchWin() {
    this.tone(523, 0.14, "square", 0.18, 0); this.tone(659, 0.14, "square", 0.18, 0.12);
    this.tone(784, 0.14, "square", 0.18, 0.24); this.tone(1047, 0.35, "square", 0.18, 0.38);
  },
  playUITap() { this.tone(700, 0.05, "square", 0.1, 0); },
};

const Haptics = {
  impact(mag) {
    if (!state.hapticsOn || !navigator.vibrate) return;
    navigator.vibrate(mag < 0.4 ? 8 : mag < 0.75 ? 16 : 28);
  },
  warning() {
    if (!state.hapticsOn || !navigator.vibrate) return;
    navigator.vibrate([15, 30, 15]);
  },
};

/* ============================================================
   Entities — direct port of Entities.swift (BeybladeEntity)
   ============================================================ */

function makeEntity(preset, isPlayer) {
  return {
    preset, isPlayer,
    x: 0, y: 0, vx: 0, vy: 0,
    spinAngle: 0, spinSpeed: 0,
    stamina: 100,
    specialGauge: 0,
    specialActiveTimer: 0,
    alive: true,
    launched: false,
    koReason: null,
    wobble: 0,
    seed: Math.random() * 1000,
  };
}

function effectiveAttack(e) { return e.preset.atk * (e.specialActiveTimer > 0 ? 1.4 : 1.0); }
function effectiveDefense(e) { return e.preset.def * (e.specialActiveTimer > 0 ? 1.3 : 1.0); }

function launchEntity(e, originX, originY, dirX, dirY, power) {
  e.x = originX; e.y = originY;
  const clamped = Math.max(0.25, Math.min(1, power));
  e.vx = dirX * clamped; e.vy = dirY * clamped;
  e.spinSpeed = 14 + clamped * 6;
  e.stamina = 100;
  e.specialGauge = 0;
  e.specialActiveTimer = 0;
  e.alive = true;
  e.launched = true;
  e.koReason = null;
  e.wobble = 0;
}

function gainSpecialGauge(e, amount) {
  if (!e.alive) return;
  e.specialGauge = Math.min(100, e.specialGauge + amount);
}

function triggerSpecial(e) {
  if (!e.alive || e.specialGauge < 100) return false;
  e.specialGauge = 0;
  e.specialActiveTimer = 2.5;
  const speed = Math.hypot(e.vx, e.vy);
  let dx, dy;
  if (speed > 0.01) { dx = e.vx / speed; dy = e.vy / speed; }
  else { const a = Math.random() * Math.PI * 2; dx = Math.cos(a); dy = Math.sin(a); }
  e.vx += dx * 110; e.vy += dy * 110;
  e.spinSpeed += 5;
  return true;
}

/**
 * Autonomous per-frame steering + spin decay. `decayMultiplier` ramps up
 * during Sudden Death so every round is guaranteed to end. Stamina hitting
 * zero here only marks the top spent — GameEngine.tick() is what actually
 * ends the round, so every KO path (collision or plain decay) goes through
 * the same code.
 */
function stepEntity(e, opponent, arena, dt, time, decayMultiplier) {
  if (!e.launched || !e.alive) return;

  const decayRate = 5.2 * (1.05 - e.preset.stm) * decayMultiplier;
  e.stamina = Math.max(0, e.stamina - decayRate * dt);
  e.wobble = Math.min(1, Math.max(0, 1 - e.stamina / 22));

  if (e.specialActiveTimer > 0) e.specialActiveTimer = Math.max(0, e.specialActiveTimer - dt);
  gainSpecialGauge(e, 3.2 * dt);

  const staminaFrac = e.stamina / 100;
  e.spinSpeed = (10 + 6 * e.preset.stm) * Math.max(0.08, staminaFrac);

  const toOppX = opponent.x - e.x, toOppY = opponent.y - e.y;
  const toOppLen = Math.max(0.001, Math.hypot(toOppX, toOppY));
  const contactDist = e.preset.radius + opponent.preset.radius;
  const closeRangeFade = Math.min(1, Math.max(0, (toOppLen - contactDist * 1.1) / (contactDist * 0.5)));
  const homingX = (toOppX / toOppLen) * closeRangeFade, homingY = (toOppY / toOppLen) * closeRangeFade;

  const jitterAngle = Math.sin(time * 3.1 + e.seed) * Math.PI * (0.6 + e.wobble * 1.4);
  const jitterX = Math.cos(jitterAngle), jitterY = Math.sin(jitterAngle);

  const pull = e.preset.aggression * 0.55;
  const steerX = homingX * pull + jitterX * (1 - pull);
  const steerY = homingY * pull + jitterY * (1 - pull);

  const targetSpeed = (70 + 90 * staminaFrac) * (0.6 + e.preset.aggression * 0.4);
  e.vx += steerX * targetSpeed * 0.9 * dt;
  e.vy += steerY * targetSpeed * 0.9 * dt;

  // Real stadiums dish down toward the middle, so a top's own weight drags
  // it back toward the center — barely noticeable near the middle, strong
  // enough near the rim to matter. A tiring top (lower stamina) has less
  // gyroscopic force resisting the slope, so it slides in more easily.
  const toCenterX = arena.cx - e.x, toCenterY = arena.cy - e.y;
  const distFromCenter = Math.hypot(toCenterX, toCenterY);
  if (distFromCenter > 0.001 && arena.radius > 0) {
    const slopeT = Math.min(1, distFromCenter / arena.radius);
    const staminaWeakness = 1.6 - staminaFrac * 0.8;
    const slopePull = 170 * slopeT * staminaWeakness;
    e.vx += (toCenterX / distFromCenter) * slopePull * dt;
    e.vy += (toCenterY / distFromCenter) * slopePull * dt;
  }

  const speed = Math.hypot(e.vx, e.vy);
  const maxSpeed = 260;
  if (speed > maxSpeed) { e.vx = (e.vx / speed) * maxSpeed; e.vy = (e.vy / speed) * maxSpeed; }

  e.vx *= 0.985; e.vy *= 0.985;
  e.x += e.vx * dt; e.y += e.vy * dt;

  const spinDir = e.preset.spin === "cw" ? 1 : -1;
  e.spinAngle += spinDir * e.spinSpeed * dt;
}

/* ============================================================
   Physics: wall/top collisions, KO, round conclusion.
   Direct port of GameScene+Physics.swift.
   ============================================================ */

function resolveWallCollision(e) {
  if (!e.launched || !e.alive) return;
  const dx = e.x - state.arena.cx, dy = e.y - state.arena.cy;
  const dist = Math.hypot(dx, dy);
  const limit = state.arena.radius - e.preset.radius;
  if (dist <= limit || dist <= 0.001) return;

  const nx = dx / dist, ny = dy / dist;
  const outwardSpeed = e.vx * nx + e.vy * ny;

  if (e.stamina < 14 || outwardSpeed > 130) {
    triggerKO(e, "ringOut");
    return;
  }

  const restitution = 0.6;
  const vDotN = e.vx * nx + e.vy * ny;
  e.vx -= (1 + restitution) * vDotN * nx;
  e.vy -= (1 + restitution) * vDotN * ny;
  e.x = state.arena.cx + nx * limit;
  e.y = state.arena.cy + ny * limit;
  e.stamina = Math.max(0, e.stamina - 1.5);
  gainSpecialGauge(e, 6);

  spawnSparks(e.x, e.y, e.preset.glow, 5);
  SoundEngine.playClash(0.12);
  Haptics.impact(0.15);
}

function resolveTopCollision() {
  if (!player.launched || !cpu.launched || !player.alive || !cpu.alive) return;
  const dx = cpu.x - player.x, dy = cpu.y - player.y;
  const dist = Math.max(0.01, Math.hypot(dx, dy));
  const minDist = player.preset.radius + cpu.preset.radius;
  if (dist >= minDist) return;

  const nx = dx / dist, ny = dy / dist;
  const overlap = minDist - dist;
  player.x -= (nx * overlap) / 2; player.y -= (ny * overlap) / 2;
  cpu.x += (nx * overlap) / 2; cpu.y += (ny * overlap) / 2;

  if (state.collisionCooldown > 0) return;
  state.collisionCooldown = 0.35;

  const rvx = cpu.vx - player.vx, rvy = cpu.vy - player.vy;
  const approach = Math.max(0, -(rvx * nx + rvy * ny));
  const spinBonus = (player.spinSpeed + cpu.spinSpeed) * 1.4;
  const impactSpeed = Math.max(40, approach) + spinBonus;
  const sameDirection = player.preset.spin === cpu.preset.spin;
  const dirMultiplier = sameDirection ? 0.75 : 1.3;
  const hitPower = impactSpeed * dirMultiplier;

  const knockOnPlayer = hitPower * (effectiveAttack(cpu) / (effectiveDefense(player) + 0.2)) * 0.6;
  const knockOnCPU = hitPower * (effectiveAttack(player) / (effectiveDefense(cpu) + 0.2)) * 0.6;

  player.vx -= nx * knockOnPlayer; player.vy -= ny * knockOnPlayer;
  cpu.vx += nx * knockOnCPU; cpu.vy += ny * knockOnCPU;

  const tx = -ny, ty = nx;
  const jitter = (Math.random() * 40) - 20;
  player.vx += tx * jitter; player.vy += ty * jitter;
  cpu.vx -= tx * jitter; cpu.vy -= ty * jitter;

  player.stamina = Math.max(0, player.stamina - knockOnPlayer * 0.12);
  cpu.stamina = Math.max(0, cpu.stamina - knockOnCPU * 0.12);
  gainSpecialGauge(player, 8 + knockOnPlayer * 0.05);
  gainSpecialGauge(cpu, 8 + knockOnCPU * 0.05);

  const midX = (player.x + cpu.x) / 2, midY = (player.y + cpu.y) / 2;
  const clashIntensity = Math.min(1, hitPower / 260);
  spawnSparks(midX, midY, "#ffffff", 16);
  SoundEngine.playClash(clashIntensity);
  Haptics.impact(clashIntensity);

  const burstThreshold = 340;
  if (hitPower > burstThreshold) {
    if (player.stamina <= cpu.stamina && player.stamina < 35) triggerKO(player, "burst");
    else if (cpu.stamina < player.stamina && cpu.stamina < 35) triggerKO(cpu, "burst");
  }

  if (player.stamina <= 0 && player.alive) triggerKO(player, "spinOut");
  if (cpu.stamina <= 0 && cpu.alive) triggerKO(cpu, "spinOut");
}

function triggerKO(e, reason) {
  // A single hard collision can knock both tops to zero stamina in the same
  // frame. Once a round-ending KO is already scheduled, ignore a second
  // simultaneous KO instead of marking both entities dead — otherwise
  // neither `alive` flag survives and concludeRound() can't tell who won.
  if (!e.alive || state.pendingRoundEnd !== null) return;
  e.alive = false;
  e.koReason = reason;
  playKOAnimation(e, reason);

  if (reason === "spinOut") SoundEngine.playSpinOut();
  else if (reason === "ringOut") SoundEngine.playRingOut();
  else if (reason === "burst") SoundEngine.playBurst();
  Haptics.warning();

  state.lastRoundLoser = e;
  state.lastRoundReason = reason;
  if (state.pendingRoundEnd === null) state.pendingRoundEnd = 0.9;
}

function tick(dt, time) {
  if (state.phase !== "battle" || state.paused) return;
  // The guest doesn't run its own physics — the host is authoritative and
  // streams state snapshots (see mpApplyRemoteState); running a second,
  // independently-diverging simulation here would fight the incoming data.
  if (isOnline() && state.online.role === "guest") return;

  if (state.pendingRoundEnd !== null) {
    state.pendingRoundEnd -= dt;
    if (state.pendingRoundEnd <= 0) {
      state.pendingRoundEnd = null;
      concludeRound();
      return;
    }
  }

  state.battleElapsed += dt;
  if (!state.suddenDeathActive && state.battleElapsed >= SUDDEN_DEATH_AT) {
    state.suddenDeathActive = true;
    showSuddenDeathBanner();
  }
  const decayMultiplier = state.suddenDeathActive ? SUDDEN_DEATH_MULT : 1;

  stepEntity(player, cpu, state.arena, dt, time, decayMultiplier);
  stepEntity(cpu, player, state.arena, dt, time, decayMultiplier);

  // Stamina can hit zero from plain decay (not just a collision hit) —
  // especially once Sudden Death ramps decay up — so this has to be
  // checked every frame, not just inside the collision handlers below.
  if (player.stamina <= 0 && player.alive) triggerKO(player, "spinOut");
  if (cpu.stamina <= 0 && cpu.alive) triggerKO(cpu, "spinOut");

  if (state.collisionCooldown > 0) state.collisionCooldown -= dt;
  resolveWallCollision(player);
  resolveWallCollision(cpu);
  resolveTopCollision();
  if (!isLocal2P() && !isOnline()) updateCPUAI(dt);
  if (isOnline() && state.online.role === "host") mpPushHostState();
}

function concludeRound() {
  let winner = null;
  if (player.alive && !cpu.alive) winner = player;
  else if (cpu.alive && !player.alive) winner = cpu;

  if (winner === player) state.playerWins++;
  else if (winner === cpu) state.cpuWins++;

  if (state.playerWins >= WINS_NEEDED || state.cpuWins >= WINS_NEEDED) {
    state.phase = "matchOver";
    if (state.playerWins > state.cpuWins) { SoundEngine.playMatchWin(); recordMatchResult(true); }
    else { SoundEngine.playRoundLose(); recordMatchResult(false); }
    showMatchOverOverlay();
    if (isOnline()) {
      MP.updateRoom({
        status: "finished", phase: "matchOver",
        hostWins: state.playerWins, guestWins: state.cpuWins,
        result: state.playerWins > state.cpuWins ? "host" : "guest",
      });
    }
  } else {
    state.phase = "roundResult";
    if (winner === player) SoundEngine.playRoundWin(); else SoundEngine.playRoundLose();
    showRoundResultOverlay(winner);
    if (isOnline()) {
      MP.updateRoom({
        phase: "roundResult", hostWins: state.playerWins, guestWins: state.cpuWins,
        lastRoundWinner: winner === player ? "host" : "guest",
      });
    }
  }
}

/* ============================================================
   AI — direct port of GameScene+AI.swift. Not used in local 2P.
   ============================================================ */

function launchCPUTop() {
  const cfg = DIFFICULTIES[state.difficulty];
  const origin = { x: state.arena.cx, y: state.arena.cy - state.arena.radius * 0.62 };
  const baseAngle = Math.atan2(state.arena.cy - origin.y, state.arena.cx - origin.x);
  const angle = baseAngle + (Math.random() * 2 - 1) * cfg.aimVariance;
  const power = cfg.powerMin + Math.random() * (cfg.powerMax - cfg.powerMin);
  const dirX = Math.cos(angle) * BASE_LAUNCH_SPEED, dirY = Math.sin(angle) * BASE_LAUNCH_SPEED;
  launchEntity(cpu, origin.x, origin.y, dirX, dirY, power);
  state.cpuSpecialTimer = cfg.specialCheckMin + Math.random() * (cfg.specialCheckMax - cfg.specialCheckMin);
}

function updateCPUAI(dt) {
  if (!cpu.alive || !cpu.launched) return;
  state.cpuSpecialTimer -= dt;
  if (state.cpuSpecialTimer > 0) return;
  const cfg = DIFFICULTIES[state.difficulty];
  state.cpuSpecialTimer = cfg.specialCheckMin + Math.random() * (cfg.specialCheckMax - cfg.specialCheckMin);

  if (cpu.specialGauge < 100) return;
  const behind = cpu.stamina < player.stamina - 8;
  let chance = cfg.specialUseChance;
  if (behind) chance = Math.min(1, chance * 1.4);
  if (Math.random() < chance) fireSpecialMove(cpu);
}

/* ============================================================
   Particles: sparks (collisions) + spirit bursts (Special Move)
   ============================================================ */

function spawnSparks(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 180;
    state.sparks.push({
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      life: 0, maxLife: 0.25 + Math.random() * 0.25,
      size: 2 + Math.random() * 2, color,
    });
  }
}

function updateSparks(dt) {
  state.sparks = state.sparks.filter((s) => {
    s.life += dt;
    s.x += s.vx * dt; s.y += s.vy * dt;
    s.vx *= 0.9; s.vy *= 0.9;
    return s.life < s.maxLife;
  });
}

function spawnBurst(e) {
  state.bursts.push({ x: e.x, y: e.y, color: e.preset.glow, radius: e.preset.radius, life: 0, maxLife: 0.6 });
}

function updateBursts(dt) {
  state.bursts = state.bursts.filter((b) => { b.life += dt; return b.life < b.maxLife; });
}

function playKOAnimation(e, reason) {
  e.koAnim = { reason, life: 0, vx: e.vx, vy: e.vy };
  if (reason === "burst") spawnBurst(e);
}
function updateKOAnimations(dt) {
  for (const e of [player, cpu]) {
    if (e && e.koAnim) { e.koAnim.life += dt; if (e.koAnim.life > 0.7) e.koAnim = null; }
  }
}

/* ============================================================
   Special Move trigger (shared by player input and CPU AI)
   ============================================================ */

function fireSpecialMove(e) {
  if (!triggerSpecial(e)) return;
  spawnBurst(e);
  SoundEngine.playSpecialMove();
  Haptics.impact(0.6);
  showSpecialBanner(e);
}

function showSpecialBanner(e) {
  dom.specialToast.textContent = spiritRising(e.preset.spirit);
  dom.specialToast.style.color = e.preset.glow;
  dom.specialToast.classList.add("is-visible");
  clearTimeout(showSpecialBanner._t);
  showSpecialBanner._t = setTimeout(() => dom.specialToast.classList.remove("is-visible"), 1300);
}

function showSuddenDeathBanner() {
  dom.suddenDeathLabel.classList.remove("is-hidden");
  Haptics.warning();
  clearTimeout(showSuddenDeathBanner._t);
  showSuddenDeathBanner._t = setTimeout(() => dom.suddenDeathLabel.classList.add("is-hidden"), 2000);
}

/* ============================================================
   Rendering — arena bowl, tops, sparks, pull indicators.
   ============================================================ */

function drawArena() {
  const { cx, cy, radius } = state.arena;
  ctx.clearRect(0, 0, 600, 600);

  const grad = ctx.createRadialGradient(cx, cy, radius * 0.15, cx, cy, radius);
  grad.addColorStop(0, "#020309");
  grad.addColorStop(0.55, "#070a17");
  grad.addColorStop(1, "#0d0f22");
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.strokeStyle = "#ff5a5a";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, radius * 0.24, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = "#4d78ff";
  ctx.beginPath();
  ctx.moveTo(cx - radius * 0.5, cy); ctx.lineTo(cx + radius * 0.5, cy);
  ctx.moveTo(cx, cy - radius * 0.5); ctx.lineTo(cx, cy + radius * 0.5);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.shadowColor = "#4d78ff";
  ctx.shadowBlur = 22;
  ctx.strokeStyle = "rgba(77,120,255,0.55)";
  ctx.lineWidth = 8;
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();

  ctx.strokeStyle = "#7fa8ff";
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke();
}

function drawTop(e) {
  if (!e.launched) return;
  const r = e.preset.radius;
  const shakeAmt = e.wobble * 4;
  const shakeX = shakeAmt > 0.1 ? (Math.random() * 2 - 1) * shakeAmt : 0;
  const shakeY = shakeAmt > 0.1 ? (Math.random() * 2 - 1) * shakeAmt : 0;

  ctx.save();
  let alpha = 1, scale = 1;
  if (e.koAnim) {
    const p = Math.min(1, e.koAnim.life / 0.6);
    if (e.koAnim.reason === "spinOut") { scale = 1 - p * 0.85; alpha = 1 - p; }
    else if (e.koAnim.reason === "ringOut") {
      const len = Math.max(1, Math.hypot(e.koAnim.vx, e.koAnim.vy));
      ctx.translate((e.koAnim.vx / len) * p * 240, (e.koAnim.vy / len) * p * 240);
      alpha = 1 - p; scale = 1 - p * 0.4;
    } else if (e.koAnim.reason === "burst") { alpha = 1 - p; scale = 1 - p; }
  }

  ctx.translate(e.x + shakeX, e.y + shakeY);
  ctx.scale(scale, scale);
  ctx.globalAlpha = alpha;

  // stamina ring
  const frac = Math.max(0, Math.min(1, e.stamina / 100));
  ctx.beginPath();
  ctx.arc(0, 0, r + 10, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2);
  ctx.strokeStyle = frac < 0.25 ? "#ff4d4d" : e.preset.glow;
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.stroke();

  // body
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = "#141522";
  ctx.fill();
  ctx.shadowColor = e.preset.glow;
  ctx.shadowBlur = 10;
  ctx.strokeStyle = e.preset.glow;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // fins
  ctx.save();
  ctx.rotate(e.spinAngle);
  ctx.fillStyle = e.preset.body;
  for (let i = 0; i < 6; i++) {
    const a0 = (i * Math.PI) / 3;
    const outer = r * 0.95, inner = r * 0.5;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a0) * outer, Math.sin(a0) * outer);
    ctx.lineTo(Math.cos(a0 + 0.32) * inner, Math.sin(a0 + 0.32) * inner);
    ctx.lineTo(Math.cos(a0 - 0.32) * inner, Math.sin(a0 - 0.32) * inner);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // hub
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.34, 0, Math.PI * 2);
  ctx.fillStyle = "#0d0e18";
  ctx.strokeStyle = e.preset.glow;
  ctx.lineWidth = 2;
  ctx.fill(); ctx.stroke();

  ctx.restore();

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "11px 'JetBrains Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText(e.preset.name, e.x, e.y + r + 18);
  ctx.restore();
}

function drawSparks() {
  for (const s of state.sparks) {
    const a = Math.max(0, 1 - s.life / s.maxLife);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.globalAlpha = a;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawBursts() {
  for (const b of state.bursts) {
    const p = b.life / b.maxLife;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius * (1 + p * 2.4), 0, Math.PI * 2);
    ctx.strokeStyle = b.color;
    ctx.lineWidth = 4;
    ctx.globalAlpha = Math.max(0, 1 - p) * 0.8;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawPullIndicators() {
  ctx.lineWidth = 3;
  for (const drag of state.activeDrags.values()) {
    ctx.strokeStyle = drag.target === "p1" ? "#ffd27a" : "#6fd8ff";
    ctx.beginPath();
    ctx.moveTo(drag.anchorX, drag.anchorY);
    ctx.lineTo(drag.curX, drag.curY);
    ctx.stroke();
  }
}

/**
 * A dimmed, non-spinning preview of a not-yet-launched top, shown at its
 * default pull-back spot so the "drag back from your top" hint has
 * something to actually point at.
 */
function drawRestingTop(preset, x, y) {
  const r = preset.radius;
  ctx.save();
  ctx.globalAlpha = 0.5;

  // Full stamina ring, matching the halo a launched top gets, so the idle
  // preview reads at the same visual size instead of looking smaller/weaker.
  ctx.beginPath();
  ctx.arc(x, y, r + 10, 0, Math.PI * 2);
  ctx.strokeStyle = preset.glow;
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "#141522";
  ctx.fill();
  ctx.shadowColor = preset.glow;
  ctx.shadowBlur = 10;
  ctx.strokeStyle = preset.glow;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.fillStyle = preset.body;
  for (let i = 0; i < 6; i++) {
    const a0 = (i * Math.PI) / 3;
    const outer = r * 0.95, inner = r * 0.5;
    ctx.beginPath();
    ctx.moveTo(x + Math.cos(a0) * outer, y + Math.sin(a0) * outer);
    ctx.lineTo(x + Math.cos(a0 + 0.32) * inner, y + Math.sin(a0 + 0.32) * inner);
    ctx.lineTo(x + Math.cos(a0 - 0.32) * inner, y + Math.sin(a0 - 0.32) * inner);
    ctx.closePath();
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(x, y, r * 0.34, 0, Math.PI * 2);
  ctx.fillStyle = "#0d0e18";
  ctx.strokeStyle = preset.glow;
  ctx.lineWidth = 2;
  ctx.fill(); ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "11px 'JetBrains Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText(preset.name, x, y + r + 18);
  ctx.restore();
}

function draw() {
  drawArena();
  drawPullIndicators();
  if (player) {
    if (player.launched) drawTop(player);
    else if (state.phase === "launch") drawRestingTop(player.preset, state.arena.cx, state.arena.cy + state.arena.radius * 0.62);
  }
  if (cpu) {
    if (cpu.launched) drawTop(cpu);
    else if (state.phase === "launch") drawRestingTop(cpu.preset, state.arena.cx, state.arena.cy - state.arena.radius * 0.62);
  }
  drawSparks();
  drawBursts();
}

/* ============================================================
   Background canvas — a faint drifting starfield behind the app.
   ============================================================ */

let bgStars = [];
function initBgStars() {
  const w = window.innerWidth, h = window.innerHeight;
  bgCanvas.width = w; bgCanvas.height = h;
  bgStars = Array.from({ length: 70 }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    r: Math.random() * 1.4 + 0.3, s: Math.random() * 0.4 + 0.05,
  }));
}
function drawBgStars(dt) {
  const w = bgCanvas.width, h = bgCanvas.height;
  bgCtx.clearRect(0, 0, w, h);
  bgCtx.fillStyle = "rgba(200,215,255,0.5)";
  for (const s of bgStars) {
    s.y += s.s * dt * 16;
    if (s.y > h) s.y = 0;
    bgCtx.globalAlpha = 0.4 + s.s;
    bgCtx.beginPath();
    bgCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    bgCtx.fill();
  }
  bgCtx.globalAlpha = 1;
}

/* ============================================================
   Menu — top grid, mode/difficulty pills, language, i18n refresh
   ============================================================ */

function buildTopGrid() {
  dom.topGrid.innerHTML = "";
  TOPS.forEach((top, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "top-card";
    card.dataset.index = String(index);
    card.style.setProperty("--card-color", top.glow);
    card.innerHTML = `
      <p class="top-card-name">${TYPE_EMOJI[top.type]} ${top.name}</p>
      <p class="top-card-type" data-type="${top.type}"></p>
      <div class="top-card-stats">
        <div class="top-stat-row"><span data-stat="statAtk"></span><div class="bar-track"><span class="bar-fill atk" style="width:${top.atk * 100}%"></span></div></div>
        <div class="top-stat-row"><span data-stat="statDef"></span><div class="bar-track"><span class="bar-fill def" style="width:${top.def * 100}%"></span></div></div>
        <div class="top-stat-row"><span data-stat="statStm"></span><div class="bar-track"><span class="bar-fill stm" style="width:${top.stm * 100}%"></span></div></div>
      </div>`;
    card.addEventListener("click", () => {
      SoundEngine.playUITap();
      if (state.menuStep === "pickPlayer2") state.player2PresetIndex = index;
      else state.playerPresetIndex = index;
      refreshTopSelection();
    });
    dom.topGrid.appendChild(card);
  });
  refreshTopCardLabels();
}

function refreshTopCardLabels() {
  dom.topGrid.querySelectorAll(".top-card-type").forEach((el) => { el.textContent = typeName(el.dataset.type); });
  dom.topGrid.querySelectorAll("[data-stat]").forEach((el) => { el.textContent = t(el.dataset.stat); });
}

function refreshTopSelection() {
  const activeIndex = state.menuStep === "pickPlayer2" ? state.player2PresetIndex : state.playerPresetIndex;
  dom.topGrid.querySelectorAll(".top-card").forEach((card) => {
    card.classList.toggle("is-selected", Number(card.dataset.index) === activeIndex);
  });
  dom.topPanelLabel.textContent = isLocal2P()
    ? (state.menuStep === "pickPlayer2" ? t("pickTopP2") : t("pickTopP1"))
    : t("chooseTop");
}

function setMode(mode) {
  const wasOnline = isOnline();
  state.matchMode = mode;
  state.menuStep = "main";
  dom.modeRow.querySelectorAll(".pill-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.mode === mode));
  dom.diffRow.classList.toggle("is-hidden", mode !== "cpu");
  dom.startBtn.textContent = t("pressStart");
  if (mode === "online") {
    mpResetLobbyUI();
    dom.lobbyPanel.classList.remove("is-hidden");
    dom.topPanel.classList.add("is-hidden");
    dom.startBtn.classList.add("is-hidden");
  } else {
    if (wasOnline) mpLeaveIfActive();
    dom.lobbyPanel.classList.add("is-hidden");
    dom.topPanel.classList.remove("is-hidden");
    dom.startBtn.classList.remove("is-hidden");
  }
  refreshTopSelection();
}

function setDifficulty(diff) {
  state.difficulty = diff;
  dom.diffRow.querySelectorAll(".pill-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.diff === diff));
}

function toggleLanguage() {
  lang = lang === "en" ? "pt" : "en";
  refreshTexts();
}

function refreshTexts() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  dom.langLabel.textContent = lang.toUpperCase();
  dom.helpBody.textContent = t("helpBody");
  refreshTopCardLabels();
  refreshTopSelection();
  dom.startBtn.textContent = state.phase === "menu" ? t("pressStart") : dom.startBtn.textContent;
  dom.pullHint.textContent = t("pullHint");
  dom.pullHint2.textContent = t("pullHint");
  dom.settingsSound.textContent = state.soundOn ? "ON" : "OFF";
  dom.settingsHaptics.textContent = state.hapticsOn ? "ON" : "OFF";
  dom.settingsLang.textContent = lang.toUpperCase();
  dom.settingsWins.textContent = String(state.wins);
  if (dom.tutorialOverlay.classList.contains("is-open")) refreshTutorialPage();
  if (state.phase === "battle" || state.phase === "roundResult" || state.phase === "launch") updateBattleHudLabels();
  if (state.phase === "roundResult" && state.lastRoundWinnerIsPlayer !== undefined) {
    refreshRoundResultText();
  }
  if (state.phase === "matchOver" && state.lastMatchWon !== undefined) {
    refreshMatchOverText();
  }
}

/* ============================================================
   HUD + overlays
   ============================================================ */

function nameFor(isP1) {
  if (isP1) return isLocal2P() ? (lang === "pt" ? "Jogador 1" : "Player 1") : player.preset.name;
  return isLocal2P() ? (lang === "pt" ? "Jogador 2" : "Player 2") : t("modeVsCPU").replace("vs ", "");
}

function updateBattleHudLabels() {
  dom.p1Name.textContent = player ? player.preset.name : "—";
  dom.p2Name.textContent = cpu ? (isLocal2P() ? cpu.preset.name : cpu.preset.name) : "—";
  dom.roundLabel.textContent = `${t("round")} ${state.roundNumber} — ${state.playerWins}:${state.cpuWins}`;
}

function updateBattleHud() {
  if (!player || !cpu) return;
  dom.p1Bar.style.transform = `scaleX(${Math.max(0, player.stamina) / 100})`;
  dom.p2Bar.style.transform = `scaleX(${Math.max(0, cpu.stamina) / 100})`;
  updateBattleHudLabels();

  dom.p1SpecialPct.textContent = `${Math.floor(player.specialGauge)}%`;
  dom.p1Special.classList.toggle("is-ready", player.specialGauge >= 100);
  if (isAnyMultiplayer()) {
    dom.p2Special.classList.remove("is-hidden");
    dom.p2SpecialPct.textContent = `${Math.floor(cpu.specialGauge)}%`;
    dom.p2Special.classList.toggle("is-ready", cpu.specialGauge >= 100);
  } else {
    dom.p2Special.classList.add("is-hidden");
  }
}

function showLaunchOverlay(show) {
  dom.launchOverlay.classList.toggle("is-hidden", !show);
  dom.pullHint2.classList.toggle("is-hidden", !isLocal2P());
}

function openModal(overlay) { overlay.classList.add("is-open"); }
function closeModal(overlay) { overlay.classList.remove("is-open"); }

function startRound() {
  state.phase = "launch";
  state.paused = false;
  state.battleElapsed = 0;
  state.suddenDeathActive = false;
  state.pendingRoundEnd = null;
  state.collisionCooldown = 0;
  state.sparks = [];
  state.bursts = [];
  dom.suddenDeathLabel.classList.add("is-hidden");
  player.launched = false; player.alive = true; player.koAnim = null;
  cpu.launched = false; cpu.alive = true; cpu.koAnim = null;
  dom.gameCard.classList.remove("is-hidden");
  dom.hero.classList.add("is-hidden");
  dom.modePanel.classList.add("is-hidden");
  dom.topPanel.classList.add("is-hidden");
  dom.startBtn.classList.add("is-hidden");
  dom.iconRow.classList.add("is-hidden");
  dom.roundResultOverlay.classList.add("is-hidden");
  dom.pauseOverlay.classList.add("is-hidden");
  dom.lobbyPanel.classList.add("is-hidden");
  showLaunchOverlay(true);
  updateBattleHud();
  if (!isLocal2P() && !isOnline()) launchCPUTop();
}

function showRoundResultOverlay(winner) {
  state.lastRoundWinnerIsPlayer = winner === player;
  refreshRoundResultText();
  dom.roundResultOverlay.classList.remove("is-hidden");
}
function refreshRoundResultText() {
  const winnerIsPlayer = state.lastRoundWinnerIsPlayer;
  let key;
  if (isOnline()) key = winnerIsPlayer ? "p1WinsOnline" : "p2WinsOnline";
  else if (isLocal2P()) key = winnerIsPlayer ? "p1WinRound" : "p2WinRound";
  else key = winnerIsPlayer ? "youWinRound" : "cpuWinRound";
  dom.roundResultTitle.textContent = t(key);
  dom.roundResultSub.textContent = t("tapToContinue");
}

function showMatchOverOverlay() {
  state.lastMatchWon = state.playerWins > state.cpuWins;
  refreshMatchOverText();
  dom.matchIcon.textContent = state.lastMatchWon ? "🏆" : "💥";
  dom.matchReplay.classList.toggle("is-hidden", isOnline());
  openModal(dom.matchOverlay);
}
function refreshMatchOverText() {
  let titleKey;
  if (isLocal2P()) titleKey = state.lastMatchWon ? "p1MatchWin" : "p2MatchWin";
  else titleKey = state.lastMatchWon ? "matchWinTitle" : "matchLoseTitle";
  dom.matchTitle.textContent = t(titleKey);
  dom.matchSub.textContent = `${state.playerWins} : ${state.cpuWins}`;
}

function recordMatchResult(playerWon) {
  if (playerWon) state.wins += 1;
}

function returnToMenu() {
  state.phase = "menu";
  state.paused = false;
  player = null; cpu = null;
  const wasOnline = isOnline();
  closeModal(dom.matchOverlay);
  closeModal(dom.settingsOverlay);
  closeModal(dom.helpOverlay);
  dom.pauseOverlay.classList.add("is-hidden");
  dom.gameCard.classList.add("is-hidden");
  dom.hero.classList.remove("is-hidden");
  dom.modePanel.classList.remove("is-hidden");
  dom.topPanel.classList.remove("is-hidden");
  dom.startBtn.classList.remove("is-hidden");
  dom.iconRow.classList.remove("is-hidden");
  dom.matchReplay.classList.remove("is-hidden");
  state.menuStep = "main";
  if (wasOnline) setMode("cpu"); else refreshTopSelection();
}

/* ============================================================
   Settings / Help / Tutorial
   ============================================================ */

function openSettings() {
  dom.settingsSound.textContent = state.soundOn ? "ON" : "OFF";
  dom.settingsHaptics.textContent = state.hapticsOn ? "ON" : "OFF";
  dom.settingsLang.textContent = lang.toUpperCase();
  dom.settingsWins.textContent = String(state.wins);
  openModal(dom.settingsOverlay);
}

function openHelp() {
  dom.helpBody.textContent = t("helpBody");
  openModal(dom.helpOverlay);
}

function openTutorial() {
  state.tutorialPage = 1;
  refreshTutorialPage();
  openModal(dom.tutorialOverlay);
}
function refreshTutorialPage() {
  dom.tutorialTitleEl.textContent = tutorialTitle(state.tutorialPage);
  dom.tutorialBodyEl.textContent = tutorialBody(state.tutorialPage);
  dom.tutorialDots.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement("span");
    if (i === state.tutorialPage) dot.classList.add("is-active");
    dom.tutorialDots.appendChild(dot);
  }
  dom.tutorialNext.textContent = state.tutorialPage === 5 ? t("tutorialDone") : t("tutorialNext");
}
function advanceTutorial() {
  if (state.tutorialPage >= 5) { closeModal(dom.tutorialOverlay); return; }
  state.tutorialPage += 1;
  refreshTutorialPage();
}

/* ============================================================
   Match lifecycle
   ============================================================ */

function randomCpuIndex() {
  let idx = Math.floor(Math.random() * TOPS.length);
  if (idx === state.playerPresetIndex) idx = (idx + 1) % TOPS.length;
  return idx;
}

function startNewMatch() {
  const p1Preset = TOPS[state.playerPresetIndex];
  const p2Index = isLocal2P() ? state.player2PresetIndex : randomCpuIndex();
  if (!isLocal2P()) state.cpuPresetIndex = p2Index;
  player = makeEntity(p1Preset, true);
  cpu = makeEntity(TOPS[p2Index], false);
  state.playerWins = 0; state.cpuWins = 0; state.roundNumber = 1;
  startRound();
}

function advanceAfterRoundResult() {
  dom.roundResultOverlay.classList.add("is-hidden");
  if (isOnline() && state.online.role === "guest") return; // host owns round transitions; guest waits for the room update
  state.roundNumber += 1;
  startRound();
  if (isOnline()) MP.updateRoom({ phase: "launch", roundNumber: state.roundNumber });
}

/* ============================================================
   Input — pull-back launch gesture via Pointer Events, supporting
   two simultaneous drags (local 2P) keyed by pointerId.
   ============================================================ */

function canvasPoint(evt) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return { x: (evt.clientX - rect.left) * scaleX, y: (evt.clientY - rect.top) * scaleY };
}

function checkBothLaunched() {
  if (isOnline() && state.online.role === "guest") return; // guest's phase mirrors the host's room updates instead
  const ready = isAnyMultiplayer() ? (player.launched && cpu.launched) : player.launched;
  if (ready) {
    state.phase = "battle";
    showLaunchOverlay(false);
    if (isOnline()) MP.updateRoom({ phase: "battle" });
  }
}

canvas.addEventListener("pointerdown", (evt) => {
  if (state.phase !== "launch" || state.paused) return;
  const p = canvasPoint(evt);
  let targetKey, targetEntity;
  if (isLocal2P()) {
    if (p.y > state.arena.cy) { targetKey = "p1"; targetEntity = player; }
    else { targetKey = "p2"; targetEntity = cpu; }
  } else {
    targetKey = "p1"; targetEntity = player;
  }
  if (targetEntity.launched) return;
  for (const drag of state.activeDrags.values()) { if (drag.target === targetKey) return; }
  canvas.setPointerCapture(evt.pointerId);
  state.activeDrags.set(evt.pointerId, { target: targetKey, anchorX: p.x, anchorY: p.y, curX: p.x, curY: p.y });
});

canvas.addEventListener("pointermove", (evt) => {
  const drag = state.activeDrags.get(evt.pointerId);
  if (!drag) return;
  const p = canvasPoint(evt);
  drag.curX = p.x; drag.curY = p.y;
});

function endDrag(evt) {
  const drag = state.activeDrags.get(evt.pointerId);
  if (!drag) return;
  state.activeDrags.delete(evt.pointerId);
  const dx = drag.anchorX - drag.curX, dy = drag.anchorY - drag.curY;
  const pullLen = Math.hypot(dx, dy);
  if (pullLen < 12) return;
  const dirX = dx / pullLen, dirY = dy / pullLen;
  const power = Math.min(1, pullLen / 160);
  const entity = drag.target === "p1" ? player : cpu;
  const vx = dirX * BASE_LAUNCH_SPEED, vy = dirY * BASE_LAUNCH_SPEED;
  launchEntity(entity, drag.anchorX, drag.anchorY, vx, vy, power);
  if (isOnline() && state.online.role === "guest") {
    MP.sendAction("launch", { originX: drag.anchorX, originY: drag.anchorY, dirX: vx, dirY: vy, power });
  }
  SoundEngine.playLaunch();
  Haptics.impact(0.3);
  checkBothLaunched();
}
canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);

/* ============================================================
   Button + modal wiring
   ============================================================ */

dom.modeRow.querySelectorAll(".pill-btn").forEach((btn) => {
  btn.addEventListener("click", () => { SoundEngine.playUITap(); setMode(btn.dataset.mode); });
});
dom.diffRow.querySelectorAll(".pill-btn").forEach((btn) => {
  btn.addEventListener("click", () => { SoundEngine.playUITap(); setDifficulty(btn.dataset.diff); });
});

dom.startBtn.addEventListener("click", () => {
  SoundEngine.playUITap();
  if (isOnline()) {
    mpConfirmReady();
    return;
  }
  if (isLocal2P() && state.menuStep === "main") {
    state.menuStep = "pickPlayer2";
    refreshTopSelection();
    return;
  }
  startNewMatch();
});

dom.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  dom.soundIcon.textContent = state.soundOn ? "🔊" : "🔇";
});
dom.langToggle.addEventListener("click", toggleLanguage);

dom.settingsBtn.addEventListener("click", openSettings);
dom.settingsClose.addEventListener("click", () => closeModal(dom.settingsOverlay));
dom.settingsSound.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  dom.settingsSound.textContent = state.soundOn ? "ON" : "OFF";
  dom.soundIcon.textContent = state.soundOn ? "🔊" : "🔇";
});
dom.settingsHaptics.addEventListener("click", () => {
  state.hapticsOn = !state.hapticsOn;
  dom.settingsHaptics.textContent = state.hapticsOn ? "ON" : "OFF";
});
dom.settingsLang.addEventListener("click", toggleLanguage);

dom.helpBtn.addEventListener("click", openHelp);
dom.helpClose.addEventListener("click", () => closeModal(dom.helpOverlay));
dom.tutorialBtn.addEventListener("click", openTutorial);
dom.tutorialNext.addEventListener("click", () => { SoundEngine.playUITap(); advanceTutorial(); });
dom.tutorialSkip.addEventListener("click", () => closeModal(dom.tutorialOverlay));

dom.pauseBtn.addEventListener("click", () => {
  if (state.phase !== "launch" && state.phase !== "battle") return;
  state.paused = !state.paused;
  dom.pauseOverlay.classList.toggle("is-hidden", !state.paused);
});
dom.pauseOverlay.addEventListener("click", () => {
  if (!state.paused) return;
  state.paused = false;
  dom.pauseOverlay.classList.add("is-hidden");
});
dom.pauseMenuBtn.addEventListener("click", (evt) => {
  evt.stopPropagation();
  returnToMenu();
});
dom.homeBtn.addEventListener("click", () => returnToMenu());

dom.p1Special.addEventListener("click", () => { if (state.phase === "battle") fireSpecialMove(player); });
dom.p2Special.addEventListener("click", () => { if (state.phase === "battle" && isLocal2P()) fireSpecialMove(cpu); });

dom.roundResultOverlay.addEventListener("click", () => {
  if (state.phase !== "roundResult") return;
  SoundEngine.playUITap();
  advanceAfterRoundResult();
});

dom.matchReplay.addEventListener("click", () => {
  closeModal(dom.matchOverlay);
  if (isOnline()) returnToMenu(); else startNewMatch();
});
dom.matchClose.addEventListener("click", () => { closeModal(dom.matchOverlay); returnToMenu(); });

dom.gameCard.addEventListener("pointermove", (evt) => {
  const rect = dom.gameCard.getBoundingClientRect();
  dom.gameCard.style.setProperty("--mx", `${((evt.clientX - rect.left) / rect.width) * 100}%`);
  dom.gameCard.style.setProperty("--my", `${((evt.clientY - rect.top) / rect.height) * 100}%`);
});

function startIntroSequence() {
  let introTimer;
  const dismiss = () => { closeModal(dom.introOverlay); clearTimeout(introTimer); };
  introTimer = setTimeout(dismiss, 3200);
  dom.introPlay.addEventListener("click", dismiss, { once: true });
}

/* ============================================================
   Online multiplayer — glue between the game engine above and
   window.MP (beyblade-multiplayer.js). One player ("host") runs the
   authoritative simulation and streams state; the other ("guest") renders
   what it receives and sends its own launch/special taps as actions for
   the host to apply. See beyblade-multiplayer.js for why (continuous
   physics with per-frame randomness can't be synced like a turn list).
   ============================================================ */

function mpResetLobbyUI() {
  dom.lobbyIdle.classList.remove("is-hidden");
  dom.lobbyWaiting.classList.add("is-hidden");
  dom.lobbyMatched.classList.add("is-hidden");
  dom.lobbyJoinRow.classList.add("is-hidden");
  dom.lobbyCodeInput.value = "";
  dom.lobbyIdleStatus.textContent = "";
  dom.lobbyIdleStatus.classList.remove("is-error");
}

function mpShowWaiting(code) {
  dom.lobbyIdle.classList.add("is-hidden");
  dom.lobbyMatched.classList.add("is-hidden");
  dom.lobbyWaiting.classList.remove("is-hidden");
  dom.lobbyCodeDisplay.textContent = code;
}

function mpShowMatched() {
  dom.lobbyIdle.classList.add("is-hidden");
  dom.lobbyWaiting.classList.add("is-hidden");
  dom.lobbyMatched.classList.remove("is-hidden");
  dom.lobbyMatchedStatus.textContent = t("opponentJoined");
  dom.topPanel.classList.remove("is-hidden");
  dom.startBtn.classList.remove("is-hidden");
  dom.startBtn.textContent = t("readyBtn");
  refreshTopSelection();
}

function mpErrorMessage(err) {
  const msg = err && err.message;
  if (msg === "not-configured") return t("onlineNotConfigured");
  if (msg === "room-not-found") return t("roomNotFound");
  if (msg === "room-full") return t("roomFull");
  if (msg === "room-finished") return t("roomFinished");
  if (msg === "lobby-full") return t("lobbyFull");
  return t("onlineNotConfigured");
}

function mpShowIdleError(err) {
  dom.lobbyIdleStatus.textContent = mpErrorMessage(err);
  dom.lobbyIdleStatus.classList.add("is-error");
}

function mpLeaveIfActive() {
  if (state.online.active && window.MP) MP.leaveRoom();
  state.online.active = false;
  state.online.role = null;
  state.online.code = null;
  state.online.matched = false;
  state.online.myReady = false;
  state.online.oppReady = false;
  state.online.oppOnline = false;
  state.online.lastRoundWinnerIsHost = null;
}

async function mpConfirmReady() {
  if (state.online.myReady) return;
  state.online.myReady = true;
  dom.topPanel.classList.add("is-hidden");
  dom.startBtn.classList.add("is-hidden");
  dom.lobbyMatchedStatus.textContent = t("waitingForOpponentPick");
  const field = state.online.role === "host"
    ? { hostTopIndex: state.playerPresetIndex }
    : { guestTopIndex: state.playerPresetIndex };
  try {
    await MP.updateRoom(field);
  } catch (err) {
    state.online.myReady = false;
    dom.topPanel.classList.remove("is-hidden");
    dom.startBtn.classList.remove("is-hidden");
  }
}

/** First-round setup: creates local entities from the room's confirmed top picks and starts the
 * round. Called by both sides once `room.phase` becomes "launch" for the first time. */
function mpBeginOnlineBattle(room) {
  const myTopIndex = state.online.role === "host" ? room.hostTopIndex : room.guestTopIndex;
  const oppTopIndex = state.online.role === "host" ? room.guestTopIndex : room.hostTopIndex;
  player = makeEntity(TOPS[myTopIndex], true);
  cpu = makeEntity(TOPS[oppTopIndex], false);
  state.playerWins = state.online.role === "host" ? (room.hostWins || 0) : (room.guestWins || 0);
  state.cpuWins = state.online.role === "host" ? (room.guestWins || 0) : (room.hostWins || 0);
  state.roundNumber = room.roundNumber || 1;
  startRound();
  if (state.online.role === "host") MP.updateRoom({ phase: "launch" });
}

/** Subsequent-round reset for the guest — the host already ran this via startRound(). */
function mpResetRoundLocal() {
  state.phase = "launch";
  state.paused = false;
  state.sparks = [];
  state.bursts = [];
  dom.suddenDeathLabel.classList.add("is-hidden");
  player.launched = false; player.alive = true; player.koAnim = null;
  cpu.launched = false; cpu.alive = true; cpu.koAnim = null;
  dom.roundResultOverlay.classList.add("is-hidden");
  showLaunchOverlay(true);
}

function mpHandleRoomUpdate(room) {
  if (!state.online.active) return;

  if (state.online.role === "host" && room.phase === "picking" && room.hostTopIndex != null && room.guestTopIndex != null) {
    mpBeginOnlineBattle(room);
    return;
  }

  if (room.phase === "launch" && !player) {
    mpBeginOnlineBattle(room);
  } else if (room.phase === "launch" && state.phase !== "launch" && state.phase !== "battle") {
    if (state.online.role === "guest") {
      state.roundNumber = room.roundNumber || state.roundNumber;
      mpResetRoundLocal();
    }
  }

  if (room.phase === "battle" && state.phase !== "battle" && state.online.role === "guest") {
    state.phase = "battle";
    showLaunchOverlay(false);
  }

  if (state.online.role === "guest" && player && cpu) {
    if (room.phase === "roundResult" && state.phase !== "roundResult") {
      state.phase = "roundResult";
      state.playerWins = room.guestWins || 0;
      state.cpuWins = room.hostWins || 0;
      const winnerIsPlayer = room.lastRoundWinner === "guest";
      showRoundResultOverlay(winnerIsPlayer ? player : cpu);
    }
    if (room.phase === "matchOver" && state.phase !== "matchOver") {
      state.phase = "matchOver";
      state.playerWins = room.guestWins || 0;
      state.cpuWins = room.hostWins || 0;
      showMatchOverOverlay();
    }
  }
}

function mpApplySnapshotToEntity(e, snapshot, prefix) {
  const wasAlive = e.alive;
  e.x = snapshot[prefix + "X"] || 0;
  e.y = snapshot[prefix + "Y"] || 0;
  e.vx = snapshot[prefix + "Vx"] || 0;
  e.vy = snapshot[prefix + "Vy"] || 0;
  e.spinAngle = snapshot[prefix + "SpinAngle"] || 0;
  e.stamina = snapshot[prefix + "Stamina"] || 0;
  e.specialGauge = snapshot[prefix + "SpecialGauge"] || 0;
  e.launched = !!snapshot[prefix + "Launched"];
  e.alive = !!snapshot[prefix + "Alive"];
  const koReason = snapshot[prefix + "KoReason"] || null;
  if (wasAlive && !e.alive && koReason && !e.koAnim) {
    e.koReason = koReason;
    playKOAnimation(e, koReason);
  }
}

function mpApplyRemoteState(snapshot) {
  if (!player || !cpu) return;
  mpApplySnapshotToEntity(player, snapshot, "guest");
  mpApplySnapshotToEntity(cpu, snapshot, "host");
  if (snapshot.suddenDeathActive && !state.suddenDeathActive) showSuddenDeathBanner();
  state.suddenDeathActive = !!snapshot.suddenDeathActive;
  state.battleElapsed = snapshot.battleElapsed || 0;
}

function mpApplyRemoteAction(action) {
  if (!player || !cpu) return;
  if (action.type === "launch") {
    if (cpu.launched) return;
    launchEntity(cpu, action.originX, action.originY, action.dirX, action.dirY, action.power);
    SoundEngine.playLaunch();
    checkBothLaunched();
  } else if (action.type === "special") {
    fireSpecialMove(cpu);
  }
}

function mpPushHostState() {
  if (!player || !cpu) return;
  MP.pushState({
    hostX: player.x, hostY: player.y, hostVx: player.vx, hostVy: player.vy,
    hostSpinAngle: player.spinAngle, hostStamina: player.stamina, hostSpecialGauge: player.specialGauge,
    hostAlive: player.alive, hostLaunched: player.launched, hostKoReason: player.koReason,
    guestX: cpu.x, guestY: cpu.y, guestVx: cpu.vx, guestVy: cpu.vy,
    guestSpinAngle: cpu.spinAngle, guestStamina: cpu.stamina, guestSpecialGauge: cpu.specialGauge,
    guestAlive: cpu.alive, guestLaunched: cpu.launched, guestKoReason: cpu.koReason,
    battleElapsed: state.battleElapsed, suddenDeathActive: state.suddenDeathActive,
  });
}

function mpWireCallbacks() {
  if (!window.MP) return;
  MP.onOpponentJoined = () => { state.online.matched = true; mpShowMatched(); };
  MP.onRoomUpdate = mpHandleRoomUpdate;
  MP.onRemoteState = mpApplyRemoteState;
  MP.onRemoteAction = mpApplyRemoteAction;
  MP.onOpponentPresence = (online) => { state.online.oppOnline = online; };
  MP.onError = (err) => { console.warn("Multiplayer error:", err); };
}
if (window.MP) mpWireCallbacks(); else window.addEventListener("mp-ready", mpWireCallbacks, { once: true });

dom.lobbyCreateBtn.addEventListener("click", async () => {
  SoundEngine.playUITap();
  if (!window.MP) { mpShowIdleError({ message: "not-configured" }); return; }
  dom.lobbyIdleStatus.textContent = "";
  dom.lobbyIdleStatus.classList.remove("is-error");
  try {
    const res = await MP.createRoom();
    state.online.active = true; state.online.role = res.role; state.online.code = res.code;
    mpShowWaiting(res.code);
  } catch (err) { mpShowIdleError(err); }
});

dom.lobbyJoinBtn.addEventListener("click", () => {
  SoundEngine.playUITap();
  dom.lobbyJoinRow.classList.toggle("is-hidden");
  dom.lobbyCodeInput.focus();
});

dom.lobbyJoinConfirmBtn.addEventListener("click", async () => {
  SoundEngine.playUITap();
  if (!window.MP) { mpShowIdleError({ message: "not-configured" }); return; }
  const code = dom.lobbyCodeInput.value.trim().toUpperCase();
  if (!code) return;
  dom.lobbyIdleStatus.textContent = "";
  dom.lobbyIdleStatus.classList.remove("is-error");
  try {
    const res = await MP.joinRoom(code);
    state.online.active = true; state.online.role = res.role; state.online.code = res.code;
    state.online.matched = true;
    mpShowMatched();
  } catch (err) { mpShowIdleError(err); }
});
dom.lobbyCodeInput.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") dom.lobbyJoinConfirmBtn.click();
});

dom.lobbyQuickBtn.addEventListener("click", async () => {
  SoundEngine.playUITap();
  if (!window.MP) { mpShowIdleError({ message: "not-configured" }); return; }
  dom.lobbyIdleStatus.textContent = "";
  dom.lobbyIdleStatus.classList.remove("is-error");
  try {
    const res = await MP.quickPlay();
    state.online.active = true; state.online.role = res.role; state.online.code = res.code;
    if (res.role === "host") { mpShowWaiting(res.code); } else { state.online.matched = true; mpShowMatched(); }
  } catch (err) { mpShowIdleError(err); }
});

dom.lobbyCancelBtn.addEventListener("click", () => {
  SoundEngine.playUITap();
  mpLeaveIfActive();
  mpResetLobbyUI();
});

/* ============================================================
   Main loop
   ============================================================ */

function loop(now) {
  requestAnimationFrame(loop);
  if (!state.lastTime) state.lastTime = now;
  const dt = Math.min((now - state.lastTime) / 1000, 0.05);
  state.lastTime = now;
  const time = now / 1000;

  drawBgStars(dt);

  tick(dt, time);
  updateSparks(dt);
  updateBursts(dt);
  updateKOAnimations(dt);
  if (player && cpu) updateBattleHud();

  if (state.phase === "launch" || state.phase === "battle" || state.phase === "roundResult") draw();
}

/* ============================================================
   Init
   ============================================================ */

function init() {
  initBgStars();
  buildTopGrid();
  setMode("cpu");
  setDifficulty("normal");
  refreshTexts();
  startIntroSequence();
  requestAnimationFrame(loop);
}

window.addEventListener("resize", initBgStars);

init();
