import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download, Briefcase, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger festive celebratory confetti effect!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const triggerHireMeConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
    window.location.href = `mailto:${personalInfo.email}?subject=Job%20Opportunity%20-%20Hiring%20Yimenu%20Shiferaw`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/50">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Let's Build Something <span className="gradient-text">Great Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Whether you have a job offer, project idea, freelance opportunity, or just want to connect, feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-primary-500/50 transition-all duration-300 flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600/10 text-primary-600 dark:text-accent-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Email Address</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-primary-500/50 transition-all duration-300 flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Phone Number</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-success-500/10 text-success-600 dark:text-success-400 flex items-center justify-center text-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Primary Location</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl glass-card border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:text-primary-600 dark:hover:text-accent-400 font-medium text-sm flex items-center justify-center space-x-2 transition-all hover:scale-102"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl glass-card border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:text-primary-600 dark:hover:text-accent-400 font-medium text-sm flex items-center justify-center space-x-2 transition-all hover:scale-102"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Action Buttons: Hire Me & Download CV */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={triggerHireMeConfetti}
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-primary-600/30 transition-all hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Me</span>
              </button>

              <a
                href={personalInfo.cvPath}
                download="Yimenu_Shiferaw_CV.pdf"
                className="flex-1 py-3.5 px-6 rounded-xl glass-card border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-sm flex items-center justify-center space-x-2 hover:border-primary-500 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 h-52">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0202888206!2d38.61332805!3d8.9806034!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-2xl">
              
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-success-500/20 text-success-600 dark:text-success-400 border border-success-500/30 flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Position Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 hover:from-primary-700 hover:to-accent-700 text-white font-bold text-base flex items-center justify-center space-x-2 shadow-xl shadow-primary-600/30 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Sending Message...' : 'Send Email'}</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
