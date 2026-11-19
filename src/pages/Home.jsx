import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Flame, Zap, Shield, Award, Briefcase, Code, Compass, RefreshCw, Layers, ExternalLink, CheckCircle } from 'lucide-react';
import { personalInfo, projectsData, skillsData } from '../data/portfolioData';
import { playPop, playClick } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const Home = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const nextFact = () => {
    playPop();
    setCurrentFactIndex((prev) => (prev + 1) % personalInfo.funFacts.length);
  };

  const handleConfettiBlast = () => {
    playPop();
    triggerConfetti(0.5, 0.4);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Verified Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono font-bold text-xs uppercase rounded-lg shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Ex-HCL Senior Tech Lead (3+ Yrs)
              </span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-900 border border-cyan-300 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
                🎓 IIT Tirupati B.Tech
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-900 border border-purple-300 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
                🔭 ML Researcher @ IUST
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900">
              ARCHITECTING <span className="bg-[#FFE600] px-3 py-0.5 rounded-xl border border-slate-900/15 shadow-[3px_3px_0px_#0F172A] inline-block -rotate-1 text-slate-950">HIGH-THROUGHPUT</span> BACKENDS, MOBILE RUNTIMES & ML PIPELINES.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-lg sm:text-xl font-normal text-slate-700 max-w-2xl leading-relaxed">
              I’m <strong className="font-bold text-slate-950">{personalInfo.name}</strong>, a Senior Technical Lead and Full-Stack Systems Architect. 
              I design resilient distributed services, Android background execution engines, offline cryptographic licensing suites, 
              and time-series astrophysics machine learning pipelines.
            </p>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/projects"
                onClick={() => playPop()}
                className="neo-btn px-6 py-3.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-extrabold text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <span>Explore Interactive Lab</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/experience"
                onClick={() => playClick()}
                className="neo-btn px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <Briefcase size={18} className="text-slate-700" />
                <span>Career & Leadership</span>
              </Link>

              <button
                onClick={handleConfettiBlast}
                className="neo-btn px-4 py-3.5 bg-[#FFE600] hover:bg-[#FFD000] text-black font-extrabold text-sm uppercase tracking-wider flex items-center gap-1.5"
                title="Celebrate!"
              >
                <Sparkles size={16} />
                <span>Confetti</span>
              </button>
            </div>

          </div>

          {/* Right Visual / Executive Card */}
          <div className="lg:col-span-4">
            <div className="neo-box p-6 text-center space-y-4 relative bg-white/95">
              
              {/* Corner Verified Pill */}
              <div className="inline-flex items-center gap-1.5 bg-slate-900 text-[#FFE600] text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                <CheckCircle size={13} className="text-[#70FF00]" />
                <span>VERIFIED SYSTEMS ARCHITECT</span>
              </div>

              {/* Avatar Frame */}
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-amber-100 to-yellow-200 border border-slate-900/15 rounded-2xl shadow-[3px_3px_0px_#0F172A] flex items-center justify-center text-5xl relative overflow-hidden group">
                <span className="group-hover:scale-110 transition-transform duration-300">👨‍💻</span>
                <div className="absolute bottom-0 inset-x-0 bg-slate-950 text-[#FFE600] text-[10px] font-mono py-0.5 font-bold">
                  IIT TIRUPATI
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-extrabold text-2xl tracking-tight text-slate-950">Raza Ayoub</h3>
                <p className="font-mono text-xs font-semibold text-slate-500">Sr. Technical Lead • Systems & ML</p>
              </div>

              {/* Real-time Status Card */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-left text-xs font-mono space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Active Work:</span>
                  <span className="font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                    Ni-Kshay Suite ⚡
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Enterprise XP:</span>
                  <span className="font-bold text-slate-900">3+ Yrs at HCL Tech</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Focus:</span>
                  <span className="font-bold text-purple-700">Android • ML • RPA • 3D</span>
                </div>
              </div>

              {/* Verified links */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPop()}
                  className="neo-btn py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-mono font-bold text-xs"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPop()}
                  className="neo-btn py-2 bg-[#00F0FF] hover:bg-cyan-300 text-black font-mono font-bold text-xs"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Metrics & Numbers Showcase */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6584]"></span>
          <h2 className="font-mono font-bold uppercase text-xs tracking-wider text-slate-500">
            Validated Enterprise Track Record
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="neo-box p-6 bg-white hover:-translate-y-1 transition-all space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{stat.value}</div>
              <div className="font-bold text-sm text-slate-700 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-block bg-[#FFE600] px-3 py-1 rounded-lg border border-slate-900/15 font-mono font-bold text-xs uppercase shadow-sm">
            Core Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Enterprise Reliability Meets Deep Hacker Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="neo-box p-6 space-y-3 bg-white">
            <div className="w-11 h-11 bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-center text-xl shadow-sm">
              🛡️
            </div>
            <h3 className="font-black text-lg text-slate-900">Scalable Backends</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              3+ years leading engineering squads at <strong>HCL Tech</strong>, building resilient Java & Python REST microservices, 
              orchestrating async pipelines, and cutting testing cycles by 40%.
            </p>
          </div>

          <div className="neo-box p-6 space-y-3 bg-white">
            <div className="w-11 h-11 bg-emerald-100 border border-emerald-300 rounded-xl flex items-center justify-center text-xl shadow-sm">
              🤖
            </div>
            <h3 className="font-black text-lg text-slate-900">Android & Dual-RPA</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Architecting native Kotlin foreground daemons and Chromium MV3 extensions, bypassing aggressive background limits and React Fiber internal state trackers with ~95% speedups.
            </p>
          </div>

          <div className="neo-box p-6 space-y-3 bg-white">
            <div className="w-11 h-11 bg-purple-100 border border-purple-300 rounded-xl flex items-center justify-center text-xl shadow-sm">
              🔑
            </div>
            <h3 className="font-black text-lg text-slate-900">Decentralized Cryptography</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Engineering offline-first HMAC-SHA256 licensing protocols via Web Crypto API, delivering zero-cost token verification and 100% client-side privacy without cloud databases.
            </p>
          </div>

          <div className="neo-box p-6 space-y-3 bg-white">
            <div className="w-11 h-11 bg-cyan-100 border border-cyan-300 rounded-xl flex items-center justify-center text-xl shadow-sm">
              🏢
            </div>
            <h3 className="font-black text-lg text-slate-900">3D WebGL & Physics Engines</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Building 60 FPS Three.js spatial building modelers and automated IS 456 / IS 1893 structural moment redistribution engines using React 19, FastAPI, and NumPy.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-block bg-[#FF6584] text-white px-3 py-1 rounded-lg border border-slate-900/15 font-mono font-bold text-xs uppercase shadow-sm">
              Featured Inventions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Key Projects With Proven Benchmarks
            </h2>
          </div>
          <Link
            to="/projects"
            onClick={() => playPop()}
            className="neo-btn px-4 py-2.5 bg-[#FFE600] hover:bg-[#FFD000] text-black font-extrabold text-xs uppercase flex items-center gap-1.5 self-start"
          >
            <span>View All & Test Simulators</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="neo-box p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-white"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase rounded-md border border-slate-900/10 ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500">{project.period}</span>
                </div>

                <h3 className="font-extrabold text-xl leading-snug text-slate-950">{project.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{project.tagline}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="bg-slate-100 border border-slate-200/80 text-[10px] font-mono px-2 py-0.5 rounded text-slate-700 font-semibold">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-400 self-center">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#FF2A85]">
                  {project.metrics[0].label}: {project.metrics[0].value}
                </span>
                <Link
                  to="/projects"
                  onClick={() => playClick()}
                  className="font-extrabold text-xs text-slate-900 hover:text-[#FF2A85] transition-colors flex items-center gap-1"
                >
                  <span>Interactive Benchmark</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Trivia & Personality */}
      <section className="neo-box bg-gradient-to-r from-amber-50/70 via-white to-amber-50/40 p-6 lg:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎲</span>
            <h3 className="font-extrabold text-lg text-slate-900">Developer Trivia & Philosophy</h3>
          </div>
          <button
            onClick={nextFact}
            className="neo-btn px-3.5 py-1.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto"
          >
            <RefreshCw size={14} />
            <span>Shuffle Another Fact</span>
          </button>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm text-sm sm:text-base font-medium text-slate-800">
          "{personalInfo.funFacts[currentFactIndex]}"
        </div>
      </section>

    </div>
  );
};
