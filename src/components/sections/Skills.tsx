import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, Users, Sparkles } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import { Skill } from '../../types';
import { FaJava, FaCode } from 'react-icons/fa6';
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiReact,
  SiExpo,
  SiFlutter,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const categoryTabs = [
  { id: 'all', label: 'All Skills', icon: Sparkles },
  { id: 'programming', label: 'Languages', icon: Code },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Databases', icon: Database },
  { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  { id: 'soft', label: 'Soft Skills', icon: Users },
];

const iconMap: Record<string, React.ElementType> = {
  Java: FaJava,
  Python: SiPython,
  'JavaScript (ES6+)': SiJavascript,
  'PHP (OOP)': SiPhp,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'React.js': SiReact,
  'React Native': SiReact,
  Expo: SiExpo,
  Flutter: SiFlutter,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap 5': SiBootstrap,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': VscVscode,
  Figma: SiFigma,
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <Code className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Skills & <span className="gradient-text">Proficiencies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            A comprehensive overview of my programming languages, frameworks, backend architectures, databases, tools, and interpersonal capabilities.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.name];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-primary-600 dark:text-accent-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {IconComponent ? <IconComponent /> : <Code className="w-5 h-5" />}
                    </div>
                    <span className="font-heading font-semibold text-slate-900 dark:text-white text-base">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary-600 dark:text-accent-400 bg-primary-500/10 px-2.5 py-1 rounded-full border border-primary-500/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.05 }}
                    className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
