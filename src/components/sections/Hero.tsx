import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { ParticleBackground } from '../ui/ParticleBackground';
import { SiReact, SiNodedotjs, SiPython, SiPostgresql, SiTailwindcss, SiExpo } from 'react-icons/si';

const floatingIcons = [
  { icon: SiReact, color: '#61DAFB', position: 'top-10 left-6 sm:left-12' },
  { icon: SiNodedotjs, color: '#339933', position: 'top-20 right-8 sm:right-16' },
  { icon: SiPython, color: '#3776AB', position: 'bottom-20 left-10 sm:left-20' },
  { icon: SiPostgresql, color: '#4169E1', position: 'bottom-16 right-10 sm:right-24' },
  { icon: SiTailwindcss, color: '#06B6D4', position: 'top-1/2 left-2 sm:left-6' },
  { icon: SiExpo, color: '#000000', position: 'top-1/2 right-2 sm:right-6' },
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = personalInfo.titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Particle & Gradient blobs background */}
      <ParticleBackground />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Floating Technology Icons */}
      <div className="hidden md:block">
        {floatingIcons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.5,
              }}
              className={`absolute ${item.position} p-3.5 rounded-2xl glass-card shadow-xl border border-white/20 dark:border-white/10 z-10`}
            >
              <Icon className="w-7 h-7" style={{ color: item.color }} />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-primary-500/30 text-primary-600 dark:text-accent-400 text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-accent-500 animate-spin-slow" />
              <span>Open for Software Developer Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typing Title */}
            <div className="text-xl sm:text-2xl font-heading font-semibold text-slate-700 dark:text-slate-300 min-h-[40px] flex items-center justify-center lg:justify-start">
              <span>{displayText}</span>
              <span className="w-0.5 h-6 bg-primary-600 dark:bg-accent-400 ml-1 animate-pulse" />
            </div>

            {/* Introduction */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Key Quick Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center space-x-1.5 bg-slate-200/60 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
                <CheckCircle2 className="w-4 h-4 text-success-500" />
                <span>BSc IS (University of Gondar)</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-slate-200/60 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
                <CheckCircle2 className="w-4 h-4 text-success-500" />
                <span>CGPA: 3.18 / 4.00</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-slate-200/60 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
                <CheckCircle2 className="w-4 h-4 text-success-500" />
                <span>Exit Exam: 67%</span>
              </span>
            </div>

            {/* CTAs & Social Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Resume Download */}
              <a
                href={personalInfo.cvPath}
                download="Yimenu_Shiferaw_CV.pdf"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold flex items-center space-x-2 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-card text-slate-800 dark:text-white hover:text-primary-600 dark:hover:text-accent-400 font-semibold flex items-center space-x-2 border border-slate-300 dark:border-slate-700 hover:border-primary-500 transition-all duration-200 shadow-sm"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-400 border border-slate-300/60 dark:border-slate-700/60 hover:scale-105 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-400 border border-slate-300/60 dark:border-slate-700/60 hover:scale-105 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Me"
                  className="p-3.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-400 border border-slate-300/60 dark:border-slate-700/60 hover:scale-105 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Profile Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Animated Glow aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 via-accent-500 to-success-500 rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />

              {/* Profile Card Frame */}
              <div className="relative p-3 rounded-3xl glass-card border border-white/40 dark:border-white/10 shadow-2xl overflow-hidden max-w-sm sm:max-w-md">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-auto rounded-2xl object-cover shadow-inner hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-white/30 dark:border-white/10 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Specialization</p>
                    <p className="text-sm font-heading font-bold text-slate-900 dark:text-white">Full-Stack & Mobile Dev</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-success-500 animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
