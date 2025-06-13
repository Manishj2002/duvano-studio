'use client';

import { motion } from 'framer-motion';
import { teamGroups } from '../../constants/teamGroups';
import Card from '../../components/ui/Card';

export default function Team() {
  return (
    <section className="container mx-auto py-16 px-4 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6 text-center">
          Our Team
        </h1>
        <p className="text-lg text-white-highlight max-w-3xl mx-auto text-center">
          Meet the passionate individuals bringing Duvano Studio’s vision to life.
        </p>
      </motion.div>

      {teamGroups.map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-orbitron text-soft-red mb-6">
            {group.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {group.members.map((member) => (
              <Card
                key={member.id}
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                description={member.description}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
