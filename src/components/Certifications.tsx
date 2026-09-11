import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Certifications & Achievements
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className="bg-surface-container rounded-xl p-5 border border-outline-variant/30 hover:border-outline-variant/60 transition-all flex flex-col justify-between space-y-4 shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-surface-container-high text-primary border border-outline-variant/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded bg-primary/20 text-primary font-mono text-[10px] font-bold uppercase">
                  {cert.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-on-surface leading-snug">
                {cert.title}
              </h3>

              <span className="text-xs font-mono text-primary block">
                {cert.issuer}
              </span>

              <p className="text-xs text-secondary leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-secondary">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified Milestone
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
