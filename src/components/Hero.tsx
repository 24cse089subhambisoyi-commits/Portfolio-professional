import React, { useState } from 'react';
import { ArrowDown, Copy, Check, FileText, Github, Linkedin, Terminal, ShieldCheck } from 'lucide-react';
import { userProfileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userProfileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Recruiter Pitch & Main CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs text-primary font-medium tracking-wide">
              3rd Year CSE @ GIET University • Gunupur, Odisha
            </span>
          </div>

          {/* Core Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight">
              Hi, I'm <span className="text-primary hover:underline decoration-primary/40 transition-all">{userProfileData.name}</span>
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-medium leading-relaxed">
              Targeting <span className="text-primary font-semibold">Software Engineering Intern / SWE Intern</span> Roles
            </p>
          </div>

          {/* Recruiter Summary Paragraph */}
          <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
            Computer Science undergraduate focused on core computer science foundations, data structures, and algorithms in <strong className="text-on-surface font-semibold">Python</strong> & <strong className="text-on-surface font-semibold">Java</strong>. Building modular backend services with <strong className="text-on-surface font-semibold">Spring Boot</strong> and data-driven web tools.
          </p>

          {/* Highlights Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-xs font-mono text-primary border border-outline-variant/30">
              ⚡ Python & Java DSA
            </span>
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-xs font-mono text-primary border border-outline-variant/30">
              🛠️ Spring Boot & REST APIs
            </span>
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-xs font-mono text-secondary border border-outline-variant/30">
              📊 Data Analytics (Pandas/SQL)
            </span>
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-xs font-mono text-secondary border border-outline-variant/30">
              🤖 Applied AI Tools
            </span>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary hover:bg-primary-dim text-on-primary font-semibold text-sm shadow-md hover:shadow-primary/20 transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm border border-outline-variant/40 hover:border-primary/50 transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>View Resume</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-mono text-xs border border-outline-variant/30 transition-all active:scale-95"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 pt-2 text-secondary text-xs font-mono">
            <span>Connect:</span>
            <a
              href={userProfileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-outline-variant">•</span>
            <a
              href={userProfileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

        {/* Right Column: Visual Terminal Preview */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-2xl">
            
            {/* Terminal Header */}
            <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-secondary">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>candidate_profile.py</span>
              </div>
              <span className="font-mono text-[10px] text-primary/70 uppercase">Python 3.11</span>
            </div>

            {/* Terminal Body Code */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-secondary">
              <p className="text-outline/70 mb-2"># Candidate Profile Schema</p>
              <p><span className="text-primary">class</span> <span className="text-on-surface font-bold">SWEInternCandidate</span>:</p>
              <div className="pl-4 border-l border-outline-variant/20 space-y-1 py-1">
                <p><span className="text-primary">name</span> = <span className="text-emerald-300">"{userProfileData.name}"</span></p>
                <p><span className="text-primary">degree</span> = <span className="text-emerald-300">"B.Tech Computer Science & Eng."</span></p>
                <p><span className="text-primary">institution</span> = <span className="text-emerald-300">"GIET University, Gunupur"</span></p>
                <p><span className="text-primary">target_roles</span> = [<span className="text-emerald-300">"SWE Intern"</span>, <span className="text-emerald-300">"Backend Intern"</span>]</p>
                <p><span className="text-primary">primary_stack</span> = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"SQL"</span>]</p>
                <p><span className="text-primary">known_project</span> = <span className="text-emerald-300">"Task Management Tracker"</span></p>
                <p><span className="text-primary">status</span> = <span className="text-primary font-bold">"Open for Internships (2027-2028)"</span></p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Authentic Data Verified
                </span>
                <span className="text-outline font-mono text-[11px]">GIET CSE Undergrad</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
