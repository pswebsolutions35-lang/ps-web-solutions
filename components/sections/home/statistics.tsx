'use client';

import { Container } from '@/components/ui/container';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { ScrollReveal } from '@/components/layout/scroll-reveal';

const stats = [
  { label: 'Sites Built', value: 50, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Avg Traffic Increase', value: 3.5, suffix: 'x', decimal: true },
  { label: 'Avg Response Time', value: 24, suffix: 'hr' },
];

export function Statistics() {
  return (
    <section className="py-24 bg-black relative">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline justify-center">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimal ? 1 : 0} 
                  />
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
