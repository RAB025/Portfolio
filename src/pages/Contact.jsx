import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, Terminal, MessageSquare, Heart, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SecretTerminal } from '../components/SecretTerminal';
import { playSuccess, playClick, playPop } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', roleType: 'Senior Tech Lead' });
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
    <div className="space-y-12 lg:space-y-16">
      
      {/* Header */}
      <section className="space-y-4 pb-4">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-900 border border-rose-300 px-3 py-1 font-mono font-bold text-xs uppercase rounded-lg shadow-sm">
          <MessageSquare size={14} className="text-rose-600" />
          <span>Direct Inquiries</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          GET IN <span className="bg-[#FFE600] px-3 py-0.5 rounded-xl border border-slate-900/15 shadow-[3px_3px_0px_#0F172A] inline-block rotate-1 text-slate-950">TOUCH</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
          Looking for a Senior Technical Lead who can scale high-throughput backends, optimize browser automations, 
          or lead high-velocity engineering squads? Send a message or explore the interactive terminal below.
        </p>
      </section>

      {/* Main Grid: Channels & Direct Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card with 1-Click Copy */}
          <div className="neo-box bg-white p-6 space-y-4 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-slate-500">
                <Mail size={15} className="text-amber-600" />
                <span>Primary Email</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                Fast Response
              </span>
            </div>

            <div className="font-mono font-extrabold text-lg sm:text-xl text-slate-900 break-all">
              {personalInfo.email}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={copyEmail}
                className="neo-btn px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold text-xs flex items-center gap-2 flex-1 justify-center"
              >
                {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => playPop()}
                className="neo-btn px-4 py-2.5 bg-slate-950 text-white hover:bg-slate-800 font-mono font-bold text-xs flex items-center gap-1.5"
              >
                <span>OPEN MAIL</span>
                <Send size={13} />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="neo-box bg-white p-6 space-y-3 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-slate-500">
                <Github size={15} />
                <span>Open Source Repositories</span>
              </div>
              <span className="text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                @{personalInfo.githubHandle}
              </span>
            </div>

            <h3 className="font-bold text-lg text-slate-900">github.com/{personalInfo.githubHandle}</h3>
            <p className="text-xs text-slate-600 font-normal">
              Explore repositories, structural simulation engines, and browser automation suites.
            </p>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="neo-btn px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-mono font-bold text-xs flex items-center justify-center gap-1.5 w-full"
            >
              <span>VISIT GITHUB PROFILE</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="neo-box bg-white p-6 space-y-3 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-slate-500">
                <Linkedin size={15} className="text-blue-600" />
                <span>Professional Network</span>
              </div>
              <span className="text-[10px] font-mono font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            <h3 className="font-bold text-lg text-slate-900">linkedin.com/in/{personalInfo.linkedinHandle}</h3>
            <p className="text-xs text-slate-600 font-normal">
              Connect for technical leadership discussions, architecture reviews, and engineering opportunities.
            </p>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="neo-btn px-4 py-2 bg-[#00F0FF] hover:bg-cyan-300 text-black font-mono font-bold text-xs flex items-center justify-center gap-1.5 w-full"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Quick Signal Form */}
        <div className="lg:col-span-7">
          <div className="neo-box bg-white p-6 sm:p-8 space-y-6 border border-slate-200/80">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">📬</span>
                <h3 className="font-extrabold text-2xl text-slate-950">Send a Direct Message</h3>
              </div>
              <p className="font-mono text-xs text-slate-500 mt-1">
                Direct transmission or email at <strong className="text-slate-900">{personalInfo.email}</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-300 text-center space-y-3 shadow-sm">
                <div className="text-4xl">🚀</div>
                <h4 className="font-extrabold text-2xl text-emerald-950">Message Sent!</h4>
                <p className="font-mono text-sm text-emerald-800 font-medium">
                  Thanks for reaching out! A direct signal has been recorded. Raza will respond shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="neo-btn px-4 py-2 bg-slate-950 text-white font-bold text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono font-bold text-xs uppercase text-slate-600">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-slate-50/80 rounded-xl border border-slate-200 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/15 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-bold text-xs uppercase text-slate-600">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-slate-50/80 rounded-xl border border-slate-200 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/15 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-xs uppercase text-slate-600">Opportunity / Topic</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full p-3 bg-slate-50/80 rounded-xl border border-slate-200 font-mono font-semibold text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15 focus:bg-white transition-all"
                  >
                    <option value="Senior Tech Lead">Senior Technical Lead Role</option>
                    <option value="Full-Stack Engineer">Full-Stack Architect Opportunity</option>
                    <option value="Contract / Consulting">Browser Automation / Performance Consulting</option>
                    <option value="Just Chatting">General Tech Chat & Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-xs uppercase text-slate-600">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about what you're building or how we can collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-slate-50/80 rounded-xl border border-slate-200 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/15 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl neo-btn flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>TRANSMIT MESSAGE TO RAZA</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Interactive Secret Terminal */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
            <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">Developer Command Terminal</h2>
          </div>
          <span className="text-xs font-mono text-slate-400">Bash Shell Simulator</span>
        </div>

        <SecretTerminal />
      </section>

    </div>
  );
};
