import React from 'react';
import { Globe2, Award, CheckCircle2, Terminal, Code2, Cpu } from 'lucide-react';
import { candidateInfo, behavioralSkills, languagesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
            <span>[ 01 // ABOUT ]</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">CORE ETHOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Background & Engineering Philosophy
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Structured computer science fundamentals paired with cloud infrastructure engineering.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="anime-card p-6 sm:p-8 rounded-3xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed relative">
              <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">+</span>
              
              <h3 className="text-lg font-bold text-white">
                Designing resilient systems from algorithmic roots to distributed cloud deployments.
              </h3>
              
              <p>
                I am a Computer Science graduate pursuing my <strong>Master of Computer Applications (MCA, 2025–2027)</strong> at Aditya Degree & PG College, Gopalapatnam, having completed my Bachelor of Computer Science at Mahathi Degree College, Visakhapatnam.
              </p>

              <p>
                My technical discipline is built on strong programming foundations in <strong>Java, C, and Python</strong>, with deep focus on data structures, algorithms, and object-oriented design. During my <strong>AWS Cloud Computing internship</strong>, I worked directly with Amazon S3 and EC2, deploying scalable applications and adopting cloud-native architecture to optimize compute latency and storage efficiency.
              </p>

              <p>
                I am passionate about software development, distributed computing, and building robust REST APIs for high-throughput platforms.
              </p>

              {/* Languages */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  // COMMUNICATIVE LANGUAGES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {languagesData.map((lang, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      <Globe2 size={13} className="text-[#ff4b4b]" />
                      <span className="text-white font-bold">{lang.language}:</span>
                      <span className="text-[#a855f7]">{lang.proficiency}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Card & Behavioral Competencies (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Syntax Card */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-950 text-slate-300 shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/5 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4b4b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-slate-400">developer.config.json</span>
                <span className="text-emerald-400">v4.0.0</span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300">
                <div>&#123;</div>
                <div className="pl-4">
                  <div><span className="text-purple-400">"candidate"</span>: <span className="text-emerald-300">"Regla Lokesh Nagendra Kumar"</span>,</div>
                  <div><span className="text-purple-400">"status"</span>: <span className="text-emerald-300">"Open to Engineering Roles"</span>,</div>
                  <div><span className="text-purple-400">"education"</span>: &#123;</div>
                  <div className="pl-4">
                    <div><span className="text-cyan-300">"degree"</span>: <span className="text-emerald-300">"MCA (2025-2027)"</span>,</div>
                    <div><span className="text-cyan-300">"college"</span>: <span className="text-emerald-300">"Aditya PG College"</span></div>
                  </div>
                  <div className="pl-0">&#125;,</div>
                  <div><span className="text-purple-400">"cloudFocus"</span>: [<span className="text-emerald-300">"Amazon EC2"</span>, <span className="text-emerald-300">"Amazon S3"</span>],</div>
                  <div><span className="text-purple-400">"mindset"</span>: <span className="text-amber-300">"Clean architecture & distributed scaling"</span></div>
                </div>
                <div>&#125;</div>
              </div>
            </div>

            {/* Behavioral Strengths */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block px-1">
                // BEHAVIORAL ATTRIBUTES
              </span>
              {behavioralSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="anime-card p-3.5 rounded-2xl flex items-start gap-3"
                >
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
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
