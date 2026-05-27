'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  ArrowRight,
  RefreshCw,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export default function LiveDemoPage() {
  const [isClientBranding, setIsClientBranding] = useState(false);
  const [clientName, setClientName] = useState('Miller Roofing');

  return (
    <div className="bg-black min-h-screen">
      {/* Demo Control Banner */}
      <div className="sticky top-0 z-50 bg-brand-blue py-3 px-6 shadow-2xl">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-none animate-pulse">LIVE DEMO MODE</Badge>
            <p className="text-white text-sm font-medium hidden lg:block">
              This is a live preview of our high-conversion template for the <span className="font-bold underline">Roofing Industry</span>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-black/20 rounded-lg p-1 mr-2">
              <button 
                onClick={() => setIsClientBranding(false)}
                className={`px-3 py-1 text-xs rounded-md transition-all ${!isClientBranding ? 'bg-white text-brand-blue font-bold shadow-sm' : 'text-white/60 hover:text-white'}`}
              >
                Generic
              </button>
              <button 
                onClick={() => setIsClientBranding(true)}
                className={`px-3 py-1 text-xs rounded-md transition-all ${isClientBranding ? 'bg-white text-brand-blue font-bold shadow-sm' : 'text-white/60 hover:text-white'}`}
              >
                {clientName}
              </button>
            </div>
            <Link href="/booking">
              <Button size="sm" variant="secondary" className="bg-white text-brand-blue hover:bg-white/90">
                Book My Free Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Overlay Side Panel (Desktop only) */}
      <div className="fixed right-6 top-32 z-40 hidden xl:block w-72">
        <Card className="p-6 border-white/10 bg-black/80 backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-brand-blue" />
            <h3 className="text-white font-bold">Estimated Performance</h3>
          </div>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Monthly Leads</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">45-60</span>
                <span className="text-xs text-green-500 mb-1">+240%</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Estimated ROI</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">$12k+</span>
                <span className="text-[10px] text-gray-400 mb-1">per month</span>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/5">
            <p className="text-xs text-gray-400 leading-relaxed italic">
              "We built this specific framework to dominate local search for roofers in competitive markets."
            </p>
          </div>
        </Card>
      </div>

      {/* The actual demo site content (Simplified roofing site) */}
      <main className="transition-all duration-700">
        {/* Roofing Hero */}
        <section className={`py-32 px-6 ${isClientBranding ? 'bg-zinc-900' : 'bg-blue-950'} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1635839858151-f003065aa882?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                {isClientBranding ? clientName : 'Premier Roofing Services'}
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Austin's most trusted choice for residential and commercial roofing. 20+ years of local expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-16 px-10 text-lg bg-brand-blue hover:bg-brand-blue/90 border-none shadow-xl shadow-brand-blue/20">
                  Get My Free Inspection
                </Button>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-700" />
                    ))}
                  </div>
                  <span className="text-sm text-white font-medium">Joined by 200+ local homeowners</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Emergency Repair', desc: 'Available 24/7 for storm damage and leaks.' },
                { title: 'Complete Replacement', desc: 'Highest quality materials with lifetime warranties.' },
                { title: 'Free Inspections', desc: 'Detailed reports for insurance claims processing.' },
              ].map((service, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      {/* Floating CTA for Demo User */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Card className="p-2 border-white/20 bg-black/40 backdrop-blur-2xl rounded-full flex items-center gap-2 pr-6">
          <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
            <Eye className="h-5 w-5" />
          </div>
          <span className="text-sm font-bold text-white whitespace-nowrap">Interested in this for your business?</span>
          <Link href="/proposal/new?industry=Roofing">
            <Button size="sm" className="h-10 rounded-full">See Custom Proposal</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
