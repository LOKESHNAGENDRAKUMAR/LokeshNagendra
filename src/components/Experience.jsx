import React from 'react';
import { Cloud, CheckCircle2, Server, Cpu, Layers } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
            <span>[ 03 // CLOUD EXPERIENCE ]</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">PRACTICAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Practical deployment, architecture optimization, and cloud services engineering.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl space-y-6">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="anime-card p-6 sm:p-9 rounded-3xl space-y-6 relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">+</span>
              <span className="absolute bottom-3 left-3 text-white/20 font-mono text-xs">+</span>

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#ff4b4b] to-[#a855f7] text-white shadow-lg shadow-[#ff4b4b]/20">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-[#ff4b4b] mt-0.5">
                      // {item.type.toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  <Server size={13} className="text-[#a855f7]" />
                  <span>AWS (AMAZON EC2 & S3)</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  // CONFIRMED RESPONSIBILITIES
                </h4>
                <div className="space-y-2.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-white/5"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  // TECHNOLOGIES & CONCEPTS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.confirmedTechnologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-white/5 text-slate-200 border border-white/10 hover:border-[#ff4b4b]/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
