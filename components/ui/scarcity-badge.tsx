'use client';

import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

export function ScarcityBadge() {
  const [spots, setSpots] = useState(3);

  useEffect(() => {
    // Mock dynamic scarcity
    const date = new Date();
    const day = date.getDate();
    // Logic: Fewer spots as the month progresses
    const remaining = Math.max(1, 4 - Math.floor(day / 8));
    setSpots(remaining);
  }, []);

  return (
    <Badge variant="secondary" className="bg-red-500/10 text-red-500 border-red-500/20 animate-pulse">
      Only {spots} project spots remaining for {new Date().toLocaleDateString('en-US', { month: 'long' })}
    </Badge>
  );
}
