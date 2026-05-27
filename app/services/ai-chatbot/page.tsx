'use client';

import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, Zap, Clock, Users, CheckCircle2, ArrowRight, Bot } from 'lucide-react';
import Link from 'next/link';

export default function AIChatbotPage() {
  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Badge variant="default" className="mb-4">Premium Add-on</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Capture Leads 24/7 with <br />
            <span className="text-brand-blue">Custom AI Agents</span>
          </h1>
          <p className="text-xl text-gray-400">
            Never miss a customer again. Our AI chatbots qualify leads, answer questions, 
            and book appointments while you sleep.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-14 px-8">Add to My Site - $500</Button>
            <Button size="lg" variant="outline" className="h-14 px-8">See Live Demo</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: MessageSquare, title: 'Instant Response', desc: '0-second wait time for customer inquiries.' },
            { icon: Zap, title: 'Lead Qualification', desc: 'Automatically filters and categorizes your leads.' },
            { icon: Clock, title: '24/7 Availability', desc: 'Always online, even on holidays and weekends.' },
          ].map((item, i) => (
            <Card key={i} className="p-8 border-white/10 bg-white/5">
              <item.icon className="h-10 w-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Built for Conversion</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Unlike generic chatbots, our agents are trained on your business data. They know your 
              pricing, your services, and your unique selling points.
            </p>
            <ul className="space-y-4">
              {[
                'Seamless integration with your existing CRM',
                'Natural language processing that feels human',
                'Automated hand-off to human staff for hot leads',
                'Detailed analytics on every conversation',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full" />
            <Card className="relative p-0 overflow-hidden border-white/10 bg-[#0A0A0A] aspect-[4/5] max-w-sm mx-auto">
              <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">PS Assistant</p>
                  <p className="text-[10px] text-green-500">Online & Ready</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-sm text-white">Hi there! How can I help you today?</p>
                </div>
                <div className="bg-brand-blue rounded-2xl rounded-tr-none p-4 max-w-[80%] ml-auto">
                  <p className="text-sm text-white">I'm interested in a new website for my roofing company.</p>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-sm text-white">Great! We've built 20+ roofing sites. Would you like to see a case study or book a free strategy call?</p>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 border-t border-white/10 bg-white/5">
                <div className="bg-white/5 rounded-full px-4 py-2 text-xs text-gray-500">
                  Type a message...
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
