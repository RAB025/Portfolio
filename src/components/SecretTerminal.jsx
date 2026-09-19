import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, CornerDownLeft } from 'lucide-react';
import { playClick, playSuccess, playBeep } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { personalInfo } from '../data/portfolioData';

export const SecretTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: "⚡ RAZA OS v2.6.0 [Interactive Command Line]", type: "system" },
    { text: "Type 'help' to view available system commands or 'sudo hire-raza' to trigger secret unlock.", type: "system" }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    playClick();
    const newEntry = { text: `$ ${inputVal}`, type: "user" };
    let response = [];

    switch (cmd) {
      case 'help':
        response = [
          { text: "Available Commands:", type: "output" },
          { text: "  help          - List all available commands", type: "output" },
          { text: "  bio           - Display Raza's credentials & background", type: "output" },
          { text: "  skills        - List core tech capabilities", type: "output" },
          { text: "  projects      - Overview of key engineering innovations", type: "output" },
          { text: "  awards        - Display 2025 honors and certifications", type: "output" },
          { text: "  contact       - Get direct contact links (Email, GitHub, LinkedIn)", type: "output" },
          { text: "  sudo hire-raza - Initiate top-tier candidate hiring sequence 🎉", type: "output" },
          { text: "  clear         - Clear terminal buffer", type: "output" },
        ];
        break;

      case 'bio':
        response = [
          { text: `NAME: ${personalInfo.name}`, type: "output" },
          { text: `ROLE: ${personalInfo.role}`, type: "output" },
          { text: `EDUCATION: ${personalInfo.education.institution} (${personalInfo.education.degree}, 2018-2022)`, type: "output" },
          { text: `EXPERIENCE: 3+ Years Tech Lead at HCL Technologies + Full-Stack Systems`, type: "output" },
          { text: `TAGLINE: ${personalInfo.tagline}`, type: "output" }
        ];
        break;

      case 'skills':
        response = [
          { text: "LANGUAGES: Python (Expert), Java (Enterprise), JavaScript (DOM/React), SQL", type: "output" },
          { text: "BACKEND: Django, Flask, REST APIs, ReportLab PDF, RBAC, Async Workers", type: "output" },
          { text: "FRONTEND: React (Vite), Material UI, Chrome Extensions, Dynamic DOM", type: "output" },
          { text: "AI & DATA: Google Vertex AI, Pandas, NumPy, NetworkX, Prompt Engineering", type: "output" },
          { text: "DEVOPS: AWS (Lightsail, S3, CloudFront), Nginx, GitHub Actions, CI/CD", type: "output" }
        ];
        break;

      case 'projects':
        response = [
          { text: "1. DATA AUTOMATION CHROME EXTENSION: Slashed healthcare task time by 60% (~60s to ~20s) bypassing Vue.js boundaries.", type: "output" },
          { text: "2. SECURITY RISK INTELLIGENCE: 65K+ records, NetworkX graph communities & LLM explainability.", type: "output" },
          { text: "3. LEGAL CASE MANAGEMENT SYSTEM: React + Django, automated cause list, custom react-pdf viewer, ReportLab.", type: "output" }
        ];
        break;

      case 'awards':
        response = [
          { text: "🏆 2025: Appreciation for Automation & Risk Reduction Initiative (HCL Tech)", type: "output" },
          { text: "🧠 2025: Certification in Google Vertex AI (HCL Tech / Google Cloud)", type: "output" }
        ];
        break;

      case 'contact':
        response = [
          { text: `EMAIL:    ${personalInfo.email}`, type: "output" },
          { text: `GITHUB:   ${personalInfo.github}`, type: "output" },
          { text: `LINKEDIN: ${personalInfo.linkedin}`, type: "output" }
        ];
        break;

      case 'sudo hire-raza':
        playSuccess();
        triggerConfetti(0.5, 0.5);
        response = [
          { text: ">>> AUTHENTICATION GRANTED: ROOT ACCESS 🚀", type: "highlight" },
          { text: ">>> Excellent decision! Candidate Raza Ayoub matches: High Scalability, Clean Code, Relentless Drive.", type: "highlight" },
          { text: `>>> Initiating priority handshake. Drop a message at: ${personalInfo.email}`, type: "highlight" }
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        playBeep();
        response = [
          { text: `Command not recognized: '${cmd}'. Type 'help' for guidance.`, type: "error" }
        ];
        break;
    }

    setHistory((prev) => [...prev, newEntry, ...response]);
    setInputVal('');
  };

  return (
    <div className="neo-box bg-[#121214] text-white p-5 rounded-none shadow-[6px_6px_0px_#000]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b-2 border-gray-700 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6584] border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFE600] border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-[#70FF00] border border-black"></div>
          <span className="font-mono text-xs font-bold text-gray-400 ml-2">raza@iit-terminal: ~ (bash)</span>
        </div>
        <div className="font-mono text-[11px] text-[#FFE600] flex items-center gap-1">
          <Sparkles size={12} />
          <span>Interactive Shell</span>
        </div>
      </div>

      {/* Terminal History */}
      <div className="h-64 overflow-y-auto space-y-1.5 font-mono text-xs pr-2">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`
              ${item.type === 'system' ? 'text-gray-400 italic' : ''}
              ${item.type === 'user' ? 'text-[#00F0FF] font-bold' : ''}
              ${item.type === 'output' ? 'text-gray-200 pl-2' : ''}
              ${item.type === 'highlight' ? 'text-[#70FF00] font-black pl-2' : ''}
              ${item.type === 'error' ? 'text-[#FF6584] pl-2' : ''}
            `}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleCommand} className="mt-3 pt-3 border-t border-gray-700 flex items-center gap-2">
        <span className="text-[#70FF00] font-mono font-black text-sm">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help' or 'sudo hire-raza'..."
          className="flex-1 bg-transparent text-[#FFE600] font-mono text-xs focus:outline-none placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-[#FFE600] text-black font-mono font-bold text-xs border border-black hover:bg-[#FFD000] flex items-center gap-1"
        >
          <span>RUN</span>
          <CornerDownLeft size={12} />
        </button>
      </form>
    </div>
  );
};

