import Image from 'next/image';
import { Card } from './card';
import { Badge } from './badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  className?: string;
}

export function PortfolioCard({
  title,
  category,
  image,
  slug,
  className,
}: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group">
      <Card className="overflow-hidden p-0 border-none bg-transparent hover:bg-transparent">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 px-2">
          <Badge variant="default" className="mb-2">{category}</Badge>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}
