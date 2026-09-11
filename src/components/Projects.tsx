import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, ArrowRight, ShieldCheck, ChevronRight, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { KnownProjectModal } from './KnownProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const knownProject = projectsData.find(p => p.isKnownProject);
  const otherProjects = projectsData.filter(p => !p.isKnownProject);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-4">
        <FolderGit2 className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Featured Projects
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <p className="text-secondary text-sm mb-8 max-w-2xl">
        Software projects built to solve practical data engineering, backend micro-service, and analytical problems.
      </p>

      {/* FEATURED SPOTLIGHT: Vendor Performance Analysis */}
      {knownProject && (
        <div className="mb-12 bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container rounded-2xl border-2 border-primary/40 p-6 sm:p-8 shadow-xl relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-32 h-32 text-primary" />
          </div>

          <div className="relative z-10 space-y-5">
            
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40 font-mono text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>PRIMARY FEATURED PROJECT</span>
              </div>
              <span className="font-mono text-xs text-secondary">Data Analytics & Metrics System</span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-on-surface group-hover:text-primary transition-colors">
                {knownProject.title}
              </h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {knownProject.description}
              </p>
            </div>

            {/* Architecture Callout Box */}
            <div className="bg-surface-container-lowest/80 p-4 rounded-xl border border-outline-variant/30 max-w-3xl">
              <div className="flex items-center gap-2 mb-1 text-xs font-mono text-primary font-bold">
                <Layers className="w-4 h-4" />
                <span>Technical Architecture & Methodology</span>
              </div>
              <p className="text-xs text-secondary leading-normal">
                {knownProject.architectureSummary}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {knownProject.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-md bg-surface-container-lowest text-xs font-mono text-primary border border-outline-variant/40">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Triggers */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedProject(knownProject)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dim text-on-primary font-semibold text-xs transition-all active:scale-95 shadow-md"
              >
                <span>Deep Dive Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {knownProject.githubUrl && (
                <a
                  href={knownProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium border border-outline-variant/40 transition-colors"
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

          </div>

        </div>
      )}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="bg-surface-container rounded-xl border border-outline-variant/30 hover:border-outline-variant/60 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
          >
            {/* Card Content */}
            <div className="p-5 space-y-4">
              
              <div className="flex items-center justify-between text-xs font-mono text-primary">
                <span>{project.category}</span>
                {project.githubUrl && (
                  <span className="text-secondary/70">Source Available</span>
                )}
              </div>

              <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-secondary">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Card Footer Actions */}
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/20 flex items-center justify-between text-xs font-mono">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-outline">Academic Code</span>
              )}

              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1 text-secondary hover:text-on-surface font-medium"
              >
                <span>Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Known Project Modal View */}
      {selectedProject && (
        <KnownProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
};
