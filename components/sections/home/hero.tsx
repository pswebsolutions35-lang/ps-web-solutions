'use client';

import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { AnimatedText } from '@/components/ui/animated-text';
import { GradientText } from '@/components/ui/gradient-text';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for new projects in Q2 2024</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            We Build Websites That <br />
            <GradientText>Bring You Customers</GradientText>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium, conversion-optimized websites for local service businesses. 
            We turn your online presence into a lead-generating machine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio">
              <Button size="lg" className="w-full sm:w-auto text-base group">
                See Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/booking">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </motion.div>
    </section>
  );
}
