'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { PortfolioCard } from '@/components/ui/portfolio-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    title: 'Premier Roofing Co.',
    category: 'Home Services',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=800',
    slug: 'premier-roofing',
  },
  {
    title: 'Lens & Light Studio',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800',
    slug: 'lens-and-light',
  },
  {
    title: 'Sapori Ristorante',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
    slug: 'sapori-ristorante',
  },
];

export function FeaturedPortfolio() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <SectionTitle
            title="Our Latest Work"
            subtitle="Websites built to drive measurable results."
            align="left"
            className="mb-0"
          />
          <Link href="/portfolio">
            <Button variant="outline">View Full Portfolio</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <PortfolioCard key={i} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
