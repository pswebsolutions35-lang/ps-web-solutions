'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Camera, Instagram, Mail, MapPin, Star } from 'lucide-react';
import Image from 'next/image';

const photos = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1550005816-0929673384db?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1520856629241-797ad276c9c3?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
];

export default function LensAndLight() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-serif">
      {/* Navigation */}
      <nav className="py-8 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <span className="text-2xl font-light tracking-tighter">LENS & <span className="font-bold">LIGHT</span></span>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-sans">
          <a href="#" className="hover:text-stone-400 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Experience</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Journal</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Contact</a>
        </div>
        <Button variant="outline" className="rounded-none border-stone-900 text-stone-900 font-sans hover:bg-stone-900 hover:text-white transition-all">
          Inquire
        </Button>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 tracking-tighter">
              Capturing the <br />
              <span className="italic">soul of the moment.</span>
            </h1>
            <p className="font-sans text-stone-500 uppercase tracking-widest text-sm mb-12">
              International Wedding & Lifestyle Photographer
            </p>
            <div className="aspect-[16/9] relative overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2000" 
                alt="Main hero" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <div key={i} className="aspect-[4/5] relative overflow-hidden group">
                <Image 
                  src={src} 
                  alt={`Gallery ${i}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest font-sans">View Project</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" className="rounded-none border-stone-900 px-12 h-14 text-stone-900 font-sans hover:bg-stone-900 hover:text-white">
              View Full Gallery
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-stone-100 text-center px-6">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-stone-900 text-stone-900" />)}
            </div>
            <blockquote className="text-3xl md:text-4xl italic leading-snug mb-8">
              "Sarah has an incredible eye for detail. She didn't just take photos; she captured exactly how we felt in those fleeting moments."
            </blockquote>
            <cite className="font-sans uppercase tracking-[0.3em] text-sm not-italic text-stone-400">— Elena & David</cite>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-stone-200">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-light">Let's create magic.</h2>
              <p className="font-sans text-stone-500">Currently booking 2024 & 2025.</p>
            </div>
            <div className="flex gap-8">
              <Instagram className="h-6 w-6 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
              <MapPin className="h-6 w-6 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-stone-100 text-center">
            <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400">
              © 2024 Lens & Light. Built by PS Web Solutions.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
