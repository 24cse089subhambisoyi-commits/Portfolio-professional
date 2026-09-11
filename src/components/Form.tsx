import React, { useState } from 'react';
import { Mail, Copy, Check, Send, User, MessageSquare } from 'lucide-react';
import { userProfileData } from '../data/portfolioData';

export const ContactForm: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userProfileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-surface-container rounded-xl p-6 sm:p-8 border border-outline-variant/30 shadow-xl">
      {/* Quick Direct Email Pill */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 mb-8">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/30">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <span className="font-mono text-xs sm:text-sm text-on-surface font-medium select-all truncate">
            {userProfileData.email}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-mono text-xs font-medium rounded-lg border border-outline-variant/30 active:scale-95 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-secondary" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          
          <a
            href={`mailto:${userProfileData.email}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dim text-on-primary font-mono text-xs font-semibold rounded-lg active:scale-95 transition-all shadow-sm"
          >
            <span>Mail</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Interactive Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-bold text-on-surface text-lg mb-2">Send a Direct Message</h3>

        {submitted ? (
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary font-mono text-xs text-center animate-in fade-in duration-300">
            ✓ Message sent! Thank you for reaching out to Subham.
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-xs text-secondary mb-1.5">Your Name</label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 pl-10 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/40"
              />
              <User className="w-4 h-4 text-secondary absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs text-secondary mb-1.5">Your Email</label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 pl-10 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/40"
              />
              <Mail className="w-4 h-4 text-secondary absolute left-3 top-3" />
            </div>
          </div>
        </div>

        <div>
          <label className="block font-mono text-xs text-secondary mb-1.5">Subject</label>
          <input
            type="text"
            placeholder="SWE Internship Opportunity / Inquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/40"
          />
        </div>

        <div>
          <label className="block font-mono text-xs text-secondary mb-1.5">Message</label>
          <div className="relative">
            <textarea
              required
              rows={4}
              placeholder="Hi Subham, we saw your portfolio and would like to discuss..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 pl-10 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/40"
            />
            <MessageSquare className="w-4 h-4 text-secondary absolute left-3 top-3" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary hover:bg-primary-dim text-on-primary font-mono text-sm font-semibold rounded-lg shadow-md hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};
