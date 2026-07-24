import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, CheckCircle, GraduationCap } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Award: Award,
  Code: Code,
  CheckCircle: CheckCircle,
  GraduationCap: GraduationCap,
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Verified <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Official achievements, academic degree credentials, and accredited professional development certificates.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificationsData.map((cert, idx) => {
            const Icon = (cert.icon && iconMap[cert.icon]) || Award;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-primary-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Preview */}
                  {cert.image && (
                    <div className="relative h-48 sm:h-52 mb-6 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 p-2 border border-slate-200/70 dark:border-slate-800 shadow-inner flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer Subtext */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {cert.issuer}
                  </p>

                  {/* Extra Stats if present (e.g. CGPA & Exit Exam) */}
                  {cert.description && cert.description.includes('CGPA') && (
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 space-y-1 mb-3 bg-slate-200/50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-300/40 dark:border-slate-700/40">
                      <p>CGPA: <strong>3.18/4.00</strong></p>
                      <p>National Exit Exam: <strong>67%</strong></p>
                    </div>
                  )}
                </div>

                {/* Bottom Highlight / Issue Date */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 mt-2">
                  <span className="text-sm font-bold text-accent-500 dark:text-accent-400 flex items-center space-x-1.5">
                    <Icon className="w-4 h-4 text-primary-500" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
