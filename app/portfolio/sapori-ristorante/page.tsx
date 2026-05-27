'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Phone, UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';

const menuPreview = [
  { name: 'Costolette di Agnello', price: '$38', desc: 'Grilled lamb chops with rosemary and garlic.' },
  { name: 'Risotto ai Funghi', price: '$26', desc: 'Arborio rice with wild mushrooms and truffle oil.' },
  { name: 'Branzino al Forno', price: '$34', desc: 'Whole roasted sea bass with lemon and herbs.' },
  { name: 'Tiramisu Classico', price: '$12', desc: 'Traditional Italian espresso-soaked ladyfingers.' },
];

export default function SaporiRistorante() {
  return (
    <div className="bg-[#0f0e0c] min-h-screen text-[#e0dcd0]">
      {/* Navbar */}
      <nav className="py-6 px-6 flex justify-between items-center border-b border-[#2a2824] sticky top-0 bg-[#0f0e0c]/90 backdrop-blur-md z-50">
        <span className="text-3xl font-serif tracking-widest text-[#c19a6b]">SAPORI</span>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-[#c19a6b] transition-colors">Menu</a>
          <a href="#" className="hover:text-[#c19a6b] transition-colors">Reservations</a>
          <a href="#" className="hover:text-[#c19a6b] transition-colors">Private Dining</a>
          <a href="#" className="hover:text-[#c19a6b] transition-colors">Contact</a>
        </div>
        <Button className="bg-[#c19a6b] hover:bg-[#a67c4e] text-black rounded-none px-8 font-bold">
          Book Table
        </Button>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2000" 
            alt="Restaurant interior" 
            fill 
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-7xl md:text-9xl font-serif mb-6 leading-none">Authentic <br /> <span className="text-[#c19a6b]">Italian.</span></h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-[#a09c90]">
            Experience the true flavors of Tuscany in the heart of the city. 
            Fresh ingredients, traditional recipes, modern soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#c19a6b] text-black hover:bg-[#a67c4e] h-14 px-10 text-base uppercase tracking-widest font-bold">Explore Menu</Button>
            <Button variant="outline" className="border-[#c19a6b] text-[#c19a6b] hover:bg-[#c19a6b]/10 h-14 px-10 text-base uppercase tracking-widest font-bold">Our Story</Button>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-32 px-6">
        <Container>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 sticky top-32">
              <span className="text-[#c19a6b] uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Seasonal Menu</span>
              <h2 className="text-5xl font-serif mb-8">Taste the tradition.</h2>
              <p className="text-[#a09c90] mb-12 leading-relaxed text-lg">
                Our menu is updated monthly to reflect the freshest seasonal 
                produce. Every dish is crafted by our executive chef with 
                ingredients imported directly from Italy.
              </p>
              <div className="aspect-square relative rounded-full overflow-hidden border-8 border-[#2a2824] p-4">
                <Image 
                  src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=1200" 
                  alt="Pasta dish" 
                  fill 
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-12 w-full">
              {menuPreview.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2 border-b border-[#2a2824] pb-2">
                    <h3 className="text-2xl font-serif group-hover:text-[#c19a6b] transition-colors">{item.name}</h3>
                    <span className="text-xl text-[#c19a6b]">{item.price}</span>
                  </div>
                  <p className="text-[#807c70]">{item.desc}</p>
                </div>
              ))}
              <div className="pt-12 text-center">
                <Button className="bg-transparent border border-[#c19a6b] text-[#c19a6b] hover:bg-[#c19a6b] hover:text-black transition-all px-12 h-14 font-bold uppercase tracking-widest">
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact/Location */}
      <section className="py-24 bg-[#1a1916] border-y border-[#2a2824]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-[#c19a6b] mx-auto mb-4" />
              <h4 className="text-xl font-serif mb-2">Location</h4>
              <p className="text-[#807c70]">123 Italian Way <br /> Austin, TX 78701</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-[#c19a6b] mx-auto mb-4" />
              <h4 className="text-xl font-serif mb-2">Hours</h4>
              <p className="text-[#807c70]">Tue-Sun: 5pm - 10pm <br /> Monday: Closed</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-[#c19a6b] mx-auto mb-4" />
              <h4 className="text-xl font-serif mb-2">Reservations</h4>
              <p className="text-[#807c70]">Call: (555) 123-4567 <br /> online booking</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-[#2a2824]">
        <Container>
          <h2 className="text-4xl font-serif text-[#c19a6b] mb-8">Sapori</h2>
          <p className="text-[#807c70] text-sm uppercase tracking-widest">
            © 2024 Sapori Ristorante. Built by PS Web Solutions.
          </p>
        </Container>
      </footer>
    </div>
  );
}
