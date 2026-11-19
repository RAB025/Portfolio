import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { playClick, playPop, toggleSound, isSoundEnabled } from '../utils/audio';

export const Navbar = () => {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playPop();
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/honors', label: 'Honors' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 w-full max-w-7xl mx-auto transition-all duration-300">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-900/15 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06),2.5px_2.5px_0px_#0F172A] rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink 
          to="/" 
          onClick={() => playPop()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-[#FFE600] border-1.5 border-[#0F172A] rounded-xl shadow-[2px_2px_0px_#0F172A] flex items-center justify-center font-black text-lg group-hover:-rotate-3 transition-transform duration-200">
            RA
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight flex items-center gap-2 text-slate-900">
              <span>Raza Ayoub</span>
              <span className="relative flex h-2 w-2" title="Available for High-Impact Roles">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div className="text-[11px] font-mono font-medium text-slate-500">
              Sr. Tech Lead • IIT Tirupati
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => playClick()}
                className={`
                  relative px-3.5 py-1.5 font-bold text-xs rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-extrabold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}
                `}
              >
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls: Sound & Quick Contact */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Sound Toggle Button */}
          <button
            onClick={handleSoundToggle}
            title={soundOn ? "Sound Effects ON (Click to Mute)" : "Sound Effects MUTED (Click to Enable)"}
            className={`px-2.5 py-1.5 border border-slate-900/15 rounded-xl shadow-[1.5px_1.5px_0px_#0F172A] font-mono font-bold text-xs flex items-center gap-1.5 transition-all duration-200 active:translate-y-0.5 ${
              soundOn ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {soundOn ? <Volume2 size={14} className="text-emerald-600" /> : <VolumeX size={14} />}
            <span className="text-[10px] hidden lg:inline">{soundOn ? 'AUDIO' : 'MUTED'}</span>
          </button>

          {/* Quick Connect Pill */}
          <NavLink
            to="/contact"
            onClick={() => playPop()}
            className="neo-btn px-4 py-1.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-extrabold text-xs uppercase tracking-wide flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </NavLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleSoundToggle}
            className={`p-1.5 border border-slate-900/15 rounded-lg shadow-[1.5px_1.5px_0px_#0F172A] ${
              soundOn ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
            }`}
            aria-label="Toggle SFX"
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-1.5 bg-slate-100 border border-slate-900/15 rounded-lg shadow-[1.5px_1.5px_0px_#0F172A] active:translate-y-0.5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 bg-white/95 backdrop-blur-xl border border-slate-900/15 shadow-xl rounded-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className={({ isActive }) => `
                flex items-center justify-between px-3.5 py-2 font-bold text-sm rounded-xl transition-colors
                ${isActive ? 'bg-[#FFE600] text-black border border-black/10 font-black' : 'text-slate-700 hover:bg-slate-100'}
              `}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={14} className="opacity-50" />
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => {
              playPop();
              setMobileMenuOpen(false);
            }}
            className="mt-2 text-center py-2.5 bg-[#FF6584] text-white font-extrabold text-xs uppercase rounded-xl border border-black/15 shadow-sm"
          >
            Get In Touch
          </NavLink>
        </div>
      )}
    </header>
  );
};
