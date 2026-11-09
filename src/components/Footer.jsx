import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold font-mono text-base text-white">
                {candidateInfo.fullName}
              </span>
              <span className="text-slate-600 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-[#ff4b4b] font-mono hidden sm:inline">
                {candidateInfo.headline}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500 mt-1">
              {candidateInfo.location} • {candidateInfo.timezone}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={candidateInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5"
            >
              <GithubIcon size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10"
            >
              <span>[ TOP ]</span>
              <ArrowUp size={13} className="text-[#ff4b4b]" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {candidateInfo.fullName}. Aesthetic inspired by Anime.js.</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Strict privacy adherence • Verified credentials only</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
