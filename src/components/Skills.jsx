import React, { useState } from 'react';
import { Code2, Cpu, Database, Cloud, Wrench, Layers } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const iconMap = {
  "Programming Languages": Code2,
  "Core Computer Science": Cpu,
  "Databases & Storage": Database,
  "Cloud Infrastructure & Tools": Cloud,
  "Development Practices": Wrench
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'Programming', 'Cloud', 'Core CS', 'Databases', 'Practices'];

  const filteredCategories = skillsCategories.filter((cat) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Programming') return cat.category.includes('Programming');
    if (selectedFilter === 'Cloud') return cat.category.includes('Cloud');
    if (selectedFilter === 'Core CS') return cat.category.includes('Core Computer');
    if (selectedFilter === 'Databases') return cat.category.includes('Databases');
    if (selectedFilter === 'Practices') return cat.category.includes('Practices');
    return true;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers size={13} />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Core Competencies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Discrete, verified technical knowledge and computer science concepts confirmed from coursework and projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid of Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const Icon = iconMap[group.category] || Code2;
            return (
              <div
                key={idx}
                className="bento-card p-6 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {group.skills.length} items
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified Credentials</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">✓ Confirmed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
