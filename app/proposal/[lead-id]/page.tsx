'use client';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, FileText, Send, Zap, Clock, ShieldCheck, DollarSign } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProposalPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSuccess] = useState(false);

  // Mock data - in real app fetch from /api/leads/[id]
  const clientName = searchParams.get('client') || 'Business Owner';
  const companyName = searchParams.get('company') || 'Your Company';
  const industry = searchParams.get('industry') || 'Service';

  const plan = {
    name: 'Growth',
    price: 3000,
    features: [
      '10-Page Premium Design',
      'Advanced Local SEO',
      'Review System Integration',
      'Google Business Profile Optimization',
      '90 Days Priority Support'
    ]
  };

  const handleSendProposal = async () => {
    setIsSending(true);
    // Mock generating Stripe link and emailing
    await new Promise(r => setTimeout(r, 2000));
    setIsSending(false);
    setIsSuccess(true);
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-24 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <Badge variant="default" className="mb-4">Project Proposal</Badge>
              <h1 className="text-4xl font-bold text-white">Digital Growth Strategy</h1>
              <p className="text-gray-500 mt-2">Prepared for <span className="text-white font-bold">{clientName}</span> @ {companyName}</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" /> Download PDF
              </Button>
              {isSent ? (
                <Badge variant="secondary" className="h-12 px-6 bg-green-500/10 text-green-500 border-none">
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Proposal Sent
                </Badge>
              ) : (
                <Button onClick={handleSendProposal} isLoading={isSending} className="h-12 px-8">
                  <Send className="mr-2 h-4 w-4" /> Send This Proposal
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Executive Summary */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Zap className="h-6 w-6 text-brand-blue" /> The Strategy
                </h2>
                <div className="prose prose-invert max-w-none text-gray-400">
                  <p>
                    Based on our research into the <strong>{industry}</strong> industry, we've identified a significant 
                    opportunity for <strong>{companyName}</strong> to capture more market share through a 
                    performance-driven digital presence.
                  </p>
                  <p>
                    Our goal is to build a high-converting website that doesn't just look beautiful, 
                    but serves as a 24/7 automated sales machine for your business.
                  </p>
                </div>
              </section>

              {/* Proposed Solution */}
              <Card className="p-8 border-white/10 bg-white/[0.02]">
                <h3 className="text-xl font-bold text-white mb-6">Proposed Package: {plan.name} Build</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Timeline */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Clock className="h-6 w-6 text-brand-blue" /> Project Timeline
                </h2>
                <div className="space-y-4">
                  {[
                    { phase: 'Discovery & Strategy', duration: 'Week 1', status: 'Upcoming' },
                    { phase: 'High-Fidelity UI Design', duration: 'Week 2', status: 'Upcoming' },
                    { phase: 'Full-Stack Development', duration: 'Week 3-4', status: 'Upcoming' },
                    { phase: 'QA & Final Launch', duration: 'Week 5', status: 'Upcoming' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                      <div className="flex items-center gap-4">
                        <span className="h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm">{i+1}</span>
                        <span className="text-white font-medium">{p.phase}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{p.duration}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              {/* Investment Summary */}
              <Card className="p-8 border-brand-blue/20 bg-brand-blue/5 sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Investment Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-400">
                    <span>One-time Build Fee</span>
                    <span className="text-white font-bold">${plan.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Setup & Integration</span>
                    <span className="text-green-500 font-bold">INCLUDED</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between">
                    <span className="text-white font-bold">Total Investment</span>
                    <span className="text-2xl font-bold text-brand-blue">${plan.price.toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full h-14 mb-4">
                  Accept & Pay Deposit
                </Button>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secure payment via Stripe</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-white/5 bg-white/[0.02]">
                <h4 className="font-bold text-white mb-4">Need a quick call?</h4>
                <p className="text-sm text-gray-500 mb-4">Have questions about the proposal? Let's chat for 15 minutes.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Book Follow-up
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
