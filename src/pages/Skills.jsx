import React, { useState } from 'react';
import { Wrench, Terminal, Cpu, Database, Server, Layout, Sparkles, Bug, Trophy, Zap, Cloud, Smartphone, Box, ShieldCheck, Key } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { playClick, playPop, playSuccess, playBoing } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [bugsSquashed, setBugsSquashed] = useState(0);

  const squashBug = () => {
    playBoing();
    const next = bugsSquashed + 1;
    setBugsSquashed(next);
    if (next % 5 === 0) {
      playSuccess();
      triggerConfetti(0.8, 0.3);
    }
  };

  const tabs = [
    { id: 'all', label: 'All Stack', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: Terminal },
    { id: 'mobileAndroid', label: 'Android & Mobile', icon: Smartphone },
    { id: 'extensionsRPA', label: 'Extensions & RPA', icon: Layout },
    { id: 'securityCrypto', label: 'Security & Crypto', icon: Key },
    { id: 'engineering3D', label: '3D & Structural', icon: Box },
    { id: 'aiData', label: 'AI & Astrophysics', icon: Cpu },
    { id: 'backend', label: 'Backend Architecture', icon: Server },
    { id: 'cloudDevOps', label: 'Cloud & DevOps', icon: Cloud },
  ];

  return (
    <div className="space-y-12 lg:space-y-16">
      
      {/* Header */}
      <section className="space-y-4 pb-4">
        <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-900 border border-cyan-300 px-3 py-1 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
          <Cpu size={14} className="text-cyan-700" />
          <span>Technical Architecture Matrix</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          SKILLS & <span className="bg-[#00F0FF] px-3 py-0.5 rounded-xl border border-slate-900/15 shadow-[3px_3px_0px_#0F172A] inline-block rotate-1 text-slate-950">ARSENAL</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
          From Android Kotlin systems, background daemons, and offline HMAC cryptography to 3D WebGL structural mechanics, 
          client-side browser RPA, and astrophysics ML pipelines.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playClick();
                  setActiveTab(tab.id);
                }}
                className={`px-3.5 py-2 font-bold text-xs rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-white border-slate-950 shadow-md -translate-y-0.5'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200/80 shadow-sm'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Bug Smasher Minigame Widget */}
      <section className="neo-box bg-gradient-to-r from-amber-50 via-white to-amber-50 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-200/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 text-[#FFE600] rounded-xl flex items-center justify-center font-black text-xl shadow-sm">
            👾
          </div>
          <div>
            <h3 className="font-extrabold text-base text-slate-900">Interactive Runtime Diagnostics</h3>
            <p className="font-mono text-xs text-slate-600 font-medium">
              Eliminate production bugs on the fly! Squashed: <span className="text-[#FF2A85] font-black">{bugsSquashed}</span>
            </p>
          </div>
        </div>

        <button
          onClick={squashBug}
          className="neo-btn px-4 py-2 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-extrabold text-xs uppercase flex items-center gap-2 self-start sm:self-auto active:scale-95"
        >
          <Bug size={16} />
          <span>SQUASH A BUG</span>
        </button>
      </section>

      {/* Languages Tier */}
      {(activeTab === 'all' || activeTab === 'languages') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6584]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Core Programming Languages</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {skillsData.languages.map((lang, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{lang.icon}</span>
                  <span className="font-mono font-bold text-[11px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                    {lang.level}%
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900">{lang.name}</h3>
                  <p className="font-mono text-xs text-slate-500 font-medium">{lang.highlight}</p>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${lang.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile & Android Systems */}
      {(activeTab === 'all' || activeTab === 'mobileAndroid') && skillsData.mobileAndroid && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#70FF00]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Native Android & Mobile Systems Engineering</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.mobileAndroid.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:border-emerald-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-emerald-700">{item.tag}</div>
                <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Browser Extensions & RPA */}
      {(activeTab === 'all' || activeTab === 'extensionsRPA') && skillsData.extensionsRPA && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Client-Side RPA & Chromium Extension Engineering</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.extensionsRPA.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:border-cyan-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-cyan-700">{item.tag}</div>
                <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security & Cryptography */}
      {(activeTab === 'all' || activeTab === 'securityCrypto') && skillsData.securityCrypto && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A85]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Cryptography, Privacy & Security Protocols</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillsData.securityCrypto.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:border-rose-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-rose-600">{item.tag}</div>
                <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3D Graphics & Structural Engineering */}
      {(activeTab === 'all' || activeTab === 'engineering3D') && skillsData.engineering3D && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">3D WebGL Graphics & Computational Mechanics</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.engineering3D.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:border-amber-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-amber-700">{item.tag}</div>
                <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI, ML & Astrophysics */}
      {(activeTab === 'all' || activeTab === 'aiData') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9D4EDD]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">AI, Machine Learning & Astrophysics</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillsData.aiData.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-5 space-y-1 hover:border-purple-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-purple-700">{item.tag}</div>
                <h3 className="font-bold text-base text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Backend & Architecture */}
      {(activeTab === 'all' || activeTab === 'backend') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Backend Engineering & Systems</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillsData.backend.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:border-slate-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-slate-500">{item.tag}</div>
                <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cloud & DevOps */}
      {(activeTab === 'all' || activeTab === 'cloudDevOps') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9D4EDD]"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Cloud Infrastructure & DevOps</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.cloudDevOps.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:border-purple-400"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-purple-700">{item.tag}</div>
                <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools & Workflow */}
      {activeTab === 'all' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Tools, Testing & Diagnostics</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillsData.tools.map((tool, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl font-mono text-xs shadow-sm flex items-center gap-2 hover:border-slate-400 transition-colors"
              >
                <span className="text-emerald-500">⚡</span>
                <span className="text-slate-900 font-bold">{tool.name}</span>
                <span className="text-[10px] text-slate-400">({tool.tag})</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
