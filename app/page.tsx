import { Hero } from '@/components/sections/home/hero';
import { TrustBar } from '@/components/sections/home/trust-bar';
import { MediaLogos } from '@/components/sections/home/media-logos';
import { Statistics } from '@/components/sections/home/statistics';
import { BeforeAfter } from '@/components/sections/home/before-after';
import { ServicesPreview } from '@/components/sections/home/services-preview';
import { FeaturedPortfolio } from '@/components/sections/home/featured-portfolio';
import { Testimonials } from '@/components/sections/home/testimonials';
import { Process } from '@/components/sections/home/process';
import { FAQ } from '@/components/sections/home/faq';
import { FinalCTA } from '@/components/sections/home/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <MediaLogos />
      <Statistics />
      <BeforeAfter />
      <ServicesPreview />
      <FeaturedPortfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
