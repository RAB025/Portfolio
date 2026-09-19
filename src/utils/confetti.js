import confetti from 'canvas-confetti';

export const triggerConfetti = (originX = 0.5, originY = 0.6) => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { x: originX, y: originY },
    colors: ['#FFE600', '#FF6584', '#00F0FF', '#70FF00', '#9D4EDD', '#FF7B00'],
    disableForReducedMotion: true
  });
};

export const triggerStars = () => {
  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: ['star'],
    colors: ['FFE600', 'FF6584', '00F0FF', '70FF00']
  };

  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });
};

export const triggerFireworkCannon = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

