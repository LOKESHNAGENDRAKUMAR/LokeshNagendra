import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(candidateInfo.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        state: 'error',
        message: 'Please complete all required fields (Name, Email, and Message).'
      });
      return;
    }

    setStatus({
      state: 'success',
      message: 'Inquiry received. Direct contact information will be dispatched upon review.'
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#ff4b4b] mb-2 flex items-center gap-2">
            <span>[ 07 // DISPATCH ]</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">CONNECT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Open to software engineering opportunities, cloud platforms, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Privacy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Location & Timezone Card */}
            <div className="anime-card p-6 rounded-3xl flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/5 text-[#ff4b4b] shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  // LOCATION & TIMEZONE
                </span>
                <h4 className="font-bold font-mono text-base text-white">
                  {candidateInfo.location}
                </h4>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {candidateInfo.timezone} • Remote / Relocation Ready
                </p>
              </div>
            </div>

            {/* Privacy Compliance Card */}
            <div className="anime-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>// PRIVACY PROTECTION PROTOCOL</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Direct phone number and personal email address are protected from spam bots and shared directly with verified employers upon contact.
              </p>
              <div className="pt-3 border-t border-white/5 text-xs font-mono text-slate-500">
                EMAIL DISPATCH: <span className="text-[#a855f7] font-semibold">{candidateInfo.emailPlaceholder}</span>
              </div>
            </div>

            {/* GitHub Card with Copy Button */}
            <div className="anime-card p-6 rounded-3xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-white">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    GITHUB PROFILE
                  </span>
                  <a
                    href={candidateInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-white hover:text-[#ff4b4b] transition-colors"
                  >
                    /{candidateInfo.githubUsername}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyGithub}
                aria-label="Copy GitHub URL"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/5"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="anime-card p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-base font-mono font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare size={18} className="text-[#ff4b4b]" />
                <span>// SEND DIRECT MESSAGE</span>
              </h3>

              {status.state === 'error' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-5">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'success' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-5">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                      Name <span className="text-[#ff4b4b]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Recruiter / Collaborator"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white text-xs font-mono focus:outline-hidden focus:border-[#ff4b4b] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                      Email <span className="text-[#ff4b4b]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white text-xs font-mono focus:outline-hidden focus:border-[#ff4b4b] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering Role / Technical Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white text-xs font-mono focus:outline-hidden focus:border-[#ff4b4b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                    Message <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your engineering opportunity or project..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white text-xs font-mono focus:outline-hidden focus:border-[#ff4b4b] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-[#ff4b4b] to-[#a855f7] hover:opacity-90 text-white shadow-lg shadow-[#ff4b4b]/20 transition-all cursor-pointer"
                >
                  <Send size={14} />
                  <span>[ TRANSMIT MESSAGE ]</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
