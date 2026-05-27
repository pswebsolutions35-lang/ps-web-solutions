'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { cn } from '@/lib/utils';

const examples = [
  {
    title: 'Premier Roofing',
    before: 'https://images.unsplash.com/photo-1505764761634-1d77b57e1966?auto=format&fit=crop&q=40&w=800',
    after: 'https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=800',
  },
];

export function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <section className="py-24 bg-black">
      <Container>
        <SectionTitle
          title="See the Transformation"
          subtitle="Real examples of how we've elevated local businesses."
        />
        
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 cursor-col-resize select-none"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After Image (Background) */}
          <Image
            src={examples[0].after}
            alt="After"
            fill
            className="object-cover"
          />
          
          {/* Before Image (Overlay) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <Image
              src={examples[0].before}
              alt="Before"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">BEFORE</div>
          </div>
          
          <div className="absolute top-4 right-4 bg-brand-blue/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white z-20">AFTER</div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xl">
              <div className="flex gap-1">
                <div className="w-0.5 h-4 bg-gray-300 rounded-full" />
                <div className="w-0.5 h-4 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
