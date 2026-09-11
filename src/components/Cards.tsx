import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Project, SkillCategory, CertificationItem } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article className="flex flex-col bg-surface-container rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 shadow-lg group">
      {/* Visual Banner Preview */}
      <div className="relative w-full h-48 bg-surface-container-lowest flex flex-col justify-end p-4 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/50 to-surface-container-lowest" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent" />
        
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-mono text-xs text-primary px-2 py-0.5 rounded bg-surface-container-lowest/90 border border-primary/20 backdrop-blur-sm">
            {project.subtitle}
          </span>
          <span className="font-mono text-xs text-secondary bg-surface-container-lowest/80 px-2 py-0.5 rounded backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col p-6 flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Architecture summary note */}
          {project.architectureSummary && (
            <div className="bg-surface-container-low rounded-lg p-3 mb-4 border border-outline-variant/20">
              <div className="flex items-center gap-1.5 mb-1">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-primary font-medium">Architecture & Latency</span>
              </div>
              <p className="text-xs text-on-surface leading-normal">
                {project.architectureSummary}
              </p>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-fixed transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-on-surface hover:text-primary transition-colors"
              >
                <span>Live Demo</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            )}
          </div>

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(project)}
              className="text-xs font-mono text-secondary hover:text-primary transition-colors underline underline-offset-2"
            >
              Details
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-on-surface text-base">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className={`font-mono text-xs px-2.5 py-1 rounded transition-colors ${
              skill.isPrimary
                ? 'bg-surface-container-high text-primary font-medium border border-primary/20 shadow-sm'
                : 'bg-surface-container-low text-secondary border border-outline-variant/20'
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

interface CertificationCardProps {
  certification: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="flex items-start gap-4 bg-surface-container p-5 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 shadow-md">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant/40">
        <ShieldCheck className="w-5 h-5 text-primary" />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-on-surface text-sm sm:text-base truncate">
            {certification.title}
          </h3>
          <span className="font-mono text-xs text-secondary shrink-0 bg-surface-container-high px-2 py-0.5 rounded">
            {certification.status}
          </span>
        </div>
        <p className="text-xs font-mono text-primary mt-0.5">{certification.issuer}</p>
        <p className="text-xs text-secondary mt-1 leading-relaxed">
          {certification.description}
        </p>
      </div>
    </div>
  );
};
