import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Sparkles, Building, GraduationCap, Award } from 'lucide-react';
import { experienceData, personalInfo } from '../data/portfolioData';
import { playClick, playPop } from '../utils/audio';

export const Experience = () => {
  const [expandedId, setExpandedId] = useState('hcl-tech-lead');

  const toggleExpand = (id) => {
    playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <section className="space-y-4 border-b-4 border-black pb-8">
        <div className="inline-flex items-center gap-2 bg-[#FFE600] px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
          <Briefcase size={14} />
          <span>Proven Track Record</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          LEADERSHIP & <span className="bg-[#FF6584] text-white px-3 border-3 border-black shadow-[4px_4px_0px_#000] inline-block -rotate-1">JOURNEY</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl font-medium leading-relaxed">
          From an undergraduate at <strong>IIT Tirupati</strong> to guiding squads as a <strong>Senior Technical Lead at HCL Technologies</strong> and architecting end-to-end legal platforms. 
          Here is how I blend high-level engineering leadership with hands-on architecture.
        </p>

        {/* Quick Highlights Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
            <div className="font-mono text-xs font-bold text-gray-500">EXPERIENCE</div>
            <div className="text-2xl font-black text-black">3+ Years Lead</div>
            <div className="text-xs text-gray-600 font-medium">HCL Technologies</div>
          </div>
          <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
            <div className="font-mono text-xs font-bold text-gray-500">CYCLE EFFICIENCY</div>
            <div className="text-2xl font-black text-[#FF2A85]">40% Shaved</div>
            <div className="text-xs text-gray-600 font-medium">Python Automation Frameworks</div>
          </div>
          <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
            <div className="font-mono text-xs font-bold text-gray-500">PEDIGREE</div>
            <div className="text-2xl font-black text-[#3A86FF]">IIT Tirupati</div>
            <div className="text-xs text-gray-600 font-medium">B.Tech Engineering</div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Callout */}
      <section className="neo-box bg-[#00F0FF] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-black" />
          <h3 className="font-black text-xl uppercase tracking-tight">How I Lead Technical Teams</h3>
        </div>
        <p className="font-bold text-sm sm:text-base text-gray-900 leading-relaxed">
          "I believe technical leadership is rooted in empathy, clarity, and unblocking fellow engineers. 
          Whether orchestrating asynchronous microservices or refactoring testing pipelines, 
          I foster clean code standards, rigorous API documentation, and fearless experimentation."
        </p>
      </section>

      {/* Interactive Experience Timeline */}
      <section className="space-y-6">
        
        {experienceData.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              className="neo-box bg-white overflow-hidden transition-all"
            >
              {/* Card Header (Clickable to Expand/Collapse) */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className="p-6 cursor-pointer hover:bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none border-b-2 border-black"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 text-xs font-mono font-black uppercase border border-black ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-600 flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-600 flex items-center gap-1">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl font-black tracking-tight">{exp.role}</h2>
                  <div className="text-base font-extrabold text-gray-800 flex items-center gap-2">
                    {exp.id === 'iit-tirupati' ? <GraduationCap size={18} /> : <Building size={18} />}
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto">
                  <span className="text-xs font-mono font-bold text-gray-500 hidden sm:inline">
                    {isExpanded ? 'Collapse' : 'Expand Details'}
                  </span>
                  <div className="w-9 h-9 bg-[#FFE600] border-2 border-black flex items-center justify-center font-black shadow-[2px_2px_0px_#000]">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>

              {/* Summary Always Visible */}
              <div className="px-6 py-4 bg-[#FFF9F0] border-b-2 border-black text-sm font-medium text-gray-800 leading-relaxed">
                {exp.summary}
              </div>

              {/* Expandable Key Wins and Tech Stack */}
              {isExpanded && (
                <div className="p-6 space-y-6 animate-fadeIn">
                  
                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <h3 className="font-mono font-black text-xs uppercase tracking-wider text-gray-500">
                      Key Deliverables & Responsibilities:
                    </h3>
                    <div className="space-y-2.5">
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white border-2 border-black">
                          <CheckCircle size={16} className="text-[#70FF00] shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono font-bold text-xs uppercase text-gray-500">Core Technologies & Competencies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white border-2 border-black font-mono font-bold text-xs shadow-[2px_2px_0px_#000]"
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
      <section className="neo-box bg-[#FFFDF9] p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#70FF00] border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000]">
            🎓
          </div>
          <div>
            <h3 className="font-black text-2xl">{personalInfo.education.institution}</h3>
            <p className="font-mono text-xs font-bold text-gray-600">
              {personalInfo.education.degree} • {personalInfo.education.duration} • {personalInfo.education.location}
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-700 leading-relaxed">
          Graduating with a B.Tech from the Indian Institute of Technology (IIT Tirupati) instilled an unshakeable algorithmic intuition 
          and a passion for high-reliability systems engineering that powers every line of code I ship today.
        </p>
      </section>

    </div>
  );
};

