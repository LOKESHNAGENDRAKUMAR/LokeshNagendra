import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={13} />
            <span>Credentials & Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Technical and professional credentials confirmed directly from resume documentation.
          </p>
        </div>

        {/* Certifications Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bento-card p-6 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                {/* Header & Verified Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                    <Award size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/70 dark:border-emerald-800/70 font-mono">
                    <CheckCircle2 size={11} />
                    Verified
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                  Issuer: {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Credential Status</span>
                <span className="text-slate-600 dark:text-slate-300">Resume Authenticated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
