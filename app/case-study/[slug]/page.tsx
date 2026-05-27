'use client';

import { useParams, notFound } from 'next/navigation';
import { caseStudies } from '@/lib/case-studies';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyPage() {
  const params = useParams();
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge variant="default" className="mb-4">{study.industry}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {study.client}: <br />
              <span className="text-brand-blue">{study.resultLabel}</span>
            </h1>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-7xl font-black text-white">{study.result}</span>
              <p className="text-gray-400 max-w-[200px] leading-tight">improvement in key performance indicators.</p>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={study.heroImage} alt={study.client} fill className="object-cover" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {study.metrics.map((metric, i) => (
            <Card key={i} className="text-center p-8 bg-white/5 border-white/10">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">{metric.label}</p>
              <p className="text-4xl font-bold text-brand-blue">{metric.value}</p>
            </Card>
          ))}
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">The Challenge</h3>
            <p className="text-gray-400 leading-relaxed text-lg">{study.problem}</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Our Solution</h3>
            <p className="text-gray-400 leading-relaxed text-lg">{study.solution}</p>
            <ul className="space-y-3">
              {['Custom Design', 'SEO Optimization', 'Lead Capture Systems'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <Card className="bg-brand-blue/10 border-brand-blue/20 p-12 text-center mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />
          <blockquote className="text-2xl md:text-3xl italic text-white mb-8 max-w-4xl mx-auto">
            "{study.testimonial.quote}"
          </blockquote>
          <div>
            <p className="font-bold text-white">{study.testimonial.author}</p>
            <p className="text-brand-blue text-sm">{study.testimonial.role}</p>
          </div>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <SectionTitle 
            title="Want results like this?" 
            subtitle="Let's build a website that becomes your business's best asset."
          />
          <Link href="/booking">
            <Button size="lg" className="h-14 px-12 text-lg">Book Your Free Strategy Call</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
