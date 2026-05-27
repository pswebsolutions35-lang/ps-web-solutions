'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, CheckCircle2, Shield, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PremierRoofing() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Brand Header */}
      <div className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 p-1.5 rounded-lg text-white">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-slate-900">PREMIER <span className="text-blue-700">ROOFING</span></span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#" className="text-sm font-semibold text-slate-600">Home</a>
            <a href="#" className="text-sm font-semibold text-slate-600">Services</a>
            <a href="#" className="text-sm font-semibold text-slate-600">Gallery</a>
            <Button size="sm" className="bg-blue-700 hover:bg-blue-800">Get Free Estimate</Button>
          </div>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=2000" 
            alt="Roofing background" 
            fill 
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge className="bg-blue-600 border-none text-white mb-6">Expert Roofing Austin, TX</Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              A Roof You Can <br />
              <span className="text-blue-500">Trust For Life.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Specializing in residential and commercial roofing services. 
              Certified, insured, and ready to protect your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-bold">
                Free Roof Inspection
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-bold">
                <Phone className="mr-2 h-5 w-5" /> (555) 000-0000
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', val: '15+' },
              { label: 'Roofs Installed', val: '2,500+' },
              { label: '5-Star Reviews', val: '400+' },
              { label: 'Certified Team', val: '100%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-blue-700">{stat.val}</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Complete Roofing Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We use high-quality materials and industry-leading techniques to ensure your roof lasts for decades.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Roof Replacement', desc: 'Full replacement with top-tier shingles or metal options.', icon: Shield },
              { title: 'Emergency Repair', desc: 'Fast response for leaks, storm damage, and missing shingles.', icon: Clock },
              { title: 'Roof Inspections', desc: 'Thorough assessments for real estate or insurance claims.', icon: CheckCircle2 },
            ].map((s, i) => (
              <Card key={i} className="bg-white border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 mb-6">{s.desc}</p>
                <Link href="#" className="text-blue-700 font-bold flex items-center hover:underline">
                  Learn More <CheckCircle2 className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Before/After Sample */}
      <section className="py-24 bg-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Real Transformations</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We've helped thousands of homeowners protect their investments. 
                Our team handles everything from insurance paperwork to final clean-up.
              </p>
              <ul className="space-y-4">
                {['Master Certified Installers', 'Lifetime Material Warranty', '10-Year Labor Warranty', 'Insurance Claim Specialists'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=1200" 
                alt="New Roof" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Simple Footer for Sample */}
      <footer className="bg-slate-900 text-white py-12">
        <Container className="text-center">
          <p className="mb-4">© 2024 Premier Roofing Austin. Licensed & Insured.</p>
          <p className="text-slate-500 text-sm">Demo Site built by PS Web Solutions</p>
        </Container>
      </footer>
    </div>
  );
}
