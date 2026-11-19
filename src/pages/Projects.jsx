import React, { useState } from 'react';
import { Sparkles, ExternalLink, Github, Zap, Shield, FileText, CheckCircle2, ArrowRight, Layers, Sliders, Telescope, Smartphone, Box } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { DomSimulator } from '../components/DomSimulator';
import { RiskGraphSimulator } from '../components/RiskGraphSimulator';
import { AstroTransientSimulator } from '../components/AstroTransientSimulator';
import { NikshaySimulator } from '../components/NikshaySimulator';
import { StrucEngineSimulator } from '../components/StrucEngineSimulator';
import { playClick, playPop } from '../utils/audio';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'healthcare', label: 'Healthcare & RPA' },
    { id: 'structural', label: '3D & Structural SaaS' },
    { id: 'ai', label: 'AI & Astrophysics' },
    { id: 'fullstack', label: 'Full-Stack Systems' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'healthcare') {
      return ['nikshay-suite', 'janani-hbnc-autopilot', 'ncd-manager-extension'].includes(project.id);
    }
    if (filter === 'structural') {
      return project.id === 'strucengine-3d-saas';
    }
    if (filter === 'ai') {
      return ['astrophysics-transient-pipeline', 'security-risk-platform'].includes(project.id);
    }
    if (filter === 'fullstack') {
      return project.id === 'legal-case-system';
    }
    return true;
  });

  return (
    <div className="space-y-12 lg:space-y-16">
      
      {/* Page Header */}
      <section className="space-y-4 pb-4">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
          <Zap size={14} className="text-emerald-600" />
          <span>Interactive Engineering Systems</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          PROJECTS & <span className="bg-[#70FF00] px-3 py-0.5 rounded-xl border border-slate-900/15 shadow-[3px_3px_0px_#0F172A] inline-block rotate-1 text-slate-950">SYSTEMS</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
          Production architectures, cryptographic automation engines, 3D WebGL computational platforms, 
          and astrophysics deep learning pipelines. Explore the technical deep dives and interactive benchmarks below.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClick();
                setFilter(cat.id);
              }}
              className={`px-4 py-2 font-bold text-xs rounded-xl border transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md -translate-y-0.5'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200/80 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects Detailed Showcase */}
      <div className="space-y-12">
        
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="neo-box bg-white p-6 sm:p-8 lg:p-10 space-y-7"
          >
            {/* Top Bar of Project */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 text-xs font-mono font-bold uppercase rounded-md border border-slate-900/10 ${project.badgeColor} shadow-sm`}>
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs font-semibold bg-slate-900 text-[#FFE600] px-2.5 py-0.5 rounded">
                    {project.period}
                  </span>
                  <span className="font-mono text-xs font-medium text-slate-500">
                    {project.category}
                  </span>
                  {project.affiliation && (
                    <span className="font-mono text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300 px-2.5 py-0.5 rounded flex items-center gap-1">
                      <Telescope size={12} />
                      <span>{project.affiliation}</span>
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">{project.title}</h2>
                <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">{project.tagline}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPop()}
                  className="neo-btn px-4 py-2 bg-slate-950 text-white hover:bg-slate-800 text-xs font-mono font-bold flex items-center gap-2"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-sm space-y-0.5">
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase">{metric.label}</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">{metric.value}</div>
                  <div className="text-xs font-mono text-slate-600 font-medium">{metric.subtext}</div>
                </div>
              ))}
            </div>

            {/* Detailed Bullet Points */}
            <div className="space-y-3">
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Layers size={15} className="text-slate-700" />
                <span>Architecture & Engineering Implementation</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/70">
                    <CheckCircle2 size={16} className="text-[#FF2A85] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used Pills */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-xs uppercase text-slate-500">Tech Stack Utilized:</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-300/80 font-mono font-semibold text-xs rounded-lg shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Live Interactive Simulators */}
            {project.demoType === 'nikshay-sim' && (
              <div className="pt-4 border-t border-slate-200">
                <NikshaySimulator />
              </div>
            )}

            {project.demoType === 'strucengine-sim' && (
              <div className="pt-4 border-t border-slate-200">
                <StrucEngineSimulator />
              </div>
            )}

            {project.demoType === 'astro-transient' && (
              <div className="pt-4 border-t border-slate-200">
                <AstroTransientSimulator />
              </div>
            )}

            {project.demoType === 'dom-speedup' && (
              <div className="pt-4 border-t border-slate-200">
                <DomSimulator />
              </div>
            )}

            {project.demoType === 'graph-clusters' && (
              <div className="pt-4 border-t border-slate-200">
                <RiskGraphSimulator />
              </div>
            )}

            {project.demoType === 'legal-flow' && (
              <div className="pt-4 border-t border-slate-200">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/80 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-[#FF6584]" />
                      <h4 className="font-extrabold text-base text-slate-900">Legal Case Platform Architecture Pipeline</h4>
                    </div>
                    <span className="font-mono text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded border border-emerald-300">
                      Production Web App
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="font-extrabold text-xs text-[#FF2A85]">1. INGESTION</div>
                      <div className="text-xs font-mono font-bold mt-1 text-slate-900">Court Cause Lists</div>
                      <div className="text-[11px] text-slate-500 mt-1">Automated daily parsing & filtering</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="font-extrabold text-xs text-[#3A86FF]">2. CORE ENGINE</div>
                      <div className="text-xs font-mono font-bold mt-1 text-slate-900">Django + PostgreSQL</div>
                      <div className="text-[11px] text-slate-500 mt-1">RBAC delegation & stage transitions</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="font-extrabold text-xs text-emerald-700">3. CLIENT VIEW</div>
                      <div className="text-xs font-mono font-bold mt-1 text-slate-900">React + react-pdf</div>
                      <div className="text-[11px] text-slate-500 mt-1">Custom viewer with dynamic TOC</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="font-extrabold text-xs text-amber-700">4. PRINT PIPELINE</div>
                      <div className="text-xs font-mono font-bold mt-1 text-slate-900">ReportLab Python</div>
                      <div className="text-[11px] text-slate-500 mt-1">Complex legal reports with conditionals</div>
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
