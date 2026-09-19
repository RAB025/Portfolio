import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Code2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playPop, playBoing } from '../utils/audio';

export const Footer = () => {
  const scrollToTop = () => {
    playBoing();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeItems = [
    "PYTHON ARCHITECT", "VUE DOM BYPASS HACKER", "60% SPEEDUP", "65K+ GRAPH ANALYTICS",
    "SENIOR TECH LEAD @ HCL", "IIT TIRUPATI", "DJANGO & REACT EXPERT", "VERTEX AI CERTIFIED",
    "REPORTLAB WIZARD", "SYSTEM RESILIENCE", "ZERO BORING CODE"
  ];

  return (
    <footer className="border-t-4 border-black bg-white overflow-hidden mt-20">
      {/* Neo-Brutalist Marquee Tape */}
      <div className="bg-[#FFE600] border-b-3 border-black py-2.5 overflow-hidden whitespace-nowrap select-none font-mono font-black text-sm tracking-wider">
        <div className="animate-marquee flex items-center gap-6">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span>★</span>
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
              <div className="w-10 h-10 bg-[#FF6584] border-2 border-black shadow-[3px_3px_0px_#000] font-black text-white flex items-center justify-center text-lg">
                ⚡
              </div>
              <h3 className="font-extrabold text-2xl tracking-tight">Raza Ayoub</h3>
            </div>
            <p className="font-medium text-gray-700 max-w-md text-sm leading-relaxed">
              Senior Technical Lead and Full-Stack Engineer from <strong>IIT Tirupati</strong>. 
              Passionate about high-throughput automation, complex data pipelines, and building quirky, lightning-fast web experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playPop()}
                className="p-2.5 bg-[#00F0FF] border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#000] transition-all font-bold text-xs flex items-center gap-1.5"
              >
                <Github size={16} />
                <span>github/RAB025</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playPop()}
                className="p-2.5 bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#000] transition-all font-bold text-xs flex items-center gap-1.5"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => playPop()}
                className="p-2.5 bg-[#70FF00] border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#000] transition-all font-bold text-xs flex items-center gap-1.5"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono font-black uppercase text-xs tracking-widest text-gray-500">Navigation</h4>
            <ul className="space-y-2 font-bold text-sm">
              <li><a href="#/" className="hover:underline hover:text-[#FF6584]">⚡ Home Base</a></li>
              <li><a href="#/projects" className="hover:underline hover:text-[#FF6584]">🔥 Key Projects & Simulators</a></li>
              <li><a href="#/experience" className="hover:underline hover:text-[#FF6584]">🚀 HCL Leadership & Career</a></li>
              <li><a href="#/skills" className="hover:underline hover:text-[#FF6584]">🛠️ Skills Matrix & Tech Lab</a></li>
              <li><a href="#/honors" className="hover:underline hover:text-[#FF6584]">🏆 Honors & Certifications</a></li>
              <li><a href="#/contact" className="hover:underline hover:text-[#FF6584]">💬 Send a Signal</a></li>
            </ul>
          </div>

          {/* Col 3: Quirky Status Box & Scroll to Top */}
          <div className="space-y-3">
            <h4 className="font-mono font-black uppercase text-xs tracking-widest text-gray-500">Engine Room</h4>
            <div className="p-3.5 bg-[#FFF9F0] border-2 border-black shadow-[3px_3px_0px_#000] text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-[#FF2A85]">
                <Sparkles size={14} />
                <span>Status: Mission Ready</span>
              </div>
              <p className="text-gray-600 font-mono text-[11px]">
                Active on browser automation & enterprise distributed scale.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 bg-black text-[#FFE600] font-black text-xs border-2 border-black shadow-[3px_3px_0px_#70FF00] hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
            >
              <ArrowUp size={16} />
              <span>BOUNCE TO TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-black mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-gray-600">
          <div>
            © {new Date().getFullYear()} Raza Ayoub • Built with React, Vite & pure adrenaline
          </div>
          <div className="flex items-center gap-2">
            <span>IIT Tirupati Alum</span>
            <span>•</span>
            <span>Zero Boring Templates</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

