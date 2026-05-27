'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { ServiceCard } from '@/components/ui/service-card';
import { Globe, Search, MapPin, Star, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    title: 'Website Design',
    description: 'Custom, high-performance websites designed to convert visitors into customers.',
    icon: Globe,
    features: ['Conversion Optimized', 'Mobile First', 'Fast Loading'],
  },
  {
    title: 'Local SEO',
    description: 'Dominate local search results and get found by customers in your area.',
    icon: Search,
    features: ['Keyword Research', 'On-Page SEO', 'Backlink Strategy'],
  },
  {
    title: 'GBP Optimization',
    description: 'Optimize your Google Business Profile to rank higher in the Map Pack.',
    icon: MapPin,
    features: ['Profile Setup', 'Weekly Posts', 'Photo Management'],
  },
  {
    title: 'Review Integration',
    description: 'Automate review collection and display social proof that builds trust.',
    icon: Star,
    features: ['Auto Requests', 'Display Widget', 'Sentiment Analysis'],
  },
  {
    title: 'Booking Systems',
    description: 'Seamless appointment scheduling that works while you sleep.',
    icon: Calendar,
    features: ['Calendar Sync', 'Payment Intake', 'Reminders'],
  },
  {
    title: 'AI Chatbots',
    description: 'Instant lead qualification and 24/7 customer support on your site.',
    icon: MessageSquare,
    features: ['Lead Capture', 'Instant Answers', 'CRM Sync'],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <SectionTitle
          title="Everything You Need to Grow"
          subtitle="We provide a complete digital ecosystem designed for one thing: ROI."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              Explore All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
