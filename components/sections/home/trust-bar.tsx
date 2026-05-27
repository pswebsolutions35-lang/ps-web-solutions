import { Container } from '@/components/ui/container';

const partners = [
  'Premier Roofing',
  'Lens & Light',
  'Sapori Ristorante',
  'Apex HVAC',
  'Bloom Floral',
  'Elite Dentistry',
];

export function TrustBar() {
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <Container>
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-12">
          Trusted by over 50+ local businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          {partners.map((partner) => (
            <span key={partner} className="text-xl md:text-2xl font-bold text-white tracking-tighter">
              {partner}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
