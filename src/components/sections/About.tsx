import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Cpu, Brain, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      {/* Background Orbs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About <span className="gradient-text">Yimenu Shiferaw</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Information Systems Specialist & Passionate Software Developer with a commitment to engineering high-impact digital products.
          </motion.p>
        </div>

        {/* Animated Counter Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 text-center shadow-lg hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-heading font-black gradient-text mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 2 : 0} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Personal Intro & Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary-600/10 dark:bg-primary-500/20 text-primary-600 dark:text-accent-400 flex items-center justify-center mb-6 shadow-inner">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                Education & Foundation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Bachelor of Science in <strong className="text-slate-900 dark:text-slate-200">Information Systems</strong> from the renowned <strong className="text-slate-900 dark:text-slate-200">University of Gondar</strong> (2022–2026).
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>Cumulative GPA: <strong>3.18 / 4.00</strong></span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>National Exit Examination: <strong>67%</strong></span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>Curriculum: Software Engineering, DBMS, Systems Analysis & InfoSec</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Career Objective & Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-6 shadow-inner">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                Career Objective & Status
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Currently based in <strong className="text-slate-900 dark:text-slate-200">Addis Ababa, Ethiopia</strong>. Seeking an entry-level or junior Software Engineer role to drive meaningful outcomes.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>Active Software Incubator Developer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>Available for Full-Time & Remote Positions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>Relocation & International Readiness</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Passion & Problem Solving */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-success-500/10 dark:bg-success-500/20 text-success-600 dark:text-success-400 flex items-center justify-center mb-6 shadow-inner">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                Problem Solving Mindset
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Driven by a deep passion for clean architecture, algorithmic efficiency, and building real-world software platforms like <strong className="text-slate-900 dark:text-slate-200">EthioHome</strong> and <strong className="text-slate-900 dark:text-slate-200">RAS DEJEN AI</strong>.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>AI Hackathon 1st Prize Winner & Final Project 7th Prize</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>Cross-Platform Web & Mobile Native Expert</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span>High Proficiency in Amharic & English</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
