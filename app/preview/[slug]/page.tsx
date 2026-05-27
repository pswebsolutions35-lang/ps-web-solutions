'use client';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  TrendingUp,
  Image as ImageIcon,
  Monitor
} from 'lucide-react';
import { useSearchParams, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PreviewProposalPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const clientName = searchParams.get('client') || 'Business Owner';
  const companyName = searchParams.get('company') || 'Your Business';
  const industry = searchParams.get('industry') || 'Service Provider';
  const location = searchParams.get('location') || 'Your Area';

  const tier = searchParams.get('tier') || 'Growth';
  const price = tier === 'Starter' ? '1,500' : tier === 'Premium' ? '5,000' : '3,000';

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-24">
            <Badge variant="default" className="mb-6">Personalized Proposal</Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Custom Growth Strategy for <br />
              <span className="text-brand-blue">{companyName}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We've analyzed the <strong>{industry}</strong> market in <strong>{location}</strong>. 
              Here is how we'll help you dominate your local competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Visual Comparison */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <ImageIcon className="text-brand-blue" /> Before & After
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Average {industry} Site</p>
                  <div className="aspect-video rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center grayscale opacity-50">
                    <p className="text-sm text-gray-600">Old, outdated, slow UI</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase text-brand-blue tracking-widest">PS Web Solutions Version</p>
                  <div className="aspect-video rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                    <Monitor className="text-brand-blue h-12 w-12" />
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Local SEO Mastery', desc: `Rank #1 for "${industry} in ${location}" keywords.` },
                { title: 'Trust-First Design', desc: 'Convert visitors into leads with premium psychology.' },
                { title: 'Auto-Lead Capture', desc: '24/7 lead intake via integrated booking systems.' },
              ].map((item, i) => (
                <Card key={i} className="p-8 border-white/10 bg-white/5">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>

            {/* Selected Package */}
            <Card className="p-8 md:p-12 border-brand-blue/20 bg-brand-blue/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap className="h-32 w-32 text-brand-blue" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-12 border-b border-white/10">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{tier} Plan Build</h2>
                    <p className="text-gray-400">The most effective option for <strong>{companyName}</strong>.</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Investment</p>
                    <p className="text-5xl font-black text-white">${price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {[
                    'Custom High-Fidelity UI Design',
                    'Responsive Mobile Optimization',
                    'Advanced Local SEO Schema',
                    'Google Business Profile Integration',
                    'Online Booking & CRM Setup',
                    'Lifetime Performance Hosting',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-4">
                      <CheckCircle2 className="text-brand-blue h-6 w-6 shrink-0" />
                      <span className="text-lg text-gray-300">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <Link href={`/payment/${tier.toLowerCase()}`} className="flex-1">
                    <Button className="w-full h-16 text-xl">Accept Proposal & Start Project</Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="h-16 px-8 text-xl">Book Follow-up Call</Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Social Proof */}
            <section className="text-center py-12">
              <p className="text-gray-500 font-medium mb-8 uppercase tracking-widest text-xs">Trusted by 50+ service businesses</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
                {['TrustPilot', 'Google Partner', 'Clutch', 'Upwork'].map(t => (
                  <span key={t} className="text-xl font-bold text-white">{t}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
