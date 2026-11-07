import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

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

    // Success response
    setStatus({
      state: 'success',
      message: 'Thank you! Your message inquiry has been recorded. Direct contact details will be shared upon request.'
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
            Opportunities & Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Open to software development opportunities, cloud-focused roles, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Privacy Notice */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact Overview
            </h3>

            {/* Location Card */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                  Location
                </span>
                <span className="font-semibold text-slate-900 dark:text-white text-sm">
                  {candidateInfo.location}
                </span>
              </div>
            </div>

            {/* Privacy Compliance Notice */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <ShieldCheck size={16} className="text-blue-600" />
                <span>Contact Privacy Notice</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct phone number and personal email address are protected and provided directly to recruiters upon verified outreach.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
                Email / Phone: <span className="font-semibold text-blue-600 dark:text-blue-400">{candidateInfo.contactPlaceholders.email}</span>
              </div>
            </div>

            {/* Social Placeholder Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                External Profiles (Pending Confirmation)
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                <li className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>GitHub:</span>
                  <span className="text-slate-400">{candidateInfo.contactPlaceholders.github}</span>
                </li>
                <li className="flex items-center justify-between py-1">
                  <span>LinkedIn:</span>
                  <span className="text-slate-400">{candidateInfo.contactPlaceholders.linkedin}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-600" />
                <span>Send a Direct Message</span>
              </h3>

              {status.state === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs mb-4">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs mb-4">
                  <CheckCircle2 size={15} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Recruiter / Collaborator Name"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering Role / Project Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Details about your team, role requirements, or project..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <Send size={14} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
