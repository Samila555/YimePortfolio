import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Rocket, GraduationCap, Code } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

const typeIcons: Record<string, React.ElementType> = {
  incubation: Rocket,
  hackathon: Award,
  freelance: Code,
  education: GraduationCap,
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/50">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-primary-500/30 text-primary-600 dark:text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academic Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Professional <span className="gradient-text">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            My hands-on experience spanning university incubation software development, competitive AI hackathons, and degree milestones.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-500 to-slate-700 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-500 to-slate-700 -translate-x-1/2 sm:hidden" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const Icon = typeIcons[item.type] || Briefcase;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-500 text-white flex items-center justify-center shadow-lg shadow-primary-600/30 z-20 hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300">
                      
                      {/* Period Badge */}
                      <div className={`flex items-center space-x-2 text-xs font-semibold text-primary-600 dark:text-accent-400 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>

                      <div className={`flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-4 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span>{item.organization}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
                        {item.description.map((point, i) => (
                          <li key={i} className={`flex items-start ${isEven ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                            <span className="text-primary-500 font-bold px-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Badges */}
                      {item.technologies && (
                        <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? 'sm:justify-end' : ''}`}>
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs rounded-full bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/50 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
