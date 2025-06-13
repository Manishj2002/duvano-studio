'use client';

import { motion } from 'framer-motion';
import { teamMembers, TeamMember } from '../../constants/team';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamPreview() {
  const previewMembers = teamMembers.slice(0, 8); // show only the first 8

  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-8 text-center">
          Meet the Team
        </h2>
        <p className="text-lg text-white-highlight text-center mb-8">
          Built by fans, for fans.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewMembers.map((member: TeamMember) => (
            <motion.div
              key={member.id}
              className="bg-dark-secondary rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-poppins text-white-highlight">
                  {member.name}
                </h3>
                <p className="text-sm text-neon-blue">{member.role}</p>
                <p className="text-sm text-white-highlight mt-2">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/team">
            <button className="bg-soft-red text-white-highlight px-6 py-3 rounded-lg font-poppins hover:bg-neon-blue transition">
              See Full Team
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
