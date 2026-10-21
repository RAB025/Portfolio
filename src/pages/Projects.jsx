import React, { useState } from 'react';
import { Sparkles, ExternalLink, Github, Zap, Shield, FileText, CheckCircle2, ArrowRight, Layers, Sliders, Telescope } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { DomSimulator } from '../components/DomSimulator';
import { RiskGraphSimulator } from '../components/RiskGraphSimulator';
import { AstroTransientSimulator } from '../components/AstroTransientSimulator';
import { playClick, playPop } from '../utils/audio';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'astrophysics', label: 'Astrophysics & ML' },
    { id: 'automation', label: 'DOM & Automation' },
    { id: 'security', label: 'AI & Security Graphs' },
    { id: 'fullstack', label: 'Full-Stack Systems' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'astrophysics') return project.id === 'astrophysics-transient-pipeline';
    if (filter === 'automation') return project.id === 'chrome-data-automation';
    if (filter === 'security') return project.id === 'security-risk-platform';
    if (filter === 'fullstack') return project.id === 'legal-case-system';
    return true;
  });

  return (
    <div className="space-y-12">
      
      {/* Page Header */}
      <section className="space-y-4 border-b-4 border-black pb-8">
        <div className="inline-flex items-center gap-2 bg-[#FF6584] text-white px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
          <Zap size={14} />
          <span>Interactive Engineering Lab</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          PROJECTS & <span className="bg-[#70FF00] px-3 border-3 border-black shadow-[4px_4px_0px_#000] inline-block rotate-1">INVENTIONS</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl font-medium leading-relaxed">
          Here is a detailed breakdown of the mission-critical platforms and tools I’ve engineered. 
          Don’t just take my word for it—interact with the live benchmarks and graph simulators below!
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClick();
                setFilter(cat.id);
              }}
              className={`px-4 py-2 font-black text-xs border-2 border-black transition-all ${
                filter === cat.id
                  ? 'bg-[#FFE600] shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white hover:bg-gray-100 shadow-[2px_2px_0px_#000]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects Detailed Showcase */}
      <div className="space-y-16">
        
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="neo-box bg-white p-6 sm:p-8 lg:p-10 space-y-8"
          >
            {/* Top Bar of Project */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-3 border-black pb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 text-xs font-mono font-black uppercase border-2 border-black ${project.badgeColor} shadow-[2px_2px_0px_#000]`}>
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs font-bold bg-black text-[#FFE600] px-2 py-1">
                    {project.period}
                  </span>
                  <span className="font-mono text-xs font-semibold text-gray-500">
                    {project.category}
                  </span>
                  {project.affiliation && (
                    <span className="font-mono text-xs font-bold bg-[#9D4EDD] text-white px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000] flex items-center gap-1">
                      <Telescope size={12} />
                      <span>{project.affiliation}</span>
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight">{project.title}</h2>
                <p className="text-gray-700 font-medium text-base">{project.tagline}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPop()}
                  className="neo-btn px-4 py-2.5 bg-black text-white hover:bg-gray-800 text-xs font-mono font-bold flex items-center gap-2"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-4 bg-[#FFF9F0] border-2 border-black shadow-[3px_3px_0px_#000]">
                  <div className="text-xs font-mono font-bold text-gray-500 uppercase">{metric.label}</div>
                  <div className="text-2xl sm:text-3xl font-black my-1 text-black">{metric.value}</div>
                  <div className="text-xs font-mono text-gray-600 font-semibold">{metric.subtext}</div>
                </div>
              ))}
            </div>

            {/* Detailed Bullet Points */}
            <div className="space-y-3">
              <h3 className="font-mono font-black text-sm uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Layers size={16} />
                <span>Architecture & Engineering Implementation</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3.5 border-2 border-black">
                    <CheckCircle2 size={18} className="text-[#FF2A85] shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-gray-800 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used Pills */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-xs uppercase text-gray-500">Tech Stack Utilized:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#FFE600] border-2 border-black font-mono font-bold text-xs shadow-[2px_2px_0px_#000]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Live Interactive Simulators */}
            {project.demoType === 'astro-transient' && (
              <div className="pt-4 border-t-3 border-black">
                <AstroTransientSimulator />
              </div>
            )}

            {project.demoType === 'dom-speedup' && (
              <div className="pt-4 border-t-3 border-black">
                <DomSimulator />
              </div>
            )}

            {project.demoType === 'graph-clusters' && (
              <div className="pt-4 border-t-3 border-black">
                <RiskGraphSimulator />
              </div>
            )}

            {project.demoType === 'legal-flow' && (
              <div className="pt-4 border-t-3 border-black">
                <div className="neo-box bg-[#FFFDF9] p-6 space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <div className="flex items-center gap-2">
                      <FileText size={20} className="text-[#FF6584]" />
                      <h4 className="font-black text-lg">Legal Case Platform Architecture Pipeline</h4>
                    </div>
                    <span className="font-mono text-xs font-bold bg-[#70FF00] px-2 py-0.5 border border-black">
                      Production Web App
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="font-black text-xs text-[#FF2A85]">1. INGESTION</div>
                      <div className="text-xs font-mono font-bold mt-1">Court Cause Lists</div>
                      <div className="text-[11px] text-gray-600 mt-1">Automated daily parsing & filtering</div>
                    </div>
                    <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="font-black text-xs text-[#3A86FF]">2. CORE ENGINE</div>
                      <div className="text-xs font-mono font-bold mt-1">Django + PostgreSQL</div>
                      <div className="text-[11px] text-gray-600 mt-1">RBAC delegation & stage transitions</div>
                    </div>
                    <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="font-black text-xs text-[#70FF00]">3. CLIENT VIEW</div>
                      <div className="text-xs font-mono font-bold mt-1">React + react-pdf</div>
                      <div className="text-[11px] text-gray-600 mt-1">Custom viewer with dynamic TOC</div>
                    </div>
                    <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="font-black text-xs text-[#FFE600]">4. PRINT PIPELINE</div>
                      <div className="text-xs font-mono font-bold mt-1">ReportLab Python</div>
                      <div className="text-[11px] text-gray-600 mt-1">Complex legal reports with conditionals</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </article>
        ))}

      </div>

    </div>
  );
};

