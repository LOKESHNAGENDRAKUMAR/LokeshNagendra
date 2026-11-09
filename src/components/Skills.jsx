import React, { useState } from 'react';
import { Code2, Cpu, Database, Cloud, Wrench, Layers, Terminal } from 'lucide-react';
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
    <section id="skills" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
              <span>[ 02 // TECHNICAL STACK ]</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">INDEX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Skills & Core Knowledge
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-mono">
              Categorized technical proficiencies verified directly from resume coursework and projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-gradient-to-r from-[#ff4b4b] to-[#a855f7] text-white shadow-md shadow-[#ff4b4b]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const Icon = iconMap[group.category] || Code2;
            return (
              <div
                key={idx}
                className="anime-card p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
              >
                <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">+</span>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/5 text-[#ff4b4b] group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold font-mono text-sm text-white">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      [{group.skills.length}]
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-mono">
                    // {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/5 text-slate-200 border border-white/10 hover:border-[#ff4b4b]/60 hover:text-[#ff4b4b] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>RESUME_VALIDATED: TRUE</span>
                  <span className="text-emerald-400">✓ VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
