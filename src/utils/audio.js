// Web Audio API Retro Sound Effects Engine (Zero external audio assets needed!)

let audioCtx = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const toggleSound = () => {
  soundEnabled = !soundEnabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('raza_sound_enabled', soundEnabled ? 'true' : 'false');
  }
  return soundEnabled;
};

export const isSoundEnabled = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('raza_sound_enabled');
    if (saved !== null) {
      soundEnabled = saved === 'true';
    }
  }
  return soundEnabled;
};

// Playful Pop
export const playPop = () => {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  const now = ctx.currentTime;
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.09);
};

// Retro Click
export const playClick = () => {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  const now = ctx.currentTime;
  osc.frequency.setValueAtTime(520, now);
  osc.frequency.exponentialRampToValueAtTime(220, now + 0.04);

  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.05);
};

// Level Up / Success Chime
export const playSuccess = () => {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const noteTime = now + idx * 0.07;
    osc.frequency.setValueAtTime(freq, noteTime);

    gain.gain.setValueAtTime(0.18, noteTime);
    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(noteTime);
    osc.stop(noteTime + 0.19);
  });
};

// Boing sound
export const playBoing = () => {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  const now = ctx.currentTime;
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(450, now + 0.12);
  osc.frequency.exponentialRampToValueAtTime(250, now + 0.25);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.26);
};

// 8-bit Arcade Beep
export const playBeep = () => {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  const now = ctx.currentTime;
  osc.frequency.setValueAtTime(880, now);

  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.09);
};

