import React from 'react';
import { Film, Users, Sparkles, Layers, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code size={13} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Verified platform architecture and software development contributions.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="max-w-4xl space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bento-card p-6 sm:p-9 rounded-3xl space-y-6 relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/20">
                    <Film size={26} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                  {project.status}
                </span>
              </div>

              {/* Overview */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>

              {/* Stated Contributions in 2 Bento Sub-Cards */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Key Implemented Contributions
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                        <Users size={16} />
                        <h5>{item.heading}</h5>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags & Project URL Placeholder */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Clear Placeholder */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-50 dark:bg-slate-900 text-slate-500 border border-dashed border-slate-300 dark:border-slate-700">
                  <span>{project.projectUrlPlaceholder}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
