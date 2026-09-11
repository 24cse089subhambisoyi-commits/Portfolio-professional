import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, AlertCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Education
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-surface-container rounded-2xl p-6 border border-outline-variant/30 hover:border-outline-variant/60 transition-all space-y-5"
          >
            {/* Degree Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
              <div>
                <span className="px-2.5 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-bold uppercase">
                  {edu.status}
                </span>
                <h3 className="text-xl font-bold text-on-surface mt-2">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-4 text-xs text-secondary mt-1 font-medium">
                  <span className="text-on-surface font-semibold">{edu.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-secondary bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/30 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Coursework Tags */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Core CSE Coursework & Curriculum</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg bg-surface-container-high text-xs font-mono text-on-surface border border-outline-variant/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* CGPA Placeholder Notice */}
            {edu.cgpaPlaceholder && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 text-xs text-secondary">
                <AlertCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="font-mono text-[11px]">
                  Academic Performance Note: {edu.cgpaPlaceholder}
                </span>
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
};
