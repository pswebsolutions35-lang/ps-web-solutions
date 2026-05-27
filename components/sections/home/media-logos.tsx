import { Container } from '@/components/ui/container';

export function MediaLogos() {
  const logos = [
    'Forbes', 'Business Insider', 'TechCrunch', 'Wired', 'The Verge', 'Entrepreneur'
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.01]">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
          Our founders have been featured in
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale contrast-200">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-black italic text-white tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
