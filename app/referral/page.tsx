'use client';

import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Gift, Share2, Users, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'pswebsolutions.com/ref/partner123';

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Badge variant="default" className="mb-4">Partner Program</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Share the Success. <br />
            <span className="text-brand-blue">Earn 10% Commission.</span>
          </h1>
          <p className="text-xl text-gray-400">
            Know a business that needs a better website? Refer them to PS Web Solutions 
            and earn 10% of their build cost. No limits, no strings attached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Share2, title: 'Share Your Link', desc: 'Send your unique referral link to business owners.' },
            { icon: Users, title: 'They Sign Up', desc: 'When they book a call and sign with us, you get credited.' },
            { icon: DollarSign, title: 'Get Paid', desc: 'Earn 10% (up to $500+) per successful referral build.' },
          ].map((item, i) => (
            <Card key={i} className="p-8 border-white/10 bg-white/5 text-center">
              <item.icon className="h-10 w-10 text-brand-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 border-brand-blue/30 bg-brand-blue/5 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Your Referral Dashboard</h2>
            <div className="bg-black/40 rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center gap-4">
              <code className="text-brand-blue font-mono flex-1">{referralLink}</code>
              <Button onClick={copyLink} size="sm" className="w-full md:w-auto">
                {copied ? 'Copied!' : 'Copy Link'}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Total Referrals</p>
                <p className="text-2xl font-bold text-white">0</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Earned to Date</p>
                <p className="text-2xl font-bold text-green-500">$0.00</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Payouts are sent via PayPal or Stripe within 30 days of the referred client's second payment.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
