import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { userProfileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-primary font-bold">SB:/&gt;</span>
            <span className="text-sm font-bold text-on-surface">{userProfileData.name}</span>
          </div>
          <p className="text-xs text-secondary font-mono">
            3rd Year B.Tech CSE • GIET University, Gunupur, Odisha
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono text-secondary">
          <a
            href={userProfileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={userProfileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={`mailto:${userProfileData.email}`}
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary hover:text-primary border border-outline-variant/30 transition-all active:scale-95 flex items-center gap-1 text-xs font-mono"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">Top</span>
        </button>

      </div>
    </footer>
  );
};
