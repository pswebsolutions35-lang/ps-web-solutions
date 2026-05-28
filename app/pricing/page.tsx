'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { PricingCard } from '@/components/ui/pricing-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScarcityBadge } from '@/components/ui/scarcity-badge';
import { ROICalculator } from '@/components/sections/roi-calculator';

const tiers = [
  {
    tier: 'Starter',
    price: '1,500',
    description: 'Best for: New businesses getting online',
    href: '/payment/starter',
    features: [
      '5-page premium website',
      'Mobile optimized design',
      'Basic SEO setup',
      'Contact form integration',
      '1 revision round',
      '30-day post-launch support',
    ],
  },
  {
    tier: 'Growth',
    price: '3,000',
    description: 'Best for: Growing service businesses',
    isPopular: true,
    href: '/payment/growth',
    features: [
      '10-page premium website',
      'Advanced SEO package',
      'Google Business Profile setup',
      'Review system integration',
      'Online booking system',
      '2 revision rounds',
      '90-day post-launch support',
    ],
  },
  {
    tier: 'Premium',
    price: '5,000',
    description: 'Best for: Established businesses scaling',
    href: '/payment/premium',
    features: [
      'Unlimited pages',
      'Complete SEO dominance',
      'AI Chatbot integration',
      'Custom advanced animations',
      'Priority 24/7 support',
      'Conversion rate optimization',
      'CRM integration',
    ],
  },
];

const faqs = [
  {
    question: "Is there a monthly fee?",
    answer: "The build cost is a one-time fee. We offer optional hosting and maintenance retainers starting at $150/month which cover hosting, security, and minor content updates."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans. Typically 50% upfront and 50% upon launch, but we can discuss 3 or 4-month installment options."
  },
  {
    question: "Can I upgrade my tier later?",
    answer: "Absolutely. You can start with the Starter tier and we can add Growth or Premium features as your business scales."
  }
];

export default function PricingPage() {
  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <ScarcityBadge />
          <div className="mt-8">
            <Badge variant="default" className="mb-4">Transparent Pricing</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple Pricing. <br />
            <span className="text-brand-blue">Transformative Results.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No complicated contracts. Just high-performance websites 
            built to grow your local business.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="mb-24">
          <ROICalculator />
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PricingCard {...tier} />
            </motion.div>
          ))}
        </div>

        {/* Monthly Retainers */}
        <div className="mb-32">
          <SectionTitle 
            title="Monthly Support Plans" 
            subtitle="Keep your site fast, secure, and ranking high with our maintenance retainers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* ... maintenance plans ... */}
          </div>

          {/* Upsells */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'AI Chatbot', price: '$500', href: '/services/ai-chatbot' },
              { title: 'Review System', price: '$200/mo', href: '/services/review-management' },
              { title: 'Google Ads', price: '$1,000/mo', href: '/services/ads-management' },
            ].map((upsell) => (
              <Card key={upsell.title} className="p-6 border-white/5 bg-white/[0.02] flex justify-between items-center">
                <div>
                  <p className="text-white font-bold">{upsell.title}</p>
                  <p className="text-brand-blue text-sm">{upsell.price}</p>
                </div>
                <Link href={upsell.href}>
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantees & Financing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: ShieldCheck, title: "Money-Back Guarantee", desc: "If you're not happy with the design within 14 days, we'll refund your deposit." },
            { icon: Zap, title: "Financing Available", desc: "Split your project cost into easy monthly payments with 0% interest options." },
            { icon: HelpCircle, title: "Lifetime Support", desc: "We're always a phone call away for any questions or issues you might have." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <item.icon className="h-10 w-10 text-brand-blue mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Pricing FAQ" subtitle="Common questions about our billing and tiers." />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h4 className="text-lg font-bold text-white mb-2">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to pick a plan?</h2>
          <Link href="/contact">
            <Button size="lg" className="px-12 h-14 text-lg">Start Your Project</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
