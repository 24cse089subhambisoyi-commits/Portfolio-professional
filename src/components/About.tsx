import React from 'react';
import { User, GraduationCap, MapPin, Target, Code2, CheckCircle2 } from 'lucide-react';
import { userProfileData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-8">
        <User className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          About Me
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Biography Paragraphs */}
        <div className="lg:col-span-7 space-y-4 text-secondary text-sm sm:text-base leading-relaxed">
          {userProfileData.bio.map((paragraph, idx) => (
            <p key={idx} className="bg-surface-container/40 p-4 rounded-xl border border-outline-variant/20">
              {paragraph}
            </p>
          ))}

          {/* Quick Focus Highlights */}
          <div className="pt-2">
            <h3 className="text-xs font-mono text-primary font-semibold uppercase tracking-wider mb-3">
              Engineering Mindset & Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Data Structures & Logic</h4>
                  <p className="text-[12px] text-secondary">Solid foundation in array algorithms, hashing, and trees implemented in Python.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Backend Architecture</h4>
                  <p className="text-[12px] text-secondary">RESTful API controller design, object-oriented Java, and Spring Boot entities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Snapshot Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 self-start">
          
          <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-primary uppercase block">Academic Status</span>
              <span className="text-base font-bold text-on-surface block">3rd Year CSE</span>
              <span className="text-xs text-secondary">GIET University</span>
            </div>
          </div>

          <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-primary uppercase block">Role Goal</span>
              <span className="text-base font-bold text-on-surface block">SWE Intern</span>
              <span className="text-xs text-secondary">Software Engineering</span>
            </div>
          </div>

          <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-primary uppercase block">Core Tech</span>
              <span className="text-base font-bold text-on-surface block">Python & Java</span>
              <span className="text-xs text-secondary">Spring Boot & SQL</span>
            </div>
          </div>

          <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-primary uppercase block">Location</span>
              <span className="text-base font-bold text-on-surface block">Gunupur, Odisha</span>
              <span className="text-xs text-secondary">Open to Remote / On-site</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
