import { Check } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  className?: string;
  href?: string;
}

export function PricingCard({
  tier,
  price,
  description,
  features,
  isPopular,
  ctaText = 'Get Started',
  className,
  href = '/contact',
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'relative flex flex-col',
        isPopular && 'border-brand-blue/50 ring-1 ring-brand-blue/50',
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default" className="px-3 py-1">Most Popular</Badge>
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold">{tier}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          {price !== 'Custom' && <span className="ml-1 text-gray-400">/one-time</span>}
        </div>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-gray-300">
            <Check className="mr-2 h-5 w-5 shrink-0 text-brand-blue" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={href} className="w-full">
        <Button variant={isPopular ? 'primary' : 'outline'} className="w-full">
          {ctaText}
        </Button>
      </Link>
    </Card>
  );
}
