'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { mediaItems, } from '../../constants/mediaItems';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6 text-center">
          Art Showcase
        </h1>
        <p className="text-lg text-white-highlight max-w-3xl mx-auto text-center mb-8">
          This is our team’s work — as we continue developing our project, we’ll keep adding more videos and images here.  
Follow us on <span className="text-soft-red font-semibold">YouTube</span> and{' '}
<span className="text-soft-red font-semibold">Instagram</span> to stay updated, support our artists,  
and join us on this exciting anime journey!
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'image', 'video'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as 'all' | 'image' | 'video')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === type
                  ? 'bg-soft-red text-white'
                  : 'bg-dark-secondary text-white-highlight hover:bg-dark-primary'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaItems
            .filter((item) => filter === 'all' || item.type === filter)
            .map((item, index) => (
              <motion.div
                key={index}
                className="bg-dark-secondary rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    className="w-full h-60 object-cover"
                  />
                ) : (
                  <video
                    controls
                    src={item.src}
                    className="w-full h-60 object-cover"
                  />
                )}
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}