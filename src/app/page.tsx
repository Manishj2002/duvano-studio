'use client';

import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Mission from '../components/sections/Mission';
import TeaserGallery from '../components/sections/TeaserGallery';
import TeamPreview from '../components/sections/TeamPreview';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.main
      className="space-y-16 overflow-x-hidden bg-gradient-to-b from-dark-bg to-dark-secondary/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="main"
      aria-label="Duvano Studio Home Page"
    >
      <Hero />
      <Mission />
      <TeaserGallery />
      <TeamPreview />
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          href="/join"
          className="px-6 py-3 bg-neon-blue text-dark-bg rounded-full font-poppins font-semibold hover:bg-soft-red transition-colors duration-300 shadow-lg hover:shadow-neon-blue/50"
          aria-label="Join the Duvano Studio team"
        >
          Join the Mission
        </Link>
      </motion.div>
    </motion.main>
  );
}