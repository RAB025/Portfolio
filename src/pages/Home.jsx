import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Flame, Zap, Shield, Award, Briefcase, Code, Compass, RefreshCw } from 'lucide-react';
import { personalInfo, projectsData, skillsData } from '../data/portfolioData';
import { RunawayButton } from '../components/RunawayButton';
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
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="relative pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Quirky Pill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#70FF00] border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                🚀 Senior Technical Lead
              </span>
              <span className="px-3 py-1 bg-[#00F0FF] border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                🎓 IIT Tirupati B.Tech
              </span>
              <span className="px-3 py-1 bg-[#FFE600] border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                🧠 Vertex AI Certified
              </span>
            </div>

            {/* Giant Chunky Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              CRAFTING <span className="bg-[#FFE600] px-2 border-3 border-black shadow-[4px_4px_0px_#000] inline-block -rotate-1">BULLETPROOF</span> BACKENDS & SPEEDY WEBSITES.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-lg sm:text-xl font-medium text-gray-800 max-w-2xl leading-relaxed">
              I’m <strong>{personalInfo.name}</strong>, a Senior Technical Lead and Full-Stack Engineer. 
              I specialize in scaling Python & Java enterprise microservices, conquering difficult browser DOM barriers, 
              and extracting anomalies from 65K+ record graph datasets.
            </p>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                onClick={() => playPop()}
                className="neo-btn px-6 py-3.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-black text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <span>Check Out My Projects</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/experience"
                onClick={() => playClick()}
                className="neo-btn px-6 py-3.5 bg-[#FFE600] hover:bg-[#FFD000] text-black font-black text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <Briefcase size={18} />
                <span>My Career & Leadership</span>
              </Link>

              <button
                onClick={handleConfettiBlast}
                className="neo-btn px-5 py-3.5 bg-white hover:bg-gray-100 text-black font-black text-sm uppercase tracking-wider flex items-center gap-1.5"
                title="Celebrate!"
              >
                <Sparkles size={16} className="text-[#FF6584]" />
                <span>Confetti!</span>
              </button>
            </div>

            {/* Quirky Runaway Button easter egg */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold text-gray-500 mb-1">Easter Egg Zone:</div>
              <RunawayButton />
            </div>

          </div>

          {/* Right Visual / Avatar Card */}
          <div className="lg:col-span-4">
            <div className="neo-box bg-[#FFE600] p-6 text-center space-y-4 relative">
              {/* Corner Badge */}
              <div className="absolute -top-3 -right-3 bg-[#FF2A85] text-white text-xs font-mono font-black px-2.5 py-1 border-2 border-black rotate-6 shadow-[2px_2px_0px_#000]">
                LEVEL 99 CODER
              </div>

              {/* Quirky Avatar Placeholder / Character */}
              <div className="w-32 h-32 mx-auto bg-white border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-5xl relative overflow-hidden group">
                <span className="group-hover:scale-125 transition-transform duration-200">👨‍💻</span>
                <div className="absolute bottom-0 inset-x-0 bg-black text-[#FFE600] text-[9px] font-mono py-0.5">
                  IIT TIRUPATI
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-black text-2xl">Raza Ayoub</h3>
                <p className="font-mono text-xs font-bold text-gray-700">Senior Technical Lead • Pune, IN</p>
              </div>

              {/* Status List */}
              <div className="bg-white p-3 border-2 border-black text-left text-xs font-mono space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current Role:</span>
                  <span className="font-bold text-black">Full-Stack Lead</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enterprise XP:</span>
                  <span className="font-bold text-black">3+ Yrs at HCL Tech</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Vibe:</span>
                  <span className="font-bold text-[#FF2A85]">High Energy & Quirky</span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPop()}
                  className="neo-btn py-2 bg-[#00F0FF] text-black font-mono font-bold text-xs"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPop()}
                  className="neo-btn py-2 bg-[#70FF00] text-black font-mono font-bold text-xs"
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
          <span className="w-4 h-4 bg-black"></span>
          <h2 className="font-mono font-black uppercase text-sm tracking-wider text-gray-600">Key Track Record By Numbers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className={`p-6 border-3 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-all ${stat.color}`}
            >
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="font-extrabold text-sm text-black leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What Raza Brings To The Table */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-block bg-[#FFE600] px-3 py-1 border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
            ⚡ The Secret Sauce
          </div>
          <h2 className="text-3xl font-black tracking-tight">Enterprise Backbone Meets Hacker Precision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="neo-box bg-white p-6 space-y-3">
            <div className="w-12 h-12 bg-[#FFE600] border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
              🛡️
            </div>
            <h3 className="font-black text-xl">Scalable Backend Architecture</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Over 3 years of leading technical squads at <strong>HCL Tech</strong>, building resilient Java & Python REST microservices, 
              orchestrating clean async processing pipelines, and slashing testing cycles by 40%.
            </p>
          </div>

          <div className="neo-box bg-white p-6 space-y-3">
            <div className="w-12 h-12 bg-[#70FF00] border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
              ⚡
            </div>
            <h3 className="font-black text-xl">DOM Engineering & Extensions</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              When complex reactive frameworks (like Vue.js) lock down forms, I engineer asynchronous DOM-polling algorithms 
              and synthetic event injectors that cut task execution times by 60%.
            </p>
          </div>

          <div className="neo-box bg-white p-6 space-y-3">
            <div className="w-12 h-12 bg-[#00F0FF] border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
              🧠
            </div>
            <h3 className="font-black text-xl">AI & Graph Intelligence</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Google Vertex AI Certified. Ingesting, cleansing, and mapping 65,000+ records with Pandas and NetworkX community detection 
              to surface critical anomalies and ground LLM answers in verifiable truth.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-block bg-[#FF6584] text-white px-3 py-1 border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000] mb-2">
              Featured Inventions
            </div>
            <h2 className="text-3xl font-black tracking-tight">Key Projects With Proven Impact</h2>
          </div>
          <Link
            to="/projects"
            onClick={() => playPop()}
            className="neo-btn px-4 py-2.5 bg-[#FFE600] font-black text-xs uppercase flex items-center gap-1.5 self-start"
          >
            <span>View All & Try Simulators</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="neo-box bg-white p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-black uppercase border border-black ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{project.period}</span>
                </div>

                <h3 className="font-black text-lg leading-snug">{project.title}</h3>
                <p className="text-xs text-gray-700 font-medium leading-relaxed">{project.tagline}</p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="bg-gray-100 border border-black text-[10px] font-mono px-2 py-0.5 font-bold">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-mono text-gray-500 self-center">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#FF2A85]">
                  {project.metrics[0].value}
                </span>
                <Link
                  to="/projects"
                  onClick={() => playClick()}
                  className="font-black text-xs hover:underline flex items-center gap-1"
                >
                  <span>Explore Demo</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Quirks & Random Fact Generator */}
      <section className="neo-box bg-[#FFF9F0] p-6 lg:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎲</span>
            <h3 className="font-black text-lg">Raza's Random Developer Trivia</h3>
          </div>
          <button
            onClick={nextFact}
            className="neo-btn px-3.5 py-1.5 bg-[#FFE600] font-black text-xs flex items-center gap-1.5 self-start sm:self-auto"
          >
            <RefreshCw size={14} />
            <span>Roll Another Fact</span>
          </button>
        </div>

        <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-base font-bold text-gray-800">
          {personalInfo.funFacts[currentFactIndex]}
        </div>
      </section>

    </div>
  );
};

