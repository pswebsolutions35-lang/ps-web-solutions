'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  ArrowRight,
  Monitor,
  Search,
  Zap,
  DollarSign
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 'intro',
    title: 'The Challenge',
    subtitle: 'Current digital roadblocks',
    content: (client: string) => (
      <div className="space-y-8">
        <p className="text-2xl text-gray-400 leading-relaxed">
          In 2025, a business without a high-performance website is invisible to <span className="text-white font-bold">87% of local customers</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 flex gap-4">
            <XCircle className="h-6 w-6 text-red-500 shrink-0" />
            <div>
              <p className="text-white font-bold mb-1">Slow Load Times</p>
              <p className="text-sm text-gray-500">Users abandon sites that take longer than 3s to load.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 flex gap-4">
            <XCircle className="h-6 w-6 text-red-500 shrink-0" />
            <div>
              <p className="text-white font-bold mb-1">Zero SEO Authority</p>
              <p className="text-sm text-gray-500">Your competitors are capturing all the search intent.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'solution',
    title: 'The Solution',
    subtitle: 'The PS Web Solutions Framework',
    content: (client: string) => (
      <div className="space-y-8">
        <p className="text-2xl text-gray-400 leading-relaxed">
          We don't just build sites. We build <span className="text-brand-blue font-bold">Customer Acquisition Engines</span> for {client}.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-white/10 bg-white/5">
            <Monitor className="h-8 w-8 text-brand-blue mb-4" />
            <p className="text-white font-bold mb-2">Premium UI/UX</p>
            <p className="text-xs text-gray-500">Tesla-level design that builds instant trust.</p>
          </Card>
          <Card className="p-6 border-white/10 bg-white/5">
            <Search className="h-8 w-8 text-brand-blue mb-4" />
            <p className="text-white font-bold mb-2">SEO Dominance</p>
            <p className="text-xs text-gray-500">Hyper-local optimization to hit Page 1.</p>
          </Card>
          <Card className="p-6 border-white/10 bg-white/5">
            <Zap className="h-8 w-8 text-brand-blue mb-4" />
            <p className="text-white font-bold mb-2">Lead Systems</p>
            <p className="text-xs text-gray-500">Automated booking and capture systems.</p>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 'stats',
    title: 'Projected Impact',
    subtitle: 'Expected growth for your business',
    content: (client: string) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-brand-blue/10 rounded-3xl p-8 border border-brand-blue/20">
            <p className="text-6xl font-black text-white mb-2">+150%</p>
            <p className="text-brand-blue font-bold uppercase tracking-widest text-sm">Lead Volume Increase</p>
          </div>
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-6xl font-black text-white mb-2">&lt; 1.2s</p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Mobile Load Time</p>
          </div>
        </div>
        <p className="text-gray-400 italic">"Our data-driven approach typically yields a return on investment within the first 60-90 days of launch."</p>
      </div>
    )
  },
  {
    id: 'next-steps',
    title: 'Next Steps',
    subtitle: 'Launching your new engine',
    content: (client: string) => (
      <div className="space-y-8">
        <div className="space-y-4">
          {[
            'Step 1: Onboarding & Strategy (Next 48 Hours)',
            'Step 2: Custom Design Review (Week 1)',
            'Step 3: Development & Integration (Week 2-3)',
            'Step 4: GO LIVE & Growth Phase (Week 4)',
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
              <CheckCircle2 className="h-6 w-6 text-brand-blue" />
              <span className="text-white font-medium">{step}</span>
            </div>
          ))}
        </div>
        <div className="pt-8">
          <Link href="/booking">
            <Button className="h-16 px-12 text-xl w-full md:w-auto">
              Confirm & Start Your Build <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }
];

export default function PitchDeckPage() {
  const params = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const clientName = (params.slug as string)?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Partner';

  const next = () => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
  const prev = () => setCurrentSlide(prev => Math.max(0, prev - 1));

  return (
    <div className="bg-[#020202] min-h-screen text-white flex flex-col overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1 bg-white/5 w-full">
        <motion.div 
          className="h-full bg-brand-blue"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-brand-blue rounded-lg" />
          <span className="font-bold tracking-tighter text-xl">PS WEB SOLUTIONS</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <span>{currentSlide + 1} / {slides.length}</span>
          <div className="h-4 w-px bg-white/10" />
          <span>Pitch: {clientName}</span>
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 flex items-center justify-center p-8 relative">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl"
            >
              <div className="mb-12">
                <Badge variant="default" className="mb-4">{slides[currentSlide].subtitle}</Badge>
                <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
                  {slides[currentSlide].title}
                </h2>
              </div>
              {slides[currentSlide].content(clientName)}
            </motion.div>
          </AnimatePresence>
        </Container>
      </main>

      {/* Footer Navigation */}
      <footer className="p-8 border-t border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl">
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={prev} 
            disabled={currentSlide === 0}
            className="h-12 w-12 p-0 rounded-full border-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            onClick={next} 
            disabled={currentSlide === slides.length - 1}
            className="h-12 w-12 p-0 rounded-full border-white/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex gap-4">
          <Link href="/contact">
            <Button variant="ghost" className="text-gray-500 hover:text-white">Exit Pitch</Button>
          </Link>
          <Button onClick={next} disabled={currentSlide === slides.length - 1} className="h-12 px-8">
            Next Slide
          </Button>
        </div>
      </footer>
    </div>
  );
}
