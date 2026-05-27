import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
        secondary: 'bg-white/10 text-white border border-white/20',
        outline: 'text-foreground border border-border',
        destructive: 'bg-red-500/10 text-red-500 border border-red-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
