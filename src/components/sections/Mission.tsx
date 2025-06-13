'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-white-highlight max-w-2xl mx-auto leading-relaxed">
          We are a collective of dreamers—independent artists, animators, and storytellers—united by a single vision: to create original Indian anime that resonates with the world. Our mission is to spark a new wave of storytelling from India, driven by passion, creativity, and heart.
        </p>
      </motion.div>
    </section>
  );
}
