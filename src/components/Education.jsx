import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Formal computer science education and post-graduate studies.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                    <GraduationCap size={20} />
                  </div>
                  {edu.status === 'In Progress' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 font-mono">
                      <Clock size={12} className="animate-spin" />
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-mono">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>Duration</span>
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

