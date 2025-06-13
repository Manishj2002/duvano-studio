'use client';

import { motion } from 'framer-motion';

export default function TeaserGallery() {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-8">
          Teaser Gallery
        </h2>
        <p className="text-lg md:text-xl text-white-highlight max-w-2xl mx-auto">
          We're currently working hard behind the scenes to create something amazing. <br />
          Stay tuned to witness the art and animation we’ll soon showcase here.
        </p>
      </motion.div>
    </section>
  );
}
