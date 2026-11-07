import React from 'react';
import { ArrowRight, MapPin, Mail, FolderGit2, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-900/80 text-blue-700 dark:text-blue-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{candidateInfo.availability}</span>
            </div>

            {/* Candidate Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {candidateInfo.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
                {candidateInfo.headline}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <MapPin size={16} className="text-slate-400" />
              <span>{candidateInfo.location}</span>
            </div>

            {/* Summary */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {candidateInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
              >
                <FolderGit2 size={16} />
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>

            {/* Verified Social Link Placeholders */}
            <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/70">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                External Profiles
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={candidateInfo.contactPlaceholders.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>github.com/LOKESHNAGENDRAKUMAR</span>
                </a>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-dashed border-slate-300 dark:border-slate-700">
                  <LinkedinIcon size={14} />
                  <span>{candidateInfo.contactPlaceholders.linkedin}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Academic Focus Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 sm:w-72 max-w-full">
              {/* Profile Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md">
                <img
                  src={candidateInfo.image}
                  alt={candidateInfo.fullName}
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                    <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                    <span>MCA Candidate (2025 – 2027)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Aditya Degree & PG College, Gopalapatnam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
