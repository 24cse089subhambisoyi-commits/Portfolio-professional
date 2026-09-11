import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Experience & Internship
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <div className="relative border-l border-outline-variant/30 ml-4 space-y-8 pl-6 sm:pl-8">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="relative group">
            
            {/* Timeline Dot */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 ${
              exp.isPlaceholder
                ? 'bg-surface border-primary animate-pulse'
                : 'bg-primary border-surface'
            }`}></div>

            <div className={`rounded-xl p-5 border transition-all ${
              exp.isPlaceholder
                ? 'bg-surface-container-low/60 border-dashed border-primary/40'
                : 'bg-surface-container border-outline-variant/30 hover:border-outline-variant/60'
            }`}>
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-on-surface">
                      {exp.role}
                    </h3>
                    {exp.isPlaceholder && (
                      <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-mono text-[10px] font-bold">
                        OPEN FOR HIRING
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-secondary mt-1 font-mono">
                    <span className="text-primary font-semibold">{exp.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-outline" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-secondary bg-surface-container-high px-3 py-1 rounded-md self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
