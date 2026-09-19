import React from 'react';
import { Award, Trophy, Sparkles, CheckCircle2, ShieldCheck, Cpu, Star, Heart } from 'lucide-react';
import { honorsData } from '../data/portfolioData';
import { playSuccess, playPop } from '../utils/audio';
import { triggerConfetti, triggerStars } from '../utils/confetti';

export const Honors = () => {
  const triggerCelebration = () => {
    playSuccess();
    triggerStars();
  };

  const quirkyBadges = [
    { title: "DOM Barrier Breaker", desc: "Successfully bypassed Vue.js reactivity blockers with custom synthetic events.", icon: "⚡", bg: "bg-[#FFE600]" },
    { title: "NetworkX Cartographer", desc: "Mapped hidden anomaly subgraphs over 65K+ security audit records.", icon: "🕸️", bg: "bg-[#00F0FF]" },
    { title: "40% Cycle Slasher", desc: "Cut enterprise test execution cycles by nearly half with Python automation.", icon: "⏱️", bg: "bg-[#70FF00]" },
    { title: "IIT Tirupati Scholar", desc: "4 years of rigorous algorithmic grind and systems foundations.", icon: "🎓", bg: "bg-[#FF6584]" },
    { title: "Pixel-Perfect Legalist", desc: "Tamed dynamic multi-clause PDF generation via ReportLab.", icon: "📜", bg: "bg-[#9D4EDD]" },
    { title: "Zero-Downtime Lead", desc: "Maintained resilient REST APIs and distributed microservices at HCL.", icon: "🛡️", bg: "bg-[#FF7B00]" }
  ];

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <section className="space-y-4 border-b-4 border-black pb-8">
        <div className="inline-flex items-center gap-2 bg-[#FFE600] px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
          <Trophy size={14} />
          <span>Street Cred & Trophies</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          HONORS & <span className="bg-[#FF6584] text-white px-3 border-3 border-black shadow-[4px_4px_0px_#000] inline-block -rotate-1">ACCOLADES</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl font-medium leading-relaxed">
          Official leadership awards, enterprise recognitions, AI cloud certifications, 
          and developer merit badges earned through shipping high-impact code.
        </p>

        <div className="pt-2">
          <button
            onClick={triggerCelebration}
            className="neo-btn px-5 py-2.5 bg-[#70FF00] hover:bg-[#5adb00] text-black font-black text-xs uppercase flex items-center gap-2"
          >
            <Sparkles size={16} />
            <span>Launch Star Celebration! ⭐</span>
          </button>
        </div>
      </section>

      {/* Official Resume Honors */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-black"></span>
          <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Official Recognitions & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {honorsData.map((item, index) => (
            <div
              key={index}
              className={`neo-box p-6 sm:p-8 space-y-4 relative overflow-hidden bg-white`}
            >
              <div className="flex items-center justify-between border-b-2 border-black pb-3">
                <span className={`px-3 py-1 text-xs font-mono font-black uppercase border-2 border-black ${item.color} shadow-[2px_2px_0px_#000]`}>
                  {item.badge}
                </span>
                <span className="font-mono font-black text-lg bg-black text-[#FFE600] px-2.5 py-0.5">
                  {item.year}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight leading-snug">{item.title}</h3>
                <div className="text-sm font-mono font-bold text-gray-600">Issued by: {item.issuer}</div>
              </div>

              <p className="text-gray-800 text-sm font-medium leading-relaxed bg-[#FFF9F0] p-4 border-2 border-black">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF2A85]">
                <CheckCircle2 size={16} />
                <span>Verified Enterprise Credential</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quirky Developer Merit Badges */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#FFE600] border border-black"></span>
          <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Quirky Engineering Badges</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quirkyBadges.map((badge, idx) => (
            <div
              key={idx}
              className="neo-box bg-white p-5 space-y-2 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{badge.icon}</span>
                <span className={`px-2 py-0.5 text-[10px] font-mono font-black uppercase border border-black ${badge.bg}`}>
                  Unlocked
                </span>
              </div>
              <h3 className="font-black text-base">{badge.title}</h3>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

