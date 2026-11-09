import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
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
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Brand Badge */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-500 transition-all"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-mono font-bold flex items-center justify-center text-xs shadow-xs group-hover:scale-105 transition-transform">
            LK
          </div>
          <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
            {candidateInfo.shortName}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline" />
        </a>

        {/* Center Floating Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle visual theme"
            className="p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
          >
            {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-600" />}
          </button>

          {/* Quick Contact Action */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowRight size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden max-w-sm mx-auto mt-3 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl pointer-events-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-2 px-4 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-xs"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
