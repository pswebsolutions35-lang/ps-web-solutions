'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';
import { CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-black relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-blue/10 blur-[150px] -z-10" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              title="Ready to Grow Your Business?"
              subtitle="Stop losing customers to competitors with better websites. Let's build your lead-generating machine today."
              align="left"
            />
            <ul className="space-y-4 mb-8">
              {[
                'Free strategy consultation',
                'Custom design tailored to your brand',
                'Conversion-optimized layout',
                'Full mobile responsiveness',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-8 border-white/20">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <Textarea placeholder="Tell us about your project..." />
              </div>
              <Button className="w-full h-14 text-lg">Send Message</Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
