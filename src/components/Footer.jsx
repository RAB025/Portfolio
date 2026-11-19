import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playPop, playBoing } from '../utils/audio';

export const Footer = () => {
  const scrollToTop = () => {
    playBoing();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeItems = [
    "NI-KSHAY SUITE (PRESENTLY WORKING ON)", "KOTLIN ANDROID SYSTEMS", "OFFLINE HMAC-SHA256 CRYPTO",
    "JANANI HBNC 39-STEP RPA", "REACT FIBER BYPASS", "STRUCENGINE 3D WEBGL", "IS 456 MOMENT REDISTRIBUTION",
    "NCD MANAGER ANGULAR RPA", "IUST AWANTIPORA ASTROPHYSICS ML", "65K+ GRAPH ANALYTICS",
    "SENIOR TECH LEAD @ HCL", "IIT TIRUPATI", "HIGH-THROUGHPUT ARCHITECTURE"
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-white/95 backdrop-blur-xl overflow-hidden mt-20">
      {/* Streamlined Marquee Tape */}
      <div className="bg-[#FFE600] border-b border-slate-900/10 py-2 overflow-hidden whitespace-nowrap select-none font-mono font-bold text-xs tracking-wider text-slate-950">
        <div className="animate-marquee flex items-center gap-6">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span className="text-[10px]">★</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Bio & Persona */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FFE600] border border-slate-900/15 rounded-xl shadow-[2px_2px_0px_#0F172A] font-black text-slate-950 flex items-center justify-center text-sm">
                RA
              </div>
              <h3 className="font-extrabold text-xl text-slate-950 tracking-tight">Raza Ayoub</h3>
            </div>
            <p className="font-normal text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed">
              Senior Technical Lead and Full-Stack Systems Engineer from <strong>IIT Tirupati</strong>. 
              Designing resilient high-throughput automations, offline cryptographic suites, and machine learning architectures.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playPop()}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playPop()}
                className="px-3 py-1.5 bg-cyan-100 hover:bg-cyan-200 text-cyan-900 border border-cyan-300 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => playPop()}
                className="px-3 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-900 border border-rose-300 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase text-[11px] tracking-widest text-slate-400">Navigation</h4>
            <ul className="space-y-1.5 font-semibold text-xs text-slate-600">
              <li><a href="#/" className="hover:text-slate-950 transition-colors">Home Base</a></li>
              <li><a href="#/projects" className="hover:text-slate-950 transition-colors">Key Projects & Simulators</a></li>
              <li><a href="#/experience" className="hover:text-slate-950 transition-colors">Leadership & Experience</a></li>
              <li><a href="#/skills" className="hover:text-slate-950 transition-colors">Skills Matrix & Arsenal</a></li>
              <li><a href="#/honors" className="hover:text-slate-950 transition-colors">Honors & Accolades</a></li>
              <li><a href="#/contact" className="hover:text-slate-950 transition-colors">Contact & Direct Terminal</a></li>
            </ul>
          </div>

          {/* Col 3: Engine Room & Scroll to Top */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase text-[11px] tracking-widest text-slate-400">Engine Room</h4>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Status: Available</span>
              </div>
              <p className="text-slate-500 font-mono text-[11px]">
                Senior Tech Lead & Distributed Systems Architecture.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="neo-btn w-full py-2 bg-slate-950 text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Raza Ayoub • Built with React & Vite
          </div>
          <div className="flex items-center gap-2">
            <span>IIT Tirupati Alumnus</span>
            <span>•</span>
            <span>Senior Systems Architect</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
