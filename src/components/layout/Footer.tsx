import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center text-white font-heading font-bold text-xl shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Information Systems Graduate & Junior Software Developer. Crafting high-impact cross-platform mobile & web applications, AI integrations, and intuitive UI/UX experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-primary-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-800 hover:border-primary-500 shadow-md"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-primary-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-800 hover:border-primary-500 shadow-md"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-primary-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-800 hover:border-primary-500 shadow-md"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                aria-label="Phone"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-primary-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-800 hover:border-primary-500 shadow-md"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base tracking-wide uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center space-x-1"
                  >
                    <span className="text-primary-500 mr-1">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base tracking-wide uppercase mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary-400 mt-1 shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-4 h-4 text-primary-400 font-bold shrink-0">📍</span>
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> in Ethiopia.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-primary-600 text-slate-300 hover:text-white transition-all duration-300 border border-slate-800 shadow-md group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
