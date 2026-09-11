import React, { useState } from 'react';
import { Cpu, Code2, Server, Brain, Wrench } from 'lucide-react';
import { skillsCategoriesData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsCategoriesData.map(c => c.name)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-primary" />;
      case 'Server': return <Server className="w-5 h-5 text-primary" />;
      case 'Brain': return <Brain className="w-5 h-5 text-primary" />;
      default: return <Wrench className="w-5 h-5 text-primary" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillsCategoriesData
    : skillsCategoriesData.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <Cpu className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Technical Skills
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <p className="text-secondary text-sm mb-6 max-w-2xl">
        Technical proficiencies, programming languages, and core computer science capabilities gained through B.Tech CSE coursework and project implementations.
      </p>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-on-primary font-semibold shadow-sm'
                : 'bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface border border-outline-variant/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.name}
            className="bg-surface-container rounded-xl p-5 border border-outline-variant/30 hover:border-outline-variant/60 transition-all space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/20">
              <div className="p-2 rounded-lg bg-surface-container-high border border-outline-variant/30">
                {getCategoryIcon(category.icon)}
              </div>
              <div>
                <h3 className="text-base font-bold text-on-surface">{category.name}</h3>
                <span className="text-[11px] font-mono text-secondary">{category.skills.length} Competencies</span>
              </div>
            </div>

            {/* Skill Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-lg flex flex-col justify-between transition-all ${
                    skill.isPrimary
                      ? 'bg-surface-container-high/90 border border-primary/40 shadow-sm'
                      : 'bg-surface-container-low border border-outline-variant/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${skill.isPrimary ? 'text-primary' : 'text-on-surface'}`}>
                      {skill.name}
                    </span>
                    {skill.isPrimary && (
                      <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono text-[9px] font-semibold uppercase">
                        Core
                      </span>
                    )}
                  </div>
                  {skill.note && (
                    <span className="text-[11px] font-mono text-secondary/80 mt-1">
                      {skill.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
