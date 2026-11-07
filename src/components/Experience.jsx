import React from 'react';
import { Cloud, CheckCircle2, ShieldAlert } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
            Practical Application
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Verified internship responsibilities focused on cloud infrastructure and distributed principles.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 max-w-4xl">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                    <Cloud size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Cloud Infrastructure Focus
                </span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-5">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Confirmed Responsibilities
                </h4>
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Confirmed */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Key Technologies & Concepts Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.confirmedTechnologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50"
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
