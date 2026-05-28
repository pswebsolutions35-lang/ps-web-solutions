'use client';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin 
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="default" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something <span className="text-brand-blue">Great Together</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Tell us about your project and we'll create a custom strategy to grow your business.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <Card className="p-8 border-white/10 bg-white/[0.02]">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name *"
                        {...register('name')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="Your Email *"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Phone Number"
                        {...register('phone')}
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Company Name"
                        {...register('company')}
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      {...register('service')}
                      className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="" className="bg-black">Select a service *</option>
                      <option value="web-design" className="bg-black">Website Design</option>
                      <option value="seo" className="bg-black">SEO</option>
                      <option value="gbp" className="bg-black">Google Business Profile</option>
                      <option value="booking" className="bg-black">Booking System</option>
                      <option value="chatbot" className="bg-black">AI Chatbot</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <select
                      {...register('budget')}
                      className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="" className="bg-black">Budget Range *</option>
                      <option value="1500" className="bg-black">$1,500 - Starter</option>
                      <option value="3000" className="bg-black">$3,000 - Growth</option>
                      <option value="5000" className="bg-black">$5,000+ - Premium</option>
                      <option value="custom" className="bg-black">Custom / Not Sure</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your project *"
                      className={errors.message ? 'border-red-500' : ''}
                      {...register('message')}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">hello@pswebsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">(512) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Austin, Texas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Response Time</h4>
                    <p className="text-gray-400">We respond within 2 hours</p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <Card className="p-6 border-white/10 bg-white/[0.02]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-sm text-gray-500">Sites Built</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">2hr</p>
                    <p className="text-sm text-gray-500">Avg Response</p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="h-12 w-12 flex items-center justify-center rounded-xl border border-white/10 hover:border-brand-blue hover:text-brand-blue text-gray-500 transition-all">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}