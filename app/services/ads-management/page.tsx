'use client';

import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Target, MousePointer2, CheckCircle2, ArrowRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function GoogleAdsPage() {
  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Badge variant="default" className="mb-4">Performance Marketing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get Leads Instantly with <br />
            <span className="text-brand-blue">Expert Google Ads</span>
          </h1>
          <p className="text-xl text-gray-400">
            Why wait for SEO? Jump to the top of Google search results today. 
            We manage your campaigns to ensure maximum ROAS.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-14 px-8">Get Started - $1,000/mo</Button>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="h-14 px-8">Book a Strategy Call</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Target, title: 'Hyper-Targeted', desc: 'Reach customers exactly when they are searching for your service.' },
            { icon: MousePointer2, title: 'PPC Management', desc: 'We optimize every cent of your ad spend to lower your cost-per-lead.' },
            { icon: BarChart3, title: 'Full Transparency', desc: 'Detailed monthly reports showing clicks, calls, and conversions.' },
          ].map((item, i) => (
            <Card key={i} className="p-8 border-white/10 bg-white/5 text-center">
              <item.icon className="h-10 w-10 text-brand-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full" />
            <Card className="relative p-8 border-white/10 bg-[#0A0A0A]">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Ad Spend</p>
                    <p className="text-2xl font-bold text-white">$2,500.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-500 font-bold mb-1">+14% vs last month</p>
                    <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[70%]" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase mb-1">Conversions</p>
                    <p className="text-xl font-bold text-white">48</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase mb-1">Cost per Lead</p>
                    <p className="text-xl font-bold text-white">$52.08</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-gray-500 mb-4">Top Keywords</p>
                  <div className="space-y-2">
                    {['roofing contractor austin', 'emergency roof repair', 'best roofer near me'].map((kw) => (
                      <div key={kw} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">{kw}</span>
                        <span className="text-brand-blue font-bold">High</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white">Our 4-Step Ad Process</h2>
            <div className="space-y-4">
              {[
                { title: 'Keyword Research', desc: 'Identifying high-intent search terms with low competition.' },
                { title: 'Ad Copywriting', desc: 'Writing compelling ads that drive clicks and build trust.' },
                { title: 'Landing Page Opt', desc: 'Ensuring your website is ready to convert the traffic we send.' },
                { title: 'Scale & Optimize', desc: 'Constantly monitoring results and scaling winners.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-brand-blue font-bold">0{i+1}.</span>
                  <div>
                    <p className="text-white font-bold">{step.title}</p>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
