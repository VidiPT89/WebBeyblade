# 🌀 iBeyblade — Launch, Spin, Battle (Web)

> A browser spinning-top battle game built with vanilla HTML, CSS and JavaScript — pick a top, pull back to launch it into a glowing arena, and outlast your rival's spin.

**🎮 [Live Demo](https://vidipt89.github.io/WebBeyblade/)**

iBeyblade is a canvas-and-DOM hybrid game built with **no framework, no build step, no game engine** — just three flat files. Choose one of eight spinning tops, each with its own Attack, Defense, Stamina profile and guardian spirit, pull back on the arena to set your launch angle and power, then watch the battle unfold: tops drift and clash on their own physics, and your mid-fight input is a Special Move gauge that builds up as you spin and clash. Play solo against a CPU rival with three difficulty levels, or pass-and-play locally as two humans on one device. First to win two rounds takes the match.

## 📦 What's Inside

- 🌀 A custom top-down physics simulation running on `requestAnimationFrame` — no physics library — driving spin decay, wall bounces and top-to-top collisions
- 🎯 Eight original tops, each with its own guardian spirit — Inferno Fang (Phoenix), Titan Shell (Tortoise), Chrono Drift (Serpent), Vortex Core (Wolf), Thunder Claw (Tiger), Frost Wyrm (Dragon), Sandstorm Fury (Scorpion), Abyssal Maw (Shark)
- 🔄 Authentic left-spin/right-spin mechanics: two tops spinning the same way clash softly, opposite spins clash hard
- 💥 Three ways to lose a round — **Spin-out** (stamina runs out), **Ring-out** (knocked past the arena rim), and a rare instant **Burst** on an extreme-force clash
- ⏱️ A Sudden Death safety net: any round still undecided past 22s ramps up stamina decay sharply, so no fight can stall out forever
- 🖐️ A pull-back-and-release launch gesture via Pointer Events, with a visible aim line while dragging
- ✨ A Special Move gauge that fills as you spin, bounce off walls and clash — unleash it for a temporary Attack/Defense buff and a burst of your top's guardian spirit, with its own name banner and visual flourish
- 🤖 CPU rival with three difficulty levels — Easy, Normal, Hard — tuning its launch accuracy and how aggressively it uses its own Special Move
- 👥 Local 2-player mode — pass-and-play on one device, each player launches from their own half of the arena via simultaneous multi-touch, each with their own Special Move gauge
- 🏆 Best-of-3 rounds per match, with a round-result and match-over overlay between fights
- 📖 A reachable-anytime five-page Tutorial plus a Help quick-reference and a Settings screen (sound, haptics, language, lifetime win count)
- 🔊 Fully synthesized sound effects via the Web Audio API — launch whoosh, clash clang, spin-out, ring-out, burst, Special Move flourish, victory fanfare — no audio files
- 📳 Haptic feedback scaled to impact strength on every clash, wall bounce and knockout — toggleable in Settings
- 🇵🇹 🇬🇧 One-tap language toggle between European Portuguese and English, live-updated everywhere including mid-battle
- ⏸️ Pause/resume at any time, plus a direct Home shortcut back to the menu
- 🎬 An animated intro splash on load that auto-dismisses into the menu, crediting the developer
- 🌌 Animated ambient starfield rendered on a dedicated background canvas, independent of the arena
- 🖥️ Neon glow styling and a scanline overlay for an authentic arcade feel

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
WebBeyblade/
├── index.html      # Page structure, menu, battle HUD, canvas, every modal overlay
├── style.css       # Theme, layout, neon/scanline effects, responsive rules
├── script.js       # i18n, top presets, physics engine, AI, rendering, input, main loop
├── LICENSE         # MIT License
└── README.md
```

## ⚙️ Game Mechanics

```
New Match:
  wins = 0:0, round = 1
  vs CPU    → player picks a top, CPU is assigned a different one at random
  vs Player → Player 1 picks a top, then Player 2 picks a top

Each Round:
  both tops reset to full stamina/gauge, waiting to be launched
  each side pulls back and releases to launch; battle starts once both are launched
  from then on, movement is autonomous — steering blends a light pull toward the
  opponent (stronger for Attack-type tops) with organic drift, no direct joystick control

Each Frame (while battling):
  1. Spin stamina decays over time at a rate set by the top's Stamina stat
     (decay ramps up sharply after 22s of Sudden Death)
  2. Hitting the arena wall bounces the top back, unless it's too weak or too fast —
     then it's knocked clean out of the ring (Ring-out) — and fills a little Special gauge
  3. Colliding with the other top knocks both back, scaled by attacker's Attack vs
     defender's Defense (boosted while a Special Move is active), amplified if the two
     tops spin in opposite directions, and fills both tops' Special gauges
  4. A full Special gauge can be spent for a 2.5s Attack/Defense buff and a spirit burst
  5. An extreme hit can trigger an instant Burst KO on the weaker top
  6. Stamina hitting zero ends the round in a Spin-out — checked every frame, not just
     inside collisions, so a round can never stall out undecided
  7. A round win/loss updates the 0:0 score; first to 2 wins takes the match
```

## 🎡 Top Types & Spirits

```
Inferno Fang   (Attack)            Phoenix  — very high Attack, low Defense
Thunder Claw   (Attack, glass cannon) Tiger — highest Attack, lowest Stamina
Titan Shell    (Defense)           Tortoise — very high Defense, low Attack
Frost Wyrm     (Defense + Stamina) Dragon   — high Defense and Stamina, low Attack
Chrono Drift   (Stamina)           Serpent  — barely decays, but a poor brawler
Sandstorm Fury (Stamina + Attack)  Scorpion — high Stamina with a real bite
Vortex Core    (Balance)           Wolf     — even stats, no clear weakness
Abyssal Maw    (Balance, aggressive) Shark  — strong all-round, Attack-biased
```

## 🚀 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/VidiPT89/WebBeyblade.git
cd WebBeyblade

# 2. Open index.html directly, or serve it with any static file server
open index.html                 # macOS
python3 -m http.server 8000     # then visit http://localhost:8000
```

No build step, no dependencies — it's static HTML/CSS/JS.

## 📝 Notes

- This is the web sibling of [iBeyblade](https://github.com/VidiPT89/iBeyblade), the native iOS version of the same game — same physics, same eight tops, same Special Move system, rebuilt for the browser.
- Language, sound and haptics preferences reset to defaults on each visit and are not persisted.
- Local 2-player is pass-and-play on one device: Player 1 launches from the bottom half of the arena, Player 2 from the top half, each with their own drag gesture and Special Move button, supported by simultaneous multi-touch.
- `prefers-reduced-motion` is respected across the interface's decorative animations.

---

Developed by **David Arsénio Martins**
🌐 [ividi.dev](https://ividi.dev/)
