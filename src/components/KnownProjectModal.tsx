import React from 'react';
import { X, Github } from 'lucide-react';
import { Project } from '../types';

interface KnownProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const KnownProjectModal: React.FC<KnownProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-lowest/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-surface-container rounded-2xl border border-outline-variant/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-surface-container/95 backdrop-blur-md p-5 border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-bold uppercase">
              Featured GitHub Project
            </span>
            <span className="font-mono text-xs text-secondary">CSE Portfolio Spotlight</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface hover:text-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 text-on-surface">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mb-1">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-primary">{project.subtitle}</p>
          </div>

          {/* Quick Metrics Cards */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/30">
                  <span className="font-mono text-[10px] text-secondary uppercase block">{metric.label}</span>
                  <span className="text-xs font-bold text-primary block mt-0.5">{metric.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-primary font-bold uppercase tracking-wider">
              Project Overview & Features
            </h3>
            <p className="text-sm text-secondary leading-relaxed bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architecture Pipeline Snippet */}
          {project.architectureSummary && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-primary font-bold uppercase tracking-wider">
                System Architecture
              </h3>
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 font-mono text-xs leading-relaxed overflow-x-auto text-secondary">
                <p className="text-primary font-bold">[Architecture Summary]</p>
                <p className="pl-4 text-on-surface">{project.architectureSummary}</p>
              </div>
            </div>
          )}

          {/* Stack Badges */}
          <div>
            <h3 className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-md bg-surface-container-high text-xs font-mono text-primary border border-outline-variant/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub / Action Links */}
          <div className="pt-4 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dim text-on-primary font-semibold text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <span className="font-mono text-[11px] text-secondary">
              * Open Source on GitHub
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
