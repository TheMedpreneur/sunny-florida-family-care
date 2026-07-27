import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiChevronDown } from 'react-icons/fi';

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-espresso/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-serif text-lg md:text-xl text-brand-espresso pr-4 group-hover:text-brand-terracotta transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-brand-terracotta" aria-hidden="true" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            role="region"
          >
            <p className="font-sans text-brand-espresso/70 leading-relaxed pb-5">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceFaq({ faqItems }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-brand-creamDark">
      <div className="max-w-[700px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-brand-espresso text-center">
            Common <span className="italic text-brand-terracotta">questions</span>
          </h2>
        </motion.div>

        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-soft border border-brand-espresso/5">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}