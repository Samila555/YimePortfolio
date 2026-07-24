import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxModalProps {
  isOpen: boolean;
  currentItem: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentItem,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors border border-slate-700 shadow-xl"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          aria-label="Previous Image"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-primary-600 text-white transition-colors border border-slate-700 shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next Image"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-primary-600 text-white transition-colors border border-slate-700 shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>

          <div className="p-6 bg-slate-900 border-t border-slate-800">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/20 text-primary-400 mb-2 border border-primary-500/30">
              {currentItem.category}
            </span>
            <h3 className="text-xl font-heading font-bold text-white mb-1">
              {currentItem.title}
            </h3>
            <p className="text-slate-400 text-sm">{currentItem.description}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
