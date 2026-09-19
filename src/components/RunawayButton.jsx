import React, { useState } from 'react';
import { Sparkles, Trophy, Flame } from 'lucide-react';
import { playBoing, playSuccess } from '../utils/audio';
import { triggerFireworkCannon } from '../utils/confetti';

export const RunawayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dodges, setDodges] = useState(0);
  const [clicked, setClicked] = useState(false);

  const messages = [
    "⚠️ DO NOT CLICK THIS",
    "🏃 Whoa, slow down!",
    "💨 Too slow!",
    "👀 You really want this, don't you?",
    "🎯 Okay, catch me if you can!",
    "🎉 FINE! YOU WIN, CLICK ME!"
  ];

  const handleMouseEnter = () => {
    if (dodges < 4) {
      playBoing();
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 120;
      setPosition({ x: randomX, y: randomY });
      setDodges(prev => prev + 1);
    }
  };

  const handleClick = () => {
    playSuccess();
    triggerFireworkCannon();
    setClicked(true);
  };

  return (
    <div className="relative inline-block my-4">
      {!clicked ? (
        <button
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className={`neo-btn px-5 py-2.5 font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
            dodges >= 4 ? 'bg-[#70FF00] text-black animate-bounce' : 'bg-[#FF6584] text-white'
          }`}
        >
          {dodges >= 4 ? <Flame size={16} /> : <Sparkles size={16} />}
          <span>{messages[Math.min(dodges, messages.length - 1)]}</span>
        </button>
      ) : (
        <div className="p-4 bg-[#FFE600] border-3 border-black shadow-[4px_4px_0px_#000] inline-flex items-center gap-3 animate-wiggle">
          <Trophy size={28} className="text-black" />
          <div className="text-left">
            <div className="font-black text-sm uppercase">Secret Unlocked! 🏆</div>
            <div className="font-mono text-xs">You unlocked Raza's Secret Developer Superpower: Persistence!</div>
          </div>
        </div>
      )}
    </div>
  );
};

