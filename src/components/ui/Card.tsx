import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export default function Card({ name, role, avatar, description }: CardProps) {
  return (
    <motion.div
      className="bg-dark-secondary rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={avatar}
        alt={name}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-poppins text-white-highlight">{name}</h3>
        <p className="text-sm text-neon-blue">{role}</p>
        <p className="text-sm text-white-highlight mt-2">{description}</p>
      </div>
    </motion.div>
  );
}