import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Maximize2 } from 'lucide-react';
import { galleryData } from '../../data/portfolioData';
import { GalleryItem } from '../../types';
import { LightboxModal } from '../ui/LightboxModal';

const categories = [
  { label: 'All', id: 'All' },
  { label: 'EthioHome', id: 'EthioHome' },
  { label: 'RAS DEJEN', id: 'RAS DEJEN' },
  { label: "Amharic-Ge'ez", id: "Amharic-Ge'ez" },
  { label: 'ICT Help Desk', id: 'ICT Help Desk' },
  { label: 'Certificates', id: 'Certificates' },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
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
            <Image className="w-3.5 h-3.5" />
            <span>Interactive Visual Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Project <span className="gradient-text">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Explore all actual application screenshots, UI dashboards, mobile interfaces, and official credentials.
          </motion.p>
        </div>

        {/* Category Filter Tabs with count badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat.id === 'All'
                ? galleryData.length
                : galleryData.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedItemIndex(null);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-300/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Count Summary */}
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8"
        >
          Showing <strong className="text-primary-600 dark:text-accent-400">{filteredItems.length}</strong> images
          {activeCategory !== 'All' && (
            <> in <strong className="text-slate-700 dark:text-slate-200">{activeCategory}</strong></>
          )}
        </motion.p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 12) * 0.04 }}
              onClick={() => setSelectedItemIndex(idx)}
              className="relative group rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="self-end">
                    <div className="w-9 h-9 rounded-full bg-primary-600/90 text-white flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accent-500/30 text-accent-200 border border-accent-500/30 mb-1.5 inline-block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-heading font-bold text-white line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card footer label */}
              <div className="px-4 py-3 bg-white/70 dark:bg-slate-900/70 border-t border-slate-200/60 dark:border-slate-800/60">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 truncate">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <LightboxModal
        isOpen={selectedItemIndex !== null}
        currentItem={selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null}
        onClose={() => setSelectedItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
