import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building, GraduationCap, Award } from 'lucide-react';
import { experienceData, personalInfo } from '../data/portfolioData';
import { playClick, playPop } from '../utils/audio';

export const Experience = () => {
  const [expandedId, setExpandedId] = useState('nikshay-suite-lead');

  const toggleExpand = (id) => {
    playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-12 lg:space-y-16">
      
      {/* Header */}
      <section className="space-y-4 pb-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
          <Briefcase size={14} className="text-amber-700" />
          <span>Track Record & Leadership</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          LEADERSHIP & <span className="bg-[#FF6584] text-white px-3 py-0.5 rounded-xl border border-slate-900/15 shadow-[3px_3px_0px_#0F172A] inline-block -rotate-1">EXPERIENCE</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
          From undergraduate engineering at <strong>IIT Tirupati</strong> to guiding squads as a <strong>Senior Technical Lead at HCL Technologies</strong>, 
          spearheading astrophysics ML research, and architecting private client automation suites.
        </p>

        {/* Quick Highlights Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-0.5">
            <div className="font-mono text-[11px] font-bold text-slate-500 uppercase">ENTERPRISE XP</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">3+ Years Lead</div>
            <div className="text-xs text-slate-600 font-medium">HCL Technologies</div>
          </div>
          <div className="p-5 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-0.5">
            <div className="font-mono text-[11px] font-bold text-slate-500 uppercase">CYCLE EFFICIENCY</div>
            <div className="text-2xl sm:text-3xl font-black text-[#FF2A85]">40% Cut</div>
            <div className="text-xs text-slate-600 font-medium">Testing & Automation Frameworks</div>
          </div>
          <div className="p-5 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-0.5">
            <div className="font-mono text-[11px] font-bold text-slate-500 uppercase">ENGINEERING PEDIGREE</div>
            <div className="text-2xl sm:text-3xl font-black text-[#3A86FF]">IIT Tirupati</div>
            <div className="text-xs text-slate-600 font-medium">B.Tech Engineering</div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Callout */}
      <section className="neo-box p-6 sm:p-7 bg-gradient-to-r from-cyan-50 via-white to-blue-50 border border-slate-200/80 space-y-2.5">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-[#3A86FF]" />
          <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Engineering Leadership Philosophy</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          "I believe great technical leadership is rooted in architectural clarity, developer empathy, and systematic unblocking. 
          Whether orchestrating asynchronous microservices or refactoring testing pipelines, 
          I foster strict code quality standards, thorough API contracts, and fearless cross-functional execution."
        </p>
      </section>

      {/* Interactive Experience Timeline */}
      <section className="space-y-6">
        
        {experienceData.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              className="neo-box bg-white overflow-hidden transition-all duration-300"
            >
              {/* Card Header (Clickable to Expand/Collapse) */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className="p-6 cursor-pointer hover:bg-slate-50/70 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none border-b border-slate-100"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 text-xs font-mono font-bold uppercase rounded-md border border-slate-900/10 ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                    <span className="font-mono text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="font-mono text-xs font-medium text-slate-500 flex items-center gap-1">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">{exp.role}</h2>
                  <div className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
                    {exp.id === 'iit-tirupati' || exp.id === 'iust-astrophysics-ml' ? <GraduationCap size={18} className="text-[#9D4EDD]" /> : <Building size={18} className="text-slate-600" />}
                    <span>{exp.company}</span>
                  </div>
                  {exp.affiliation && (
                    <div className="text-xs font-mono font-bold text-[#9D4EDD] bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200 inline-block mt-1">
                      🔬 {exp.affiliation}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto">
                  <span className="text-xs font-mono font-semibold text-slate-400 hidden sm:inline">
                    {isExpanded ? 'Collapse Details' : 'View Achievements'}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center font-bold text-slate-700 transition-colors">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </div>

              {/* Summary Always Visible */}
              <div className="px-6 py-4 bg-slate-50/60 border-b border-slate-100 text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">
                {exp.summary}
              </div>

              {/* Expandable Key Wins and Tech Stack */}
              {isExpanded && (
                <div className="p-6 space-y-6">
                  
                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">
                      Key Deliverables & Responsibilities:
                    </h3>
                    <div className="space-y-2.5">
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200/70">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono font-bold text-xs uppercase text-slate-500">Core Technologies & Competencies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg font-mono font-medium text-xs text-slate-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          );
        })}

      </section>

      {/* Education Spotlight Card */}
      <section className="neo-box bg-white p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
            🎓
          </div>
          <div>
            <h3 className="font-extrabold text-2xl text-slate-950">{personalInfo.education.institution}</h3>
            <p className="font-mono text-xs font-semibold text-slate-500">
              {personalInfo.education.degree} • {personalInfo.education.duration} • {personalInfo.education.location}
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
          Graduating with a B.Tech from the Indian Institute of Technology (IIT Tirupati) instilled a rigorous foundational intuition 
          for high-reliability systems architecture, distributed computing, and computational mathematics.
        </p>
      </section>

    </div>
  );
};
