import React from 'react';
import { Cloud, CheckCircle2, ShieldCheck, Server, Cpu } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cloud size={13} />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Verified internship responsibilities focused on cloud infrastructure, distributed systems, and scalable compute.
          </p>
        </div>

        {/* Experience Bento Card */}
        <div className="max-w-4xl space-y-6">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="bento-card p-6 sm:p-8 rounded-3xl space-y-6"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {item.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium">
                  <Server size={12} />
                  <span>AWS Cloud Infrastructure</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Confirmed Responsibilities
                </h4>
                <div className="space-y-2.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                  Confirmed Technologies & Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.confirmedTechnologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
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
