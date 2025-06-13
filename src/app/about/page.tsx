'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Film, Rocket } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section className="container mx-auto py-16 px-4 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6 text-center">
          About Duvano Studio
        </h1>
      </motion.div>

      <motion.div
        custom={0}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-dark-secondary/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <Lightbulb className="text-soft-red w-6 h-6" />
          <h2 className="text-2xl font-orbitron text-soft-red">Our Story</h2>
        </div>
        <p className="text-lg text-white-highlight max-w-3xl mx-auto">
          Duvano Studio was born from a group of anime enthusiasts in India who dreamed of creating original stories that resonate globally. Starting as a small passion project, we’re now building a 40–50 minute indie anime movie, blending Indian culture with anime’s vibrant storytelling.
        </p>
      </motion.div>

      <motion.div
        custom={1}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-dark-secondary/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <Film className="text-soft-red w-6 h-6" />
          <h2 className="text-2xl font-orbitron text-soft-red">Our Vision</h2>
        </div>
        <p className="text-lg text-white-highlight max-w-3xl mx-auto">
          We aim to establish India as a hub for original anime, creating stories that captivate audiences worldwide while staying true to our indie roots. Duvano Studio is a space for creatives to push boundaries and redefine storytelling.
        </p>
      </motion.div>

      <motion.div
        custom={2}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-dark-secondary/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <Rocket className="text-soft-red w-6 h-6" />
          <h2 className="text-2xl font-orbitron text-soft-red">Our Future</h2>
        </div>
        <p className="text-lg text-white-highlight max-w-3xl mx-auto">
          Our immediate goal is to complete our debut anime movie. We’re expanding our team, seeking funding, and planning to release commercially. Join us to be part of this exciting journey!
        </p>
      </motion.div>
    </section>
  );
}
