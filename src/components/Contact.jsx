import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
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
      message: 'Thank you! Your inquiry has been received. Direct contact details will be shared upon response.'
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail size={13} />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Open to software engineering roles, cloud opportunities, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Privacy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Timezone Card */}
            <div className="bento-card p-6 rounded-3xl flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Location & Timezone
                </span>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {candidateInfo.location}
                </h4>
                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
                  {candidateInfo.timezone} • Open to Remote & Relocation
                </p>
              </div>
            </div>

            {/* Privacy Compliance Card */}
            <div className="bento-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Contact Privacy Standard</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct phone number and personal email address are protected from spam scrapers and provided directly to recruiters upon verified outreach.
              </p>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
                Direct Email: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{candidateInfo.emailPlaceholder}</span>
              </div>
            </div>

            {/* GitHub Card with Copy Button */}
            <div className="bento-card p-6 rounded-3xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    GitHub Profile
                  </span>
                  <a
                    href={candidateInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {candidateInfo.githubUsername}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyGithub}
                aria-label="Copy GitHub URL"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare size={19} className="text-indigo-600" />
                <span>Send a Direct Message</span>
              </h3>

              {status.state === 'error' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs mb-5">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'success' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs mb-5">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering Role / Project Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, role requirements, or project..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
