import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
  variant?: 'primary' | 'white';
}

export function IconBox({ icon: Icon, className, variant = 'primary' }: IconBoxProps) {
  return (
    <div
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-xl',
        variant === 'primary' 
          ? 'bg-brand-blue/10 text-brand-blue' 
          : 'bg-white/10 text-white',
        className
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}
