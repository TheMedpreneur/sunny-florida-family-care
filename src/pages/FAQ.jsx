import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const AccordionItem = ({ question, answer, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="border-b border-brand-espresso/10 py-6"
  >
    <h3 className="text-xl md:text-2xl mb-3 text-brand-espresso font-serif">{question}</h3>
    <p className="font-sans text-brand-espresso/70 leading-relaxed">{answer}</p>
  </motion.div>
);

export default function FAQ() {
  const { t } = useLanguage();

  const questions = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') }
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-24 pb-24">
      <SEO
        title="Frequently Asked Questions"
        description="Find answers about our direct primary care model, mobile visits, same-day appointments, membership pricing, and bilingual services in Jacksonville, FL."
        url="https://www.sunnyfamily.health/#/faq"
        keywords="FAQ, direct primary care, membership, mobile visits, telehealth, Jacksonville healthcare questions"
      />
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            {t('faq.title')} <span className="italic text-brand-terracotta">{t('faq.titleItalic')}</span>
          </h1>
          <p className="font-sans text-lg text-brand-espresso/60">
            Everything you need to know about our personal approach to healthcare.
          </p>
        </motion.div>

        <div
          className="bg-white/50 backdrop-blur-sm rounded-[32px] p-8 md:p-12 shadow-soft border border-brand-espresso/5"
          role="region"
          aria-label="Frequently asked questions"
        >
          {questions.map((item, i) => (
            <AccordionItem key={i} question={item.q} answer={item.a} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}