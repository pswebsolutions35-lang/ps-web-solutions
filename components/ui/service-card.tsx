import { LucideIcon } from 'lucide-react';
import { Card } from './card';
import { IconBox } from './icon-box';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn('group flex flex-col items-start text-left', className)}>
      <IconBox icon={icon} className="mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-gray-400">{description}</p>
      {features && (
        <ul className="mt-auto space-y-2">
          {features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center text-sm text-gray-500">
              <span className="mr-2 h-1 w-1 rounded-full bg-brand-blue" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
