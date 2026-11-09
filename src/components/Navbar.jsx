import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Terminal } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { num: '01', name: 'About', href: '#about' },
    { num: '02', name: 'Skills', href: '#skills' },
    { num: '03', name: 'Experience', href: '#experience' },
    { num: '04', name: 'Projects', href: '#projects' },
    { num: '05', name: 'Education', href: '#education' },
    { num: '06', name: 'Credentials', href: '#certifications' },
    { num: '07', name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Badge with Anime.js Neon Accent */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg hover:border-[#ff4b4b]/60 transition-all"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#ff4b4b] to-[#a855f7] text-white font-mono font-bold flex items-center justify-center text-xs shadow-xs group-hover:scale-110 transition-transform">
            LK
          </div>
          <span className="text-xs font-mono font-bold tracking-tight text-white group-hover:text-[#ff4b4b] transition-colors">
            {candidateInfo.shortName}
          </span>
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
            // DEV
          </span>
        </a>

        {/* Center Floating Dock */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ff4b4b] to-[#a855f7] text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="opacity-60 text-[10px] mr-1">{link.num}</span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#ff4b4b]/60 shadow-xs transition-all cursor-pointer"
          >
            <span>[ CONTACT ]</span>
            <ArrowRight size={13} className="text-[#ff4b4b]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-slate-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden max-w-sm mx-auto mt-3 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-500">{link.num}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-2 px-4 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-[#ff4b4b] to-[#a855f7] text-white shadow-xs"
            >
              [ CONNECT NOW ]
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
