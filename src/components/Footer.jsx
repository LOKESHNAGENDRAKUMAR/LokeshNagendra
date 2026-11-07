import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">
              {candidateInfo.fullName}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {candidateInfo.headline} • {candidateInfo.location}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {candidateInfo.fullName}. All details verified from academic & professional credentials.</p>
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <ShieldCheck size={13} className="text-emerald-500" />
            <span>Strict privacy adherence • No unverified claims</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
