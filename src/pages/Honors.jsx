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
    { title: "DOM Barrier Breaker", desc: "Successfully bypassed React 18+ synthetic event blockers and _valueTracker traps.", icon: "⚡", bg: "bg-amber-100 text-amber-900 border-amber-300" },
    { title: "NetworkX Cartographer", desc: "Mapped hidden anomaly subgraphs over 65K+ enterprise security audit records.", icon: "🕸️", bg: "bg-cyan-100 text-cyan-900 border-cyan-300" },
    { title: "40% Cycle Slasher", desc: "Cut enterprise test execution cycles by nearly half with Python automation frameworks.", icon: "⏱️", bg: "bg-emerald-100 text-emerald-900 border-emerald-300" },
    { title: "IIT Tirupati Scholar", desc: "4 years of rigorous algorithmic grind and distributed systems foundations.", icon: "🎓", bg: "bg-rose-100 text-rose-900 border-rose-300" },
    { title: "Pixel-Perfect Legalist", desc: "Tamed complex dynamic multi-clause legal PDF compilation via ReportLab & virtualized react-pdf.", icon: "📜", bg: "bg-purple-100 text-purple-900 border-purple-300" },
    { title: "Zero-Downtime Lead", desc: "Maintained resilient REST APIs and distributed microservices at HCL Technologies.", icon: "🛡️", bg: "bg-orange-100 text-orange-900 border-orange-300" }
  ];

  return (
    <div className="space-y-12 lg:space-y-16">
      
      {/* Header */}
      <section className="space-y-4 pb-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
          <Trophy size={14} className="text-amber-700" />
          <span>Accolades & Verified Credentials</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          HONORS & <span className="bg-[#FF6584] text-white px-3 py-0.5 rounded-xl border border-slate-900/15 shadow-[3px_3px_0px_#0F172A] inline-block -rotate-1">AWARDS</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
          Official leadership awards, enterprise recognitions, AI cloud certifications, 
          and engineering milestones earned through shipping high-impact code.
        </p>

        <div className="pt-2">
          <button
            onClick={triggerCelebration}
            className="neo-btn px-5 py-2.5 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase flex items-center gap-2"
          >
            <Sparkles size={16} />
            <span>Launch Star Celebration ⭐</span>
          </button>
        </div>
      </section>

      {/* Official Resume Honors */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
          <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Official Recognitions & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {honorsData.map((item, index) => (
            <div
              key={index}
              className="neo-box p-6 sm:p-8 space-y-4 relative overflow-hidden bg-white"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className={`px-2.5 py-0.5 text-xs font-mono font-bold uppercase rounded-md border border-slate-900/10 ${item.color} shadow-sm`}>
                  {item.badge}
                </span>
                <span className="font-mono font-bold text-base bg-slate-900 text-[#FFE600] px-2.5 py-0.5 rounded">
                  {item.year}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 leading-snug">{item.title}</h3>
                <div className="text-xs font-mono font-semibold text-slate-500">Issued by: {item.issuer}</div>
              </div>

              <p className="text-slate-700 text-sm font-normal leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                <CheckCircle2 size={15} />
                <span>Verified Enterprise Credential</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Merit Badges */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600]"></span>
          <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Engineering Merit Milestones</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quirkyBadges.map((badge, idx) => (
            <div
              key={idx}
              className="neo-box bg-white p-5 space-y-2 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{badge.icon}</span>
                <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border ${badge.bg}`}>
                  Unlocked
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-950">{badge.title}</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
