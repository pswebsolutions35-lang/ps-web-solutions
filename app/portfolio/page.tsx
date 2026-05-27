'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { PortfolioCard } from '@/components/ui/portfolio-card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Home Services', 'Photography', 'Restaurant', 'Medical'];

const projects = [
  {
    title: 'Premier Roofing Co.',
    category: 'Home Services',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=800',
    slug: 'premier-roofing',
    results: '340% increase in monthly leads',
  },
  {
    title: 'Lens & Light Studio',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800',
    slug: 'lens-and-light',
    results: 'Doubled booking rate in 60 days',
  },
  {
    title: 'Sapori Ristorante',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
    slug: 'sapori-ristorante',
    results: '40% increase in reservations',
  },
  {
    title: 'Elite Dentistry',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1629909608135-ca039a797c55?auto=format&fit=crop&q=80&w=800',
    slug: 'elite-dentistry',
    results: 'Page 1 rankings for 15+ keywords',
  },
  {
    title: 'Apex HVAC',
    category: 'Home Services',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
    slug: 'apex-hvac',
    results: 'Reduced CAC by 50%',
  },
  {
    title: 'Bloom Floral',
    category: 'Restaurant', // Using restaurant as placeholder for niche
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    slug: 'bloom-floral',
    results: 'Automated 80% of customer inquiries',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Our Success Stories</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Websites That Work. <br />
            <span className="text-brand-blue">See for Yourself.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just build websites; we build business tools that drive 
            measurable growth for local service providers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'border-brand-blue bg-brand-blue text-white'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioCard {...project} />
                <div className="mt-2 px-2">
                  <p className="text-sm font-semibold text-brand-blue">{project.results}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white mb-4">Want results like these?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can build a high-performing website for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="h-12 px-8 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-blue-hover transition-colors">
              Book a Strategy Call
            </button>
            <button className="h-12 px-8 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
              Get a Free Audit
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
