import React from 'react';
import { ArrowRight, MapPin, Mail, Sparkles, GraduationCap, Cloud, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';
import AnimeGrid from './AnimeGrid';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Technical Metadata Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 text-[11px] font-mono text-slate-400 border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-semibold">{candidateInfo.availability}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>LOC: {candidateInfo.location.toUpperCase()}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">{candidateInfo.timezone}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          
          {/* Main Statement (7 Cols) */}
          <div className="lg:col-span-7 anime-card p-6 sm:p-9 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            {/* Technical corner crosses */}
            <span className="absolute top-3 left-3 text-white/20 font-mono text-xs select-none">+</span>
            <span className="absolute top-3 right-3 text-white/20 font-mono text-xs select-none">+</span>
            <span className="absolute bottom-3 left-3 text-white/20 font-mono text-xs select-none">+</span>
            <span className="absolute bottom-3 right-3 text-white/20 font-mono text-xs select-none">+</span>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 mb-5">
                // SYSTEM: FULL-STACK & CLOUD-NATIVE
              </div>

              {/* Candidate Full Name with Anime.js Gradient */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-3">
                Regla Lokesh <br />
                <span className="anime-gradient-text">Nagendra Kumar</span>
              </h1>

              <p className="text-base sm:text-lg font-mono font-medium text-slate-300 mb-5">
                {candidateInfo.headline}
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                {candidateInfo.summary}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-[#ff4b4b] to-[#a855f7] hover:opacity-90 text-white shadow-lg shadow-[#ff4b4b]/20 transition-opacity cursor-pointer"
                >
                  <span>[ VIEW PROJECTS ]</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <Mail size={14} className="text-[#ff4b4b]" />
                  <span>CONTACT</span>
                </a>
              </div>

              {/* GitHub Link */}
              <a
                href={candidateInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon size={16} />
                <span>/{candidateInfo.githubUsername}</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            </div>
          </div>

          {/* Candidate Portrait Card with Anime.js Technical Frame (5 Cols) */}
          <div className="lg:col-span-5 anime-card p-4 rounded-3xl flex flex-col justify-between relative group overflow-hidden">
            <span className="absolute top-3 left-3 text-white/20 font-mono text-xs select-none">+</span>
            <span className="absolute top-3 right-3 text-white/20 font-mono text-xs select-none">+</span>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-white/10">
              <img
                src={candidateInfo.image}
                alt={candidateInfo.fullName}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />

              {/* Technical Overlay Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-white">MCA CANDIDATE</span>
                  <span className="text-[#ff4b4b]">2025–2027</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                  Aditya Degree & PG College, Gopalapatnam
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 px-1 text-[10px] font-mono text-slate-500">
              <span>// PORTRAIT_ID: VERIFIED</span>
              <span>DEV_REF: LOKESH</span>
            </div>
          </div>

        </div>

        {/* Interactive Kinetic Anime.js Grid */}
        <div className="mt-2 mb-8">
          <AnimeGrid />
        </div>

      </div>
    </section>
  );
}
