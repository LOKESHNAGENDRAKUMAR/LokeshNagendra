import React from 'react';
import { Film, Users, Sparkles, Code, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
            <span>[ 04 // FEATURED ARCHITECTURE ]</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">LAB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Software Projects
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Collaborative platform development and talent matching architecture.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="anime-card p-6 sm:p-9 rounded-3xl space-y-6 relative overflow-hidden"
            >
              <span className="absolute top-3 left-3 text-white/20 font-mono text-xs">+</span>
              <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">+</span>

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/5">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-[#ff4b4b] to-[#a855f7] text-white shadow-lg shadow-[#ff4b4b]/20">
                    <Film size={26} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold font-mono text-white">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#ff4b4b]/15 text-[#ff4b4b] border border-[#ff4b4b]/30">
                        <Sparkles size={11} />
                        FEATURED
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                      // {project.tagline}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  {project.status.toUpperCase()}
                </span>
              </div>

              {/* Overview */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>

              {/* Stated Contributions in 2 Bento Sub-Cards */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  // STATED IMPLEMENTATIONS
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2"
                    >
                      <div className="flex items-center gap-2 text-[#ff4b4b] font-mono font-bold text-sm">
                        <Users size={16} />
                        <h5>{item.heading}</h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags & Project URL Placeholder */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Clear Placeholder */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-dashed border-white/20">
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
