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
      <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#121214] font-sans selection:bg-black selection:text-[#FFE600] relative pattern-grid">
        
        {/* Playful Floating Badges */}
        <FloatingStickers />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Dynamic Page Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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

