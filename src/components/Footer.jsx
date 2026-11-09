import React from 'react';
import { ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base text-slate-900 dark:text-white">
                {candidateInfo.fullName}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hidden sm:inline">
                {candidateInfo.headline}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {candidateInfo.location} • {candidateInfo.timezone}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={candidateInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <GithubIcon size={17} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {candidateInfo.fullName}. Built with React, Vite & Tailwind CSS.</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Strict privacy adherence • Resume authenticated details</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
