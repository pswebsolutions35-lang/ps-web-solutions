'use client';

import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, MessageSquare, Smartphone, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ReviewManagementPage() {
  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Badge variant="default" className="mb-4">Growth Add-on</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Automate Your <br />
            <span className="text-brand-blue">5-Star Reputation</span>
          </h1>
          <p className="text-xl text-gray-400">
            Reviews are the #1 factor in local SEO. We help you capture, manage, and display 
            customer reviews automatically.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-14 px-8">Get Started - $200/mo</Button>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="h-14 px-8">Book a Demo</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: MessageSquare, title: 'Auto-Requests', desc: 'Send SMS/Email requests to customers immediately after service.' },
            { icon: ShieldCheck, title: 'Negative Filtering', desc: 'Capture unhappy feedback privately before it hits Google.' },
            { icon: Star, title: 'Website Widget', desc: 'Display your best reviews in a premium, live-updating carousel.' },
          ].map((item, i) => (
            <Card key={i} className="p-8 border-white/10 bg-white/5 text-center">
              <item.icon className="h-10 w-10 text-brand-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Dominate Local Search</h2>
              <p className="text-gray-400 leading-relaxed">
                Google prioritizes businesses with frequent, recent, and high-rated reviews. 
                Our system ensures you have a steady stream of new 5-star ratings without lifting a finger.
              </p>
              <ul className="space-y-4">
                {[
                  'Direct integration with Google Business Profile',
                  'Multi-channel requests (SMS, Email, QR Codes)',
                  'Automated response AI (optional)',
                  'Monthly reputation growth reports',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* Review Card Mockup */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className={`p-4 border-white/10 bg-white/5 transition-all duration-500 ${i === 2 ? 'scale-110 z-10 border-brand-blue/50' : 'opacity-40 scale-95'}`}>
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-brand-blue text-brand-blue" />)}
                    </div>
                    <p className="text-xs text-white font-bold mb-1">Excellent service!</p>
                    <p className="text-[10px] text-gray-500">"The team at PS Web Solutions really knows their stuff. Highly recommend!"</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
