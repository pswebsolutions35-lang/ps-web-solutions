'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider'; // I'll need to create or mock this
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(10);
  const [customerValue, setCustomerValue] = useState(1000);
  const [closeRate, setCloseRate] = useState(20);
  const [potentialRevenue, setPotentialRevenue] = useState(0);

  useEffect(() => {
    // Logic: PS Web Solutions typically doubles conversion rates.
    // We'll calculate the 'Added Revenue' from improving their site.
    // Assume current leads are from an unoptimized site.
    // We aim for 2x - 3x improvement in lead quality and volume.
    const currentRevenue = monthlyLeads * (closeRate / 100) * customerValue;
    const improvedLeads = monthlyLeads * 1.5; // 50% more volume
    const improvedCloseRate = closeRate * 1.25; // 25% better close rate due to trust
    const projectedRevenue = improvedLeads * (improvedCloseRate / 100) * customerValue;
    
    setPotentialRevenue(Math.max(0, projectedRevenue - currentRevenue));
  }, [monthlyLeads, customerValue, closeRate]);

  return (
    <Card className="p-8 md:p-12 border-white/10 bg-white/[0.02] overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <TrendingUp className="h-64 w-64 text-brand-blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Revenue Growth Calculator</h3>
            <p className="text-gray-400">See how much more your business could be making with a conversion-optimized website.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Users className="h-4 w-4 text-brand-blue" /> Monthly Leads (Current)
                </label>
                <span className="text-white font-bold">{monthlyLeads}</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1" 
                value={monthlyLeads} 
                onChange={(e) => setMonthlyLeads(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-brand-blue" /> Avg. Customer Value
                </label>
                <span className="text-white font-bold">${customerValue.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="100" max="10000" step="100" 
                value={customerValue} 
                onChange={(e) => setCustomerValue(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-brand-blue" /> Close Rate (%)
                </label>
                <span className="text-white font-bold">{closeRate}%</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1" 
                value={closeRate} 
                onChange={(e) => setCloseRate(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>
          </div>
        </div>

        <div className="bg-brand-blue/10 rounded-3xl p-8 flex flex-col justify-center border border-brand-blue/20">
          <p className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 text-center">
            Potential Monthly Increase
          </p>
          <div className="text-center mb-8">
            <span className="text-4xl md:text-6xl font-bold text-white">$</span>
            <span className="text-4xl md:text-6xl font-bold text-white">
              <AnimatedCounter value={Math.round(potentialRevenue)} />
            </span>
          </div>
          <p className="text-gray-400 text-center mb-8 text-sm">
            Estimated additional revenue generated through 1.5x lead volume and 25% higher trust-based conversion.
          </p>
          <Link href="/booking">
            <Button className="w-full h-14 text-lg">
              Get Your Custom Roadmap <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
