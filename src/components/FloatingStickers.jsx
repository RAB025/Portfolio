import React from 'react';
import { playPop, playBoing } from '../utils/audio';

export const FloatingStickers = () => {
  const stickers = [
    { text: "⚡ NI-KSHAY SUITE (ACTIVE)", rotate: "-rotate-6", bg: "bg-[#70FF00]", top: "top-24", left: "left-2 sm:left-6" },
    { text: "🏢 STRUCENGINE 3D", rotate: "rotate-6", bg: "bg-[#00F0FF]", top: "top-48", right: "right-2 sm:right-8" },
    { text: "🏥 JANANI 39-STEP RPA", rotate: "-rotate-3", bg: "bg-[#FFE600]", top: "top-[40rem]", left: "left-2 sm:left-4" },
    { text: "🔭 IUST ASTROPHYSICS ML", rotate: "rotate-12", bg: "bg-[#9D4EDD] text-white", top: "top-[58rem]", right: "right-2 sm:right-6" }
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20 hidden 2xl:block">
      {stickers.map((s, idx) => (
        <div
          key={idx}
          style={{ top: s.top, left: s.left, right: s.right }}
          onClick={(e) => {
            e.stopPropagation();
            playPop();
          }}
          className={`pointer-events-auto cursor-pointer absolute ${s.rotate} ${s.bg} px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_#000] font-mono font-black text-xs select-none hover:scale-110 active:scale-95 transition-transform animate-float`}
        >
          {s.text}
        </div>
      ))}
    </div>
  );
};

