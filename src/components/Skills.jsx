import React from 'react';
import { Code2, Cpu, Database, Cloud, Wrench } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  "Programming Languages": Code2,
  "Core Computer Science": Cpu,
  "Databases": Database,
  "Cloud & Tools": Cloud,
  "Development Practices": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
            Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Knowledge
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Verified technical proficiencies and computer science fundamentals based on coursework and project application.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Confirmed in resume</span>
                  <span className="font-mono">{group.skills.length} skills</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
