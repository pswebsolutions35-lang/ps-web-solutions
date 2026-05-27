'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { TestimonialCard } from '@/components/ui/testimonial-card';

const testimonials = [
  {
    quote: "PS Web Solutions didn't just build us a pretty site; they built us a lead machine. Our leads have tripled in just three months.",
    author: "James Miller",
    role: "Owner, Premier Roofing",
  },
  {
    quote: "The booking system integration has saved me hours of manual work every week. My clients love the ease of use.",
    author: "Sarah Chen",
    role: "Founder, Lens & Light Studio",
  },
  {
    quote: "Our Google Maps ranking jumped from #12 to #2 in less than 60 days. The ROI has been incredible.",
    author: "Marco Rossi",
    role: "Manager, Sapori Ristorante",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
      
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Real results from real local businesses."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
