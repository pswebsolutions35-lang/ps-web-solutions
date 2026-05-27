'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IconBox } from '@/components/ui/icon-box';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  MessageSquare, 
  Zap, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Design',
    description: 'Custom, high-performance websites designed to convert visitors into customers. We focus on speed, UX, and conversion psychology.',
    icon: Globe,
    features: ['Conversion Optimized', 'Mobile First', 'Fast Loading', 'Custom Branding'],
    cta: 'View Examples',
    link: '/portfolio',
  },
  {
    title: 'Local SEO',
    description: 'Dominate local search results and get found by customers in your area. We rank you for keywords that actually drive business.',
    icon: Search,
    features: ['Keyword Research', 'On-Page SEO', 'Backlink Strategy', 'Competitor Analysis'],
    cta: 'Check Rankings',
    link: '/contact',
  },
  {
    title: 'GBP Optimization',
    description: 'Optimize your Google Business Profile to rank higher in the Map Pack. More reviews, more calls, more customers.',
    icon: MapPin,
    features: ['Profile Setup', 'Weekly Posts', 'Photo Management', 'Review Strategy'],
    cta: 'Get Optimized',
    link: '/contact',
  },
  {
    title: 'Review Integration',
    description: 'Automate review collection and display social proof that builds trust instantly with potential clients.',
    icon: Star,
    features: ['Auto Requests', 'Display Widget', 'Sentiment Analysis', 'Trust Badges'],
    cta: 'Build Trust',
    link: '/contact',
  },
  {
    title: 'Booking Systems',
    description: 'Seamless appointment scheduling that works while you sleep. Integrate directly with your calendar and CRM.',
    icon: Calendar,
    features: ['Calendar Sync', 'Payment Intake', 'Reminders', 'Lead Qualification'],
    cta: 'See Demo',
    link: '/booking',
  },
  {
    title: 'AI Chatbots',
    description: 'Instant lead qualification and 24/7 customer support on your site. Capture leads even when you are busy.',
    icon: MessageSquare,
    features: ['Lead Capture', 'Instant Answers', 'CRM Sync', '24/7 Availability'],
    cta: 'Try AI Bot',
    link: '/contact',
  },
  {
    title: 'Mobile Optimization',
    description: 'Ensure your site is lightning fast and perfectly usable on every device. Mobile speed is a key ranking factor.',
    icon: Zap,
    features: ['Responsive Design', 'Speed Optimization', 'Core Web Vitals', 'UX Audit'],
    cta: 'Test My Speed',
    link: '/contact',
  },
];

const processSteps = [
  { title: 'Discovery', description: 'We analyze your business, competitors, and goals to build a winning strategy.' },
  { title: 'Design', description: 'Our designers create a premium look that sets you apart from local competitors.' },
  { title: 'Build', description: 'We develop your site using modern technology for maximum speed and SEO.' },
  { title: 'Optimize', description: 'Post-launch, we fine-tune your site for maximum conversion and search rankings.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-24">
          <Badge variant="default" className="mb-4">Our Expertise</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything You Need to <br />
            <span className="text-brand-blue">Dominate Online</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide a complete digital ecosystem designed for one thing: ROI. 
            Stop losing customers to competitors with better online presences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <Card key={i} className="flex flex-col h-full group">
              <IconBox icon={service.icon} className="mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.link}>
                <Button variant="outline" className="w-full group/btn">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Assessment CTA */}
        <Card className="bg-brand-blue/10 border-brand-blue/20 p-8 md:p-12 text-center mb-32">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure what you need?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free digital audit of your business. We'll show you exactly where you're losing customers and how to fix it.
          </p>
          <Link href="/booking">
            <Button size="lg" className="px-10 h-14 text-lg">
              Book Your Free Strategy Call
            </Button>
          </Link>
        </Card>

        {/* Process Timeline */}
        <div className="mb-32">
          <SectionTitle 
            title="How We Deliver Results" 
            subtitle="A proven, systematic approach to elevating your local business."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg z-10">
                    {i + 1}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-10 top-5 w-full h-px bg-brand-blue/20" />
                  )}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Preview */}
        <div className="text-center">
          <SectionTitle 
            title="Transform Your Business" 
            subtitle="Join the 50+ local businesses that have scaled their revenue with our systems."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="px-10">See Case Studies</Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" className="px-10">View Pricing Tiers</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
