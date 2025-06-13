'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  item: { type: 'image' | 'video'; src: string; alt?: string; artist: string } | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, item, onClose }: LightboxProps) {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-dark-bg bg-opacity-90 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.alt || 'Gallery item'}
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto object-contain rounded-lg"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )}
          <p className="text-white-highlight text-center mt-4">
            Art by: {item.artist}
          </p>
          <button
            className="absolute top-2 right-2 text-white-highlight bg-dark-secondary rounded-full p-2"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}