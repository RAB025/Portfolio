import React, { useState } from 'react';
import { Sparkles, Zap, ChevronDown, ChevronUp, Layers, Rocket, Telescope } from 'lucide-react';
import { playPop, playClick } from '../utils/audio';

export const FloatingStickers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeFocuses = [
    { label: "Ni-Kshay Automation Suite", status: "Presently Working On ⚡", color: "bg-[#70FF00]", link: "#/projects" },
    { label: "Astrophysics ML Pipeline", status: "IUST Research 🔭", color: "bg-[#9D4EDD] text-white", link: "#/projects" },
    { label: "StrucEngine 3D SaaS", status: "WebGL & IS 456 🏢", color: "bg-[#00F0FF]", link: "#/projects" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block select-none">
      <div className="neo-box bg-white/95 backdrop-blur-md overflow-hidden border border-slate-900/15 shadow-xl transition-all duration-300">
        
        {/* Toggle Capsule Bar */}
        <button
          onClick={() => {
            playPop();
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-mono font-bold text-slate-800 hover:bg-slate-50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-extrabold uppercase tracking-wide">Live Focus Dock</span>
          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
            3 Active
          </span>
          {isOpen ? <ChevronDown size={14} className="text-slate-500" /> : <ChevronUp size={14} className="text-slate-500" />}
        </button>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="p-3 border-t border-slate-200/80 space-y-2 bg-slate-50/80 text-xs font-mono">
            {activeFocuses.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => playClick()}
                className="flex items-center justify-between gap-3 p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-400 transition-all group"
              >
                <span className="font-bold text-slate-800 group-hover:text-black">
                  {item.label}
                </span>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.color}`}>
                  {item.status}
                </span>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
