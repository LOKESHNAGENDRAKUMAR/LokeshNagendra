import React from 'react';
import { GraduationCap, Clock, CheckCircle2, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Degrees
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Formal computer science education and post-graduate studies confirmed from credentials.
          </p>
        </div>

        {/* Education Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bento-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                {/* Header & Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                    <GraduationCap size={22} />
                  </div>
                  {edu.status === 'In Progress' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 font-mono">
                      <Clock size={12} className="animate-spin" />
                      In Progress (2025–2027)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 font-mono">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {edu.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Duration</span>
                <span className="font-semibold text-slate-600 dark:text-slate-300">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
