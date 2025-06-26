'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-white-highlight mb-8">
          Have questions or want to connect? Reach out to us via email, Discord, or follow our social media for updates!
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-poppins text-soft-red mb-2">Email</h2>
            <a
              href="mailto:duvanostudio@gmail.com"
              className="text-white-highlight hover:text-neon-blue transition"
            >
              duvanostudio@gmail.com
            </a>
          </div>
          <div>
            <h2 className="text-xl font-poppins text-soft-red mb-2">Discord</h2>
            <Link
              href="https://discord.gg/FvdSrF6W"
              className="text-white-highlight hover:text-neon-blue transition"
            >
              Join our Discord community
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-poppins text-soft-red mb-2">Social Media</h2>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.instagram.com/duvanostudios/"
                className="text-neon-blue hover:text-soft-red transition"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.423.064-2.694.349-3.714 1.369-1.02 1.02-1.305 2.291-1.369 3.714-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.064 1.423.349 2.694 1.369 3.714 1.02 1.02 2.291 1.305 3.714 1.369 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.423-.064 2.694-.349 3.714-1.369 1.02-1.02 1.305-2.291 1.369-3.714.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.064-1.423-.349-2.694-1.369-3.714-1.02-1.02-2.291-1.305-3.714-1.369-1.28-.058-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@DuvanoStudio"
                className="text-neon-blue hover:text-soft-red transition"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.231 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.231 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}