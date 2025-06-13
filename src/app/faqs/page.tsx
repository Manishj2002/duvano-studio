'use client';

import { motion } from 'framer-motion';
import { faqs, FAQ } from '../../constants/faq';
import Accordion from '../../components/ui/Accordion';

export default function FAQs() {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-white-highlight max-w-3xl mx-auto text-center mb-8">
          Got questions about joining Duvano Studio? We’ve got answers.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq: FAQ) => (
            <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
