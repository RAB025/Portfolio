import React, { useState } from 'react';
import { Wrench, Terminal, Cpu, Database, Server, Layout, Sparkles, Bug, Trophy, Zap, Cloud } from 'lucide-react';
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
    { id: 'backend', label: 'Backend Architecture', icon: Server },
    { id: 'frontend', label: 'Frontend & Extensions', icon: Layout },
    { id: 'aiData', label: 'AI & Data Intelligence', icon: Cpu },
    { id: 'cloudDevOps', label: 'Cloud & DevOps', icon: Cloud },
  ];

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <section className="space-y-4 border-b-4 border-black pb-8">
        <div className="inline-flex items-center gap-2 bg-[#70FF00] px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
          <Cpu size={14} />
          <span>The Tech Matrix</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          SKILLS & <span className="bg-[#00F0FF] px-3 border-3 border-black shadow-[4px_4px_0px_#000] inline-block rotate-1">ARSENAL</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl font-medium leading-relaxed">
          From writing high-throughput Python backends and enterprise Java to precision Chrome DOM manipulation 
          and Google Vertex AI prompt architectures. Here is the full technical matrix.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playClick();
                  setActiveTab(tab.id);
                }}
                className={`px-3.5 py-2 font-black text-xs border-2 border-black transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-[#FFE600] shadow-[3px_3px_0px_#000] -translate-y-0.5'
                    : 'bg-white hover:bg-gray-100 shadow-[2px_2px_0px_#000]'
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
      <section className="neo-box bg-[#FFE600] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black text-[#FFE600] border-2 border-black flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_#FFF]">
            👾
          </div>
          <div>
            <h3 className="font-black text-base">Interactive Bug Squasher</h3>
            <p className="font-mono text-xs font-bold text-gray-800">
              Squash production bugs right now! Current Score: <span className="text-[#FF2A85] font-black">{bugsSquashed}</span>
            </p>
          </div>
        </div>

        <button
          onClick={squashBug}
          className="neo-btn px-4 py-2 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-black text-xs uppercase flex items-center gap-2 self-start sm:self-auto active:scale-95"
        >
          <Bug size={16} />
          <span>SQUASH A BUG!</span>
        </button>
      </section>

      {/* Languages Tier */}
      {(activeTab === 'all' || activeTab === 'languages') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF6584] border border-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Core Programming Languages</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.languages.map((lang, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{lang.icon}</span>
                  <span className="font-mono font-black text-xs bg-black text-[#FFE600] px-2 py-0.5">
                    {lang.level}% Mastery
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xl">{lang.name}</h3>
                  <p className="font-mono text-xs text-gray-600 font-semibold">{lang.highlight}</p>
                </div>
                <div className="w-full h-3 bg-gray-100 border-2 border-black overflow-hidden">
                  <div className="h-full bg-[#70FF00]" style={{ width: `${lang.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Backend & Architecture */}
      {(activeTab === 'all' || activeTab === 'backend') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FFE600] border border-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Backend Engineering & Systems</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.backend.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:bg-[#FFF9F0]"
              >
                <div className="font-mono text-[10px] font-black uppercase text-[#FF6584]">{item.tag}</div>
                <h3 className="font-black text-base">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI & Data */}
      {(activeTab === 'all' || activeTab === 'aiData') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#00F0FF] border border-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">AI, Data & Graph Analytics</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillsData.aiData.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-[#FFFDF9] p-5 space-y-1 border-3 border-black hover:bg-[#FFE600]"
              >
                <div className="font-mono text-[10px] font-black uppercase text-blue-700">{item.tag}</div>
                <h3 className="font-black text-lg">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Frontend & Browser Automation */}
      {(activeTab === 'all' || activeTab === 'frontend') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#70FF00] border border-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Frontend & Browser DOM Engineering</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillsData.frontend.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:bg-lime-50"
              >
                <div className="font-mono text-[10px] font-black uppercase text-[#70FF00] bg-black px-1.5 py-0.5 inline-block">
                  {item.tag}
                </div>
                <h3 className="font-black text-base">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cloud & DevOps */}
      {(activeTab === 'all' || activeTab === 'cloudDevOps') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#9D4EDD] border border-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Cloud Infrastructure & DevOps</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillsData.cloudDevOps.map((item, idx) => (
              <div
                key={idx}
                className="neo-box bg-white p-4 space-y-1 hover:bg-purple-50"
              >
                <div className="font-mono text-[10px] font-black uppercase text-[#9D4EDD]">{item.tag}</div>
                <h3 className="font-black text-base">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools & Workflow */}
      {activeTab === 'all' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Tools, Testing & Methodologies</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillsData.tools.map((tool, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white border-2 border-black font-mono font-bold text-xs shadow-[3px_3px_0px_#000] flex items-center gap-2"
              >
                <span>⚡</span>
                <span className="text-black font-extrabold">{tool.name}</span>
                <span className="text-[10px] text-gray-500 font-mono">({tool.tag})</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

