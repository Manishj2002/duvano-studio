'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.1, boxShadow: '0 0 15px rgba(0, 183, 235, 0.5)' },
  tap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark-bg">
      {/* Desktop/Tablet Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover opacity-50"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      >
        <source src="/videos/hero-teaser.mp4" type="video/mp4" />
      </motion.video>

      {/* Mobile Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover opacity-50"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      >
        <source src="/videos/hero-teaser2.mp4" type="video/mp4" />
      </motion.video>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-orbitron text-white-highlight mb-4 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          India’s First Indie Anime Studio
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-neon-blue mb-8 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          Join the team building a 40–50 minute anime movie.
        </motion.p>
        <Link href="/join">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            className="px-8 py-4 bg-soft-red text-white-highlight rounded-full font-poppins text-lg font-semibold hover:bg-neon-blue transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-bg"
            aria-label="Join the Duvano Studio team"
          >
            Join the Team
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
