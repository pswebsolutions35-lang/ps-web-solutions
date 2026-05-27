'use client';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Mail, MessageSquare, Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';

export default function NotificationPreferencesPage() {
  const [prefs, setPrefs] = useState({
    email_new_lead: true,
    email_payment: true,
    email_onboarding: true,
    sms_new_lead: true,
    sms_payment: true,
    sms_booking: true,
  });

  const toggle = (key: keyof typeof prefs) => {
    setPrefs({ ...prefs, [key]: !prefs[key] });
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-24 pb-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Notification Preferences</h1>
            <p className="text-gray-500">Control how and when you want to be notified about agency activity.</p>
          </div>

          <div className="space-y-8">
            {/* Email Notifications */}
            <Card className="p-8 border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Email Notifications</h3>
              </div>

              <div className="space-y-6">
                {[
                  { id: 'email_new_lead', label: 'New Lead Alerts', desc: 'Get an email as soon as a new lead submits a form.' },
                  { id: 'email_payment', label: 'Payment Receipts', desc: 'Receive confirmation when a client pays an invoice.' },
                  { id: 'email_onboarding', label: 'Onboarding Progress', desc: 'Updates when clients complete onboarding steps.' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => toggle(item.id as any)}
                      className={`h-6 w-12 rounded-full transition-colors relative ${prefs[item.id as keyof typeof prefs] ? 'bg-brand-blue' : 'bg-white/10'}`}
                    >
                      <div className={`h-4 w-4 rounded-full bg-white absolute top-1 transition-all ${prefs[item.id as keyof typeof prefs] ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            {/* SMS Notifications */}
            <Card className="p-8 border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white">SMS Notifications</h3>
              </div>

              <div className="space-y-6">
                {[
                  { id: 'sms_new_lead', label: 'Instant Lead Alerts', desc: 'Get a text within 30 seconds of a new lead submission.' },
                  { id: 'sms_payment', label: 'Payment Alerts', desc: 'Instant SMS when money hits your Stripe account.' },
                  { id: 'sms_booking', label: 'Booking Alerts', desc: 'Get notified when a strategy call is booked.' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => toggle(item.id as any)}
                      className={`h-6 w-12 rounded-full transition-colors relative ${prefs[item.id as keyof typeof prefs] ? 'bg-brand-blue' : 'bg-white/10'}`}
                    >
                      <div className={`h-4 w-4 rounded-full bg-white absolute top-1 transition-all ${prefs[item.id as keyof typeof prefs] ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button>Save Preferences</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
