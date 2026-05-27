import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand-blue p-1.5 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PS <span className="text-brand-blue">Web</span> Solutions
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              We build premium, conversion-optimized websites for local service businesses. 
              Turn your website into your best salesperson.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-colors text-gray-400">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Website Design', 'Local SEO', 'GBP Optimization', 'Review Management', 'AI Chatbots', 'Booking Systems'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Pricing', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Portfolio' ? '/portfolio' : '/'} className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6">
              Get tips on how to grow your local business online.
            </p>
            <form className="space-y-3">
              <Input placeholder="Email Address" className="bg-white/5 border-white/10" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} PS Web Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="/" className="text-gray-500 hover:text-white transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
