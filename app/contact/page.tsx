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
import * as z from 'zod';
import { useState } from 'react';

const contactSchema = z.z.object({
  name: z.z.string().min(2, 'Name must be at least 2 characters'),
  email: z.z.string().email('Invalid email address'),
  phone: z.z.string().min(10, 'Invalid phone number'),
  company: z.z.string().optional(),
  service: z.z.string().min(1, 'Please select a service'),
  budget: z.z.string().min(1, 'Please select a budget range'),
  message: z.z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.z.infer<typeof contactSchema>;

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
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'contact-page'
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error(result.error || 'Failed to submit lead');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="default" className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something <br />
            <span className="text-brand-blue">Great Together</span>
          </h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? We'd love to hear from you. 
            Fill out the form below and we'll get back to you within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@pswebsolutions.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
                  { icon: MapPin, label: 'Location', value: 'Austin, Texas' },
                  { icon: Clock, label: 'Response Time', value: 'Within 2 hours guaranteed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                    <div className="h-10 w-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold text-white">Why Choose Us?</h2>
              <ul className="space-y-3">
                {[
                  '50+ businesses served',
                  '98% client satisfaction rate',
                  'Conversion-focused approach',
                  'Dedicated project manager',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-colors text-gray-400 bg-white/5">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 border-white/10">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="h-20 w-20 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-8">
                    Thank you for reaching out. A member of our team will contact you within the next 2 hours.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Full Name</label>
                      <Input placeholder="John Doe" {...register('name')} />
                      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email Address</label>
                      <Input type="email" placeholder="john@example.com" {...register('email')} />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Phone Number</label>
                      <Input placeholder="+1 (555) 000-0000" {...register('phone')} />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Company Name (Optional)</label>
                      <Input placeholder="Acme Inc." {...register('company')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Service Interested In</label>
                      <select 
                        className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all"
                        {...register('service')}
                      >
                        <option value="" className="bg-black">Select a service</option>
                        <option value="web-design" className="bg-black">Website Design</option>
                        <option value="seo" className="bg-black">Local SEO</option>
                        <option value="gbp" className="bg-black">GBP Optimization</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                      {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Budget Range</label>
                      <select 
                        className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all"
                        {...register('budget')}
                      >
                        <option value="" className="bg-black">Select budget</option>
                        <option value="1500-3000" className="bg-black">$1,500 - $3,000</option>
                        <option value="3000-5000" className="bg-black">$3,000 - $5,000</option>
                        <option value="5000+" className="bg-black">$5,000+</option>
                      </select>
                      {errors.budget && <p className="text-xs text-red-500">{errors.budget.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your goals and what you're looking for..." 
                      {...register('message')}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" className="w-full h-14 text-lg" isLoading={isSubmitting}>
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-2xl overflow-hidden border border-white/10 h-[400px] bg-white/5 relative flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Our Office</h3>
            <p className="text-gray-400">Austin, Texas, United States</p>
          </div>
          {/* In a real app, you'd embed a Google Map iframe here */}
        </div>
      </Container>
    </div>
  );
}
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
