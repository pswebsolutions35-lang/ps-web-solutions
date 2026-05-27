'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How much does a new website cost?",
    answer: "Our pricing starts at $1,500 for a professional starter site. Most growth-focused projects range between $3,000 and $5,000 depending on features like booking systems or AI chatbots."
  },
  {
    question: "How long does the process take?",
    answer: "A standard website typically takes 2-4 weeks from discovery to launch. Larger projects with custom integrations may take up to 6-8 weeks."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes! Every site we build is SEO-optimized. We also offer ongoing SEO maintenance packages to ensure you stay at the top of local search results."
  },
  {
    question: "Can I update the content myself?",
    answer: "Absolutely. We build on user-friendly systems and provide training so you can easily update text, images, and blog posts yourself."
  },
  {
    question: "Will my site be mobile-friendly?",
    answer: "100%. We follow a mobile-first design approach, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops."
  },
  {
    question: "Do you handle hosting and maintenance?",
    answer: "Yes, we offer premium hosting and maintenance retainers so you never have to worry about security, updates, or technical issues."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about our process and pricing."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.08] transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown className={cn(
                  "h-5 w-5 text-gray-500 transition-transform duration-300",
                  openIndex === i && "rotate-180 text-brand-blue"
                )} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
