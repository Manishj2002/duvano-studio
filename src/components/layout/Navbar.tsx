'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navItems = ['Home', 'About', 'Team', 'Gallery', 'FAQs', 'Join', 'Contact'];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-dark-secondary/80 backdrop-blur-md p-4 sticky top-0 z-50 shadow-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-orbitron text-white hover:text-neon-blue transition-colors duration-300"
        >
          Duvano Studio
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-neon-blue rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex md:space-x-6">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = pathname === path;

            return (
              <li key={item}>
                <Link
                  href={path}
                  className={`text-white hover:text-neon-blue transition-colors duration-300 ${
                    isActive ? 'text-neon-blue font-bold border-b-2 border-neon-blue pb-1' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile menu (animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-secondary/90 backdrop-blur-md mt-4 px-4 py-2 space-y-2 rounded shadow-md"
          >
            {navItems.map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = pathname === path;

              return (
                <li key={item}>
                  <Link
                    href={path}
                    className={`block text-white hover:text-neon-blue transition-colors duration-300 ${
                      isActive ? 'text-neon-blue font-bold border-b border-neon-blue' : ''
                    }`}
                    onClick={() => setIsOpen(false)} // Close on click
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
