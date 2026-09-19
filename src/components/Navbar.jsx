import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, Sparkles, Terminal, Rocket } from 'lucide-react';
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
    { to: '/', label: 'Home', badge: '⚡' },
    { to: '/projects', label: 'Projects', badge: '🔥' },
    { to: '/experience', label: 'Experience', badge: '🚀' },
    { to: '/skills', label: 'Skills', badge: '🛠️' },
    { to: '/honors', label: 'Honors', badge: '🏆' },
    { to: '/contact', label: 'Contact', badge: '💬' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b-4 border-black px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink 
          to="/" 
          onClick={() => playPop()}
          className="flex items-center gap-2 group"
        >
          <div className="w-11 h-11 bg-[#FFE600] border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-xl group-hover:rotate-6 transition-transform">
            RA
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
              <span>Raza Ayoub</span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#70FF00] border border-black animate-pulse" title="Ready to build"></span>
            </div>
            <div className="text-xs font-mono font-bold text-gray-600">Sr. Tech Lead • IIT Tirupati</div>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => playClick()}
                className={({ isActive }) => `
                  relative px-4 py-2 font-bold text-sm rounded-md transition-all duration-150 border-2
                  ${isActive 
                    ? 'bg-[#00F0FF] border-black shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]' 
                    : 'border-transparent hover:border-black hover:bg-[#FFE600] hover:shadow-[3px_3px_0px_#000]'}
                `}
              >
                <span>{link.label}</span>
                <span className="ml-1 text-xs opacity-80">{link.badge}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls: Sound & Quick Contact */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle Button */}
          <button
            onClick={handleSoundToggle}
            title={soundOn ? "Sound Effects ON (Click to Mute)" : "Sound Effects MUTED (Click to Enable)"}
            className={`p-2 border-2 border-black rounded shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] font-bold text-xs flex items-center gap-1.5 transition-colors ${
              soundOn ? 'bg-[#70FF00]' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="hidden lg:inline">{soundOn ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* Quick Connect Pill */}
          <NavLink
            to="/contact"
            onClick={() => playPop()}
            className="px-3.5 py-1.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-1"
          >
            <Sparkles size={14} />
            <span>Say Hello!</span>
          </NavLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleSoundToggle}
            className={`p-2 border-2 border-black rounded shadow-[2px_2px_0px_#000] ${
              soundOn ? 'bg-[#70FF00]' : 'bg-gray-200'
            }`}
            aria-label="Toggle SFX"
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t-3 border-black flex flex-col gap-2 pb-2 bg-[#FFFDF9]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className={({ isActive }) => `
                flex items-center justify-between px-4 py-2.5 font-extrabold text-base border-2 border-black rounded shadow-[3px_3px_0px_#000]
                ${isActive ? 'bg-[#00F0FF]' : 'bg-white hover:bg-[#FFE600]'}
              `}
            >
              <span>{link.label}</span>
              <span className="text-sm">{link.badge}</span>
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => {
              playPop();
              setMobileMenuOpen(false);
            }}
            className="mt-2 text-center py-2.5 bg-[#FF6584] text-white font-black border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            🚀 Get In Touch With Raza
          </NavLink>
        </div>
      )}
    </header>
  );
};

