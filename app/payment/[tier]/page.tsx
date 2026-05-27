'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_TIERS } from '@/lib/stripe/pricing';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const tierId = params.tier as string;
  const tier = PRICING_TIERS[tierId as keyof typeof PRICING_TIERS];
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!tier) {
    return (
      <div className="bg-black pt-32 min-h-screen text-center text-white">
        <Container>
          <h1 className="text-2xl font-bold">Invalid Tier selected.</h1>
          <Button onClick={() => router.push('/pricing')} className="mt-4">Back to Pricing</Button>
        </Container>
      </div>
    );
  }

  const handlePayment = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier_id: tierId, client_email: email }),
      });

      const data = await response.json();
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to initiate checkout.');
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Summary */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Confirm Your Project</h1>
            <Card className="p-8 border-white/10 bg-white/5 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="default" className="mb-2">Selected Plan</Badge>
                  <h2 className="text-3xl font-bold text-white">{tier.name} Build</h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 uppercase">One-time payment</p>
                  <p className="text-3xl font-bold text-brand-blue">${tier.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="font-bold text-white">What's included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Custom Premium Design',
                    'Mobile Optimization',
                    'SEO Foundation',
                    'Lead Capture System',
                    'CMS Integration',
                    '30-Day Support',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6 flex gap-4">
                <Zap className="h-6 w-6 text-brand-blue shrink-0" />
                <div>
                  <p className="text-white font-bold mb-1">Fast Track Launch</p>
                  <p className="text-sm text-gray-400">Estimated delivery: 2-3 weeks from content approval.</p>
                </div>
              </div>
            </Card>

            <div className="mt-8 flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[10px]">Stripe Secure</Badge>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="lg:col-span-5">
            <Card className="p-8 border-white/10 bg-white/5 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Complete Checkout</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/10 h-14"
                  />
                  <p className="text-xs text-gray-500">We'll send your project kickoff guide to this email.</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${tier.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-white text-xl font-bold pt-2">
                    <span>Total Due</span>
                    <span>${tier.price.toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  className="w-full h-16 text-lg" 
                  onClick={handlePayment}
                  isLoading={isLoading}
                >
                  Pay Now with Stripe
                </Button>

                <p className="text-center text-xs text-gray-500">
                  By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
