import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { EducationItem, ExperienceItem } from '../types';

interface EducationTimelineProps {
  items: EducationItem[];
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col bg-surface-container rounded-xl p-6 border border-outline-variant/30 shadow-md hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex flex-col gap-1 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs text-primary font-medium uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-primary" />
                {item.status}
              </span>
              <span className="font-mono text-xs text-secondary flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mt-1">{item.degree}</h3>
            <p className="text-sm text-on-surface-variant flex items-center gap-1.5">
              <span>{item.institution}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                {item.location}
              </span>
            </p>
          </div>

          <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20">
            <span className="font-mono text-xs text-secondary block mb-2 font-medium">
              KEY FOCUS & COURSEWORK
            </span>
            <div className="flex flex-wrap gap-2">
              {item.coursework.map((course, cIdx) => (
                <span
                  key={cIdx}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container text-on-surface border border-outline-variant/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
  return (
    <div className="relative pl-6 border-l-2 border-outline-variant/40 space-y-8 my-2">
      {items.map((item, idx) => (
        <div key={idx} className="relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
          
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary shrink-0" />
                  {item.role}
                </h3>
                <p className="text-sm font-mono text-primary font-medium">{item.organization}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <span className="font-mono text-xs text-secondary flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-secondary border border-outline-variant/20">
                  {item.type}
                </span>
              </div>
            </div>

            <p className="text-sm text-secondary leading-relaxed mb-4">{item.description}</p>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="space-y-1.5 pt-2 border-t border-outline-variant/20">
                {item.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-xs text-on-surface flex items-start gap-2">
                    <span className="text-primary font-mono select-none">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
