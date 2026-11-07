import React from 'react';
import { BookOpen, Globe2, Compass, Award, CheckCircle2 } from 'lucide-react';
import { candidateInfo, behavioralSkills, languagesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
            Background & Direction
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Academic & Career Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science graduate pursuing my <strong>Master of Computer Applications (MCA, 2025–2027)</strong> at Aditya Degree & PG College, Gopalapatnam. I completed my Bachelor of Computer Science at Mahathi Degree College, Visakhapatnam.
            </p>
            <p>
              My technical journey is grounded in strong programming fundamentals across <strong>Java, C, and Python</strong>, accompanied by core concepts in data structures, algorithms, and object-oriented design. During my academic projects and cloud computing internship, I focused on building cloud-native applications, developing REST APIs, and leveraging AWS infrastructure (Amazon EC2 and S3).
            </p>
            <p>
              I am passionate about software engineering, distributed computing, and cloud architecture. My primary goal is to contribute effectively to innovative engineering teams where I can design reliable software, solve computational challenges, and continue growing as a developer.
            </p>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
                <Globe2 size={15} className="text-blue-600" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {languagesData.map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-xs"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{lang.language}:</span>
                    <span className="text-blue-600 dark:text-blue-400 font-mono">{lang.proficiency}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Behavioral Strengths from Resume */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
              <Award size={15} className="text-blue-600" />
              <span>Behavioral & Professional Strengths</span>
            </h3>

            <div className="space-y-3">
              {behavioralSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
                >
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item.name}</span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
