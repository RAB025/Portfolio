import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, Terminal, MessageSquare, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SecretTerminal } from '../components/SecretTerminal';
import { playSuccess, playClick, playPop } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', roleType: 'Full-Time Lead' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    playSuccess();
    triggerConfetti(0.5, 0.5);
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccess();
    triggerConfetti(0.5, 0.6);
    setSubmitted(true);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <section className="space-y-4 border-b-4 border-black pb-8">
        <div className="inline-flex items-center gap-2 bg-[#FF6584] text-white px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
          <MessageSquare size={14} />
          <span>Dispatch Center</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          LET'S BUILD <span className="bg-[#FFE600] px-3 border-3 border-black shadow-[4px_4px_0px_#000] inline-block rotate-1">COOL STUFF</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl font-medium leading-relaxed">
          Looking for a Senior Technical Lead who can scale high-throughput backends, optimize browser automations, 
          or lead high-velocity engineering squads? Drop a message or try the interactive terminal below.
        </p>
      </section>

      {/* Main Grid: Channels & Direct Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card with 1-Click Copy */}
          <div className="neo-box bg-[#FFE600] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono font-black text-xs uppercase">
                <Mail size={16} />
                <span>Primary Email</span>
              </div>
              <span className="text-[10px] font-mono font-black bg-black text-[#FFE600] px-2 py-0.5">
                Fast Response
              </span>
            </div>

            <div className="font-mono font-black text-xl break-all">
              {personalInfo.email}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={copyEmail}
                className="neo-btn px-4 py-2.5 bg-white hover:bg-gray-100 font-mono font-black text-xs flex items-center gap-2 flex-1 justify-center"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => playPop()}
                className="neo-btn px-4 py-2.5 bg-black text-white hover:bg-gray-900 font-mono font-black text-xs flex items-center gap-1.5"
              >
                <span>OPEN MAIL</span>
                <Send size={14} />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="neo-box bg-white p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono font-black text-xs uppercase text-gray-600">
                <Github size={16} />
                <span>Open Source & Code</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-gray-100 px-2 py-0.5 border border-black">
                Handle: {personalInfo.githubHandle}
              </span>
            </div>

            <h3 className="font-black text-xl">github.com/{personalInfo.githubHandle}</h3>
            <p className="text-xs text-gray-600 font-medium">
              Explore repositories, security analytics pipelines, and automation extensions.
            </p>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="neo-btn px-4 py-2 bg-[#00F0FF] text-black font-mono font-black text-xs flex items-center justify-center gap-2 w-full"
            >
              <span>VISIT GITHUB PROFILE</span>
              <Sparkles size={14} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="neo-box bg-white p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono font-black text-xs uppercase text-gray-600">
                <Linkedin size={16} />
                <span>Professional Network</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#70FF00] px-2 py-0.5 border border-black">
                Verified
              </span>
            </div>

            <h3 className="font-black text-xl">linkedin.com/in/{personalInfo.linkedinHandle}</h3>
            <p className="text-xs text-gray-600 font-medium">
              Connect for technical leadership discussions, engineering insights, and tech opportunities.
            </p>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="neo-btn px-4 py-2 bg-[#70FF00] text-black font-mono font-black text-xs flex items-center justify-center gap-2 w-full"
            >
              <span>CONNECT ON LINKEDIN</span>
              <Sparkles size={14} />
            </a>
          </div>

        </div>

        {/* Quick Signal Form Mockup */}
        <div className="lg:col-span-7">
          <div className="neo-box bg-white p-6 sm:p-8 space-y-6">
            <div className="border-b-2 border-black pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">📬</span>
                <h3 className="font-black text-2xl">Send a Direct Signal to Raza</h3>
              </div>
              <p className="font-mono text-xs text-gray-600 mt-1">
                Fill this out or email directly at <strong className="text-black">{personalInfo.email}</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#70FF00] border-3 border-black text-center space-y-3 shadow-[4px_4px_0px_#000]">
                <div className="text-4xl">🚀</div>
                <h4 className="font-black text-2xl">Signal Transmitted!</h4>
                <p className="font-mono text-sm text-gray-900 font-bold">
                  Thanks for reaching out! A direct copy has been forwarded. Raza will get back to you shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="neo-btn px-4 py-2 bg-black text-[#FFE600] font-black text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono font-bold text-xs uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FFFDF9] border-2 border-black font-medium text-sm focus:outline-none focus:bg-[#FFE600]/20 shadow-[2px_2px_0px_#000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-bold text-xs uppercase">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#FFFDF9] border-2 border-black font-medium text-sm focus:outline-none focus:bg-[#FFE600]/20 shadow-[2px_2px_0px_#000]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-xs uppercase">Opportunity / Topic</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full p-3 bg-[#FFFDF9] border-2 border-black font-mono font-bold text-xs focus:outline-none shadow-[2px_2px_0px_#000]"
                  >
                    <option value="Senior Tech Lead">Senior Technical Lead Role</option>
                    <option value="Full-Stack Engineer">Full-Stack Architect Opportunity</option>
                    <option value="Contract / Consulting">Browser Automation / Performance Consulting</option>
                    <option value="Just Chatting">General Tech Chat & Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-xs uppercase">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about what you're building or how we can collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FFFDF9] border-2 border-black font-medium text-sm focus:outline-none focus:bg-[#FFE600]/20 shadow-[2px_2px_0px_#000]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-black text-sm uppercase tracking-wider border-3 border-black shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>TRANSMIT MESSAGE TO RAZA</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Interactive Secret Terminal */}
      <section className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black"></span>
            <h2 className="font-mono font-black text-sm uppercase tracking-wider text-gray-700">Interactive Developer Console</h2>
          </div>
          <span className="text-xs font-mono text-gray-500">Bash Shell Simulator</span>
        </div>

        <SecretTerminal />
      </section>

    </div>
  );
};

