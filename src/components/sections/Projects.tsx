import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'mobile' | 'ai' | 'web'>('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((proj) => proj.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-primary-500/30 text-primary-600 dark:text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Real-world full-stack platforms, mobile cross-platform systems, and AI-driven solutions built with production best practices.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full-Stack' },
            { id: 'ai', label: 'AI & Smart Mobility' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'web', label: 'Web Applications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-600/90 text-white text-xs font-semibold backdrop-blur-md shadow-md">
                  {project.subtitle}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium border border-slate-300/40 dark:border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-primary-600 text-white font-medium text-sm flex items-center justify-center space-x-2 transition-all duration-200 shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-medium text-sm flex items-center justify-center space-x-2 transition-all duration-200 shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
