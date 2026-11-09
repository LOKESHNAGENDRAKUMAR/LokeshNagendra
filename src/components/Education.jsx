import React from 'react';
import { GraduationCap, Clock, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
            <span>[ 05 // ACADEMICS ]</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">EDUCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Formal Education & Degrees
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Academic qualifications and post-graduate computer science studies.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="anime-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">+</span>

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-[#ff4b4b] group-hover:scale-110 transition-transform">
                    <GraduationCap size={22} />
                  </div>
                  {edu.status === 'In Progress' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ff4b4b]/15 text-[#ff4b4b] border border-[#ff4b4b]/30">
                      <Clock size={12} className="animate-spin" />
                      IN PROGRESS (2025–2027)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 size={12} />
                      COMPLETED
                    </span>
                  )}
                </div>

                <h3 className="font-bold font-mono text-lg text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#a855f7] mb-3">
                  // {edu.institution}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {edu.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>DURATION</span>
                <span className="text-slate-300 font-semibold">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
