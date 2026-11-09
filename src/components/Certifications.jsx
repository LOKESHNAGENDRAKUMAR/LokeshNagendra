import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
            <span>[ 06 // VALIDATIONS ]</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Direct certifications confirmed from official resume documentation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="anime-card p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">+</span>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-[#ff4b4b] group-hover:scale-110 transition-transform">
                    <Award size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                    <CheckCircle2 size={11} />
                    VERIFIED
                  </span>
                </div>

                <h3 className="font-bold font-mono text-base text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#a855f7] mb-3">
                  ISSUER: {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {cert.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>STATUS: AUTHENTIC</span>
                <span className="text-slate-400">RESUME PROOF</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
