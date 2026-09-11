import React from 'react';
import { Mail, Sparkles, Linkedin, Github } from 'lucide-react';
import { userProfileData } from '../data/portfolioData';
import { ContactForm } from './Form';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <Mail className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Get in Touch
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/30 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECRUITER OUTREACH</span>
            </div>

            <h3 className="text-xl font-bold text-on-surface">
              Let's Discuss Intern Opportunities
            </h3>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              I am actively seeking Software Engineering / SWE Intern roles for 2027-2028. Feel free to send an email, connect on LinkedIn, or drop a message here.
            </p>

            {/* Quick Links */}
            <div className="pt-2 space-y-2 font-mono text-xs">
              <a
                href={userProfileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-secondary hover:text-primary flex items-center justify-between border border-outline-variant/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-[11px] text-outline">subham-bisoyi-292b44378</span>
              </a>

              <a
                href={userProfileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-secondary hover:text-primary flex items-center justify-between border border-outline-variant/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-primary" />
                  <span>GitHub Repositories</span>
                </div>
                <span className="text-[11px] text-outline">24cse089subhambisoyi-commits</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Reusable Form Component */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};
