import React from 'react';
import { Globe2, Award, CheckCircle2, Terminal, Code2, ShieldCheck } from 'lucide-react';
import { candidateInfo, behavioralSkills, languagesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 size={13} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background & Direction
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            A natural summary of my academic foundation, technical focus, and professional values.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Languages (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bento-card p-6 sm:p-8 rounded-3xl space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Building reliable software on top of resilient cloud infrastructure.
              </h3>
              
              <p>
                I am a Computer Science graduate currently pursuing my <strong>Master of Computer Applications (MCA, 2025–2027)</strong> at Aditya Degree & PG College, Gopalapatnam. I earned my Bachelor of Computer Science from Mahathi Degree College, Visakhapatnam.
              </p>

              <p>
                My technical education is anchored in core programming with <strong>Java, C, and Python</strong>, coupled with rigorous training in data structures, algorithms, and object-oriented design. During my <strong>AWS Cloud Computing internship</strong>, I focused on hands-on deployment and management of cloud applications using Amazon EC2 and S3, adopting cloud-native architectures to optimize storage and compute efficiency.
              </p>

              <p>
                I am deeply interested in software engineering, distributed computing, and RESTful API development, aiming to contribute meaningfully to innovative engineering teams.
              </p>

              {/* Languages Box */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Languages
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {languagesData.map((lang, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      <Globe2 size={13} className="text-indigo-500" />
                      <span className="font-semibold">{lang.language}:</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono">{lang.proficiency}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Card & Behavioral Strengths (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Terminal Code Card */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-800 bg-slate-950 text-slate-200">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-400">candidate.profile.ts</span>
                <span className="text-[11px] font-mono text-emerald-400">✓ verified</span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <div><span className="text-purple-400">export const</span> <span className="text-yellow-300">candidate</span> = &#123;</div>
                <div className="pl-4">
                  <div><span className="text-blue-300">name:</span> <span className="text-emerald-300">'Regla Lokesh Nagendra Kumar'</span>,</div>
                  <div><span className="text-blue-300">role:</span> <span className="text-emerald-300">'Software Developer'</span>,</div>
                  <div><span className="text-blue-300">education:</span> &#123;</div>
                  <div className="pl-4">
                    <div><span className="text-cyan-300">degree:</span> <span className="text-emerald-300">'MCA (2025-2027)'</span>,</div>
                    <div><span className="text-cyan-300">college:</span> <span className="text-emerald-300">'Aditya Degree & PG College'</span></div>
                  </div>
                  <div className="pl-0">&#125;,</div>
                  <div><span className="text-blue-300">cloudInternship:</span> <span className="text-emerald-300">'AWS (Amazon EC2, S3)'</span>,</div>
                  <div><span className="text-blue-300">interests:</span> <span className="text-amber-300">['Cloud-Native', 'REST APIs', 'Distributed Systems']</span></div>
                </div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Behavioral Strengths Cards */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
                Verified Behavioral Strengths
              </span>
              {behavioralSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="bento-card p-4 rounded-2xl flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
