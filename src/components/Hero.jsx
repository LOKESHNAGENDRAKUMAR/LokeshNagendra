import React from 'react';
import { ArrowRight, MapPin, Mail, Sparkles, GraduationCap, Cloud, Code2, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Bento Row: Main Bio + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Main Bio Card (8 Cols) */}
          <div className="lg:col-span-8 bento-card p-6 sm:p-9 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            {/* Subtle top-right ambient glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Status & Availability Bar */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/80 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
                  <span>{candidateInfo.availability}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">
                  <MapPin size={13} className="text-slate-400" />
                  <span>{candidateInfo.location}</span>
                  <span className="text-slate-400 font-mono text-[11px]">• {candidateInfo.timezone}</span>
                </span>
              </div>

              {/* Candidate Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-3">
                {candidateInfo.fullName}
              </h1>

              <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent mb-5">
                {candidateInfo.headline}
              </p>

              {/* Summary */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                {candidateInfo.summary}
              </p>
            </div>

            {/* CTAs and Verified Profiles */}
            <div className="pt-5 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer"
                >
                  <Mail size={15} />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* GitHub Button */}
              <a
                href={candidateInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 shadow-xs transition-opacity"
              >
                <GithubIcon size={15} />
                <span>github.com/{candidateInfo.githubUsername}</span>
              </a>
            </div>
          </div>

          {/* Portrait Photo Card (4 Cols) */}
          <div className="lg:col-span-4 bento-card p-4 rounded-3xl flex flex-col items-center justify-between relative group">
            <div className="w-full relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
              <img
                src={candidateInfo.image}
                alt={candidateInfo.fullName}
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              
              {/* Floating Verified Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 text-white">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <GraduationCap size={15} className="text-indigo-400" />
                  <span>MCA Candidate (2025–2027)</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                  Aditya Degree & PG College, Gopalapatnam
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Row: 3 Fast-Insight Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Academic Trajectory */}
          <div className="bento-card p-5 rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Current Program
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Master of Computer Applications
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                In Progress (2025–2027) • Aditya PG College
              </p>
            </div>
          </div>

          {/* Card 2: Cloud Experience */}
          <div className="bento-card p-5 rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
              <Cloud size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Internship Experience
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                AWS Cloud Computing Intern
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Amazon EC2, S3 & Cloud-Native Architectures
              </p>
            </div>
          </div>

          {/* Card 3: Core CS & Programming */}
          <div className="bento-card p-5 rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Code2 size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Core Foundations
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Java, C, Python & SQL
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Data Structures, Algorithms & OOP Design
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
