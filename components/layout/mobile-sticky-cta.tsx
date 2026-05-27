'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-black/60 backdrop-blur-xl border-t border-white/10 md:hidden"
        >
          <Link href="/booking">
            <Button className="w-full h-14 text-lg font-bold shadow-[0_0_30px_rgba(0,119,255,0.4)]">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
