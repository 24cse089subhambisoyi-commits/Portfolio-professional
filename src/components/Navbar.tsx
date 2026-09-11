import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail, Code } from 'lucide-react';
import { userProfileData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'experience', 'certifications', 'resume', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 border-b border-outline-variant/30 shadow-lg' : 'bg-surface/80 py-4 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg p-1">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/40 group-hover:border-primary/60 transition-colors">
            <span className="font-mono text-primary font-bold text-sm tracking-tight">SB:/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-on-surface text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
              {userProfileData.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono text-[11px] text-primary/90">3rd Year CSE @ GIET</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/80 p-1.5 rounded-full border border-outline-variant/30">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-on-primary font-semibold shadow-sm'
                    : 'text-secondary hover:text-on-surface hover:bg-surface-container-high/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-medium border border-outline-variant/40 hover:border-primary/50 transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>Resume</span>
          </button>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-primary-dim text-on-primary text-xs font-semibold shadow-sm hover:shadow-primary/20 transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Intern</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low/95 border-b border-outline-variant/40 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
            <span className="font-mono text-xs text-primary font-semibold">NAVIGATION</span>
            <span className="text-[11px] font-mono text-secondary">SWE Intern Candidate</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-surface-container/60 hover:bg-surface-container text-on-surface text-sm font-medium transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Code className="w-3.5 h-3.5 text-secondary" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-medium flex items-center justify-center gap-1.5 border border-outline-variant/40"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
