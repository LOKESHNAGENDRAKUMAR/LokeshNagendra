import React from 'react';
import { Film, Users, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
            Software Development
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Independent software development work and collaborative platform implementations.
          </p>
        </div>

        {/* Projects Display */}
        <div className="space-y-8 max-w-4xl">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 mt-1">
                    <Film size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {project.status}
                </span>
              </div>

              {/* Overview */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {project.overview}
              </p>

              {/* Stated Contributions */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Key Implemented Contributions
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800"
                    >
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                        <Users size={15} className="text-blue-600 dark:text-blue-400" />
                        <span>{item.heading}</span>
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action / Placeholder */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project URL Placeholder */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-50 dark:bg-slate-950 text-slate-500 border border-dashed border-slate-300 dark:border-slate-700">
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
