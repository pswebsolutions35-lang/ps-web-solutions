'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Calendar, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

interface SubscriptionCardProps {
  subscription: {
    id: string;
    plan_name: string;
    amount: number;
    status: string;
    next_billing: string;
  } | null;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!subscription) {
    return (
      <Card className="p-6 border-white/5 bg-white/[0.02]">
        <h3 className="text-lg font-bold text-white mb-4">Maintenance Plan</h3>
        <p className="text-gray-500 text-sm mb-6">
          You don't have an active maintenance plan. Protect your investment and keep your site running smooth.
        </p>
        <Button className="w-full">
          Browse Plans <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 border-white/5 bg-white/[0.02]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">{subscription.plan_name}</h3>
          <p className="text-2xl font-bold text-brand-blue">${subscription.amount}<span className="text-sm text-gray-500">/mo</span></p>
        </div>
        <Badge variant={subscription.status === 'active' ? 'default' : 'secondary'}>
          {subscription.status.toUpperCase()}
        </Badge>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <Calendar className="h-4 w-4 text-brand-blue" />
          <span>Next billing: {new Date(subscription.next_billing).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <CreditCard className="h-4 w-4 text-brand-blue" />
          <span>Visa ending in 4242</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" size="sm" className="text-xs">
          Manage
        </Button>
        <Button variant="ghost" size="sm" className="text-xs text-red-500 hover:bg-red-500/10">
          Cancel
        </Button>
      </div>
    </Card>
  );
}
