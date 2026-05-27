'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create a premium, conversion-focused design tailored to your brand.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our developers bring the design to life with high-performance code.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We optimize and launch your site to start driving results immediately.',
  },
];

export function Process() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <SectionTitle
          title="Our Simple 4-Step Process"
          subtitle="How we take your business from outdated to outstanding."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="mb-6 flex items-baseline gap-4">
                <span className="text-5xl font-black text-brand-blue/20 transition-colors group-hover:text-brand-blue/40">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
              
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-brand-blue/20 to-transparent -z-10" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
