import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingStickers } from './components/FloatingStickers';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Honors } from './pages/Honors';
import { Contact } from './pages/Contact';

// Auto scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#FFE600] relative pattern-grid overflow-x-hidden">
        
        {/* Fluid Ambient Lighting Accents */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200/40 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-amber-200/30 rounded-full blur-[140px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-indigo-200/35 rounded-full blur-[130px]"></div>
        </div>

        {/* Live Focus Dock */}
        <FloatingStickers />

        {/* Floating Navigation Header */}
        <Navbar />

        {/* Dynamic Page Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/honors" element={<Honors />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}
