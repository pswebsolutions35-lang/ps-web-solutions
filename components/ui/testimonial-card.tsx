import { Card } from './card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={className}>
      <Quote className="mb-4 h-8 w-8 text-brand-blue/40" />
      <p className="mb-6 text-lg italic text-gray-200">"{quote}"</p>
      <div className="flex items-center gap-4">
        {avatarUrl && (
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
            <Image
              src={avatarUrl}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </Card>
  );
}
