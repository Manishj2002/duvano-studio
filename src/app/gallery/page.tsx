'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
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
        <p className="text-lg text-white-highlight max-w-3xl mx-auto text-center">
          We're thrilled to announce that Duvano Studio has officially begun its creative journey!
          Our team is actively working on our first indie anime project, and soon you'll see behind-the-scenes art,
          animation previews, and character concepts right here.
          <br /><br />
          Follow us on <span className="text-soft-red font-semibold">YouTube</span> and <span className="text-soft-red font-semibold">Instagram</span> to stay updated, support our artists,
          and be part of this exciting adventure. Let's bring Indian anime to life—together!
        </p>
      </motion.div>
    </section>
  );
}
