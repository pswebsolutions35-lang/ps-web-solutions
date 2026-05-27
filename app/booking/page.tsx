'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  CheckCircle2, 
  ChevronRight,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return {
    date: d,
    label: d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }),
    fullDate: d.toLocaleDateString('en-US', { dateStyle: 'full' })
  };
});

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<typeof nextSevenDays[0] | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    notes: ''
  });

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.website,
          message: `Booking: ${selectedDate?.fullDate} at ${selectedTime}. Notes: ${formData.notes}`,
          service_interest: 'consultation',
          source: 'booking-page'
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStep(3);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to book. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">Free Strategy Call</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your Free <span className="text-brand-blue">Strategy Call</span>
            </h1>
            <p className="text-lg text-gray-400">
              30-minute call. No pitch. Just a plan to grow your business.
            </p>
          </div>

          <Card className="p-0 overflow-hidden border-white/10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Side: Info */}
              <div className="md:col-span-4 bg-white/5 p-8 border-b md:border-b-0 md:border-r border-white/10">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Project Consultant</p>
                    <h3 className="text-xl font-bold text-white">Strategy Consultation</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="h-5 w-5 text-brand-blue" />
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Video className="h-5 w-5 text-brand-blue" />
                      <span>Google Meet</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">What we'll cover:</h4>
                    <ul className="space-y-3">
                      {[
                        'Your current online presence',
                        'Competitor analysis',
                        'Growth opportunities',
                        'Custom website roadmap',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                          <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side: Scheduler */}
              <div className="md:col-span-8 p-8 min-h-[500px] flex flex-col">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-white">Select a Date & Time</h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {nextSevenDays.map((d, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedDate(d)}
                              className={`p-3 rounded-xl border transition-all text-center ${
                                selectedDate?.date === d.date
                                  ? 'border-brand-blue bg-brand-blue/10 text-white'
                                  : 'border-white/5 bg-white/5 text-gray-400 hover:border-white/20'
                              }`}
                            >
                              <span className="text-xs block mb-1 opacity-60">{d.label.split(' ')[0]}</span>
                              <span className="text-lg font-bold">{d.label.split(' ')[1]}</span>
                            </button>
                          ))}
                        </div>

                        {selectedDate && (
                          <div className="space-y-4">
                            <h4 className="text-sm font-medium text-gray-400">{selectedDate.fullDate}</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                                    selectedTime === time
                                      ? 'border-brand-blue bg-brand-blue text-white'
                                      : 'border-white/5 bg-white/5 text-white hover:border-brand-blue/50'
                                  }`}
                                >
                                  <span className="font-medium">{time}</span>
                                  {selectedTime === time && <ChevronRight className="h-4 w-4" />}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {selectedTime && (
                        <div className="pt-6 mt-auto">
                          <Button className="w-full h-12" onClick={handleNextStep}>
                            Next Step
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <button onClick={handleBackStep} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to calendar
                      </button>
                      <h3 className="text-xl font-bold text-white">Your Details</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase">Full Name</label>
                            <Input 
                              placeholder="John Doe" 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase">Email Address</label>
                            <Input 
                              type="email" 
                              placeholder="john@example.com" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-gray-500 uppercase">Business Website (Optional)</label>
                          <Input 
                            placeholder="https://yourbusiness.com" 
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-gray-500 uppercase">Anything else you'd like to share?</label>
                          <textarea 
                            className="flex min-h-[100px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-blue outline-none" 
                            value={formData.notes}
                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                          />
                        </div>
                        <Button 
                          className="w-full h-14 text-lg" 
                          onClick={handleSubmit}
                          isLoading={isSubmitting}
                        >
                          Confirm Booking
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 flex flex-col items-center justify-center h-full"
                    >
                      <div className="h-20 w-20 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-brand-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Strategy Call Booked!</h3>
                      <p className="text-gray-400 mb-8 max-w-md">
                        We've sent a calendar invitation to your email. We look forward to helping you grow your business.
                      </p>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 w-full mb-8">
                        <p className="text-sm text-gray-500 mb-2">DATE & TIME</p>
                        <p className="text-white font-bold">{selectedDate?.fullDate} at {selectedTime}</p>
                      </div>
                      <Link href="/" className="w-full">
                        <Button variant="outline" className="w-full">Return Home</Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Card>

          {/* Checklist */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">How to prepare:</h4>
              <ul className="space-y-4">
                {[
                  'Have your current website URL ready',
                  'Identify your top 3 local competitors',
                  'Know your primary business goal for the next 6 months',
                  'Bring a list of any specific features you need',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="h-6 w-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs shrink-0 mt-0.5">{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-white mb-4">Why this call?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Most agencies start with a sales pitch. We start with a strategy. 
                In 30 minutes, we'll give you more value than most businesses get 
                from a $2,000 consultant. No pressure, no obligations.
              </p>
            </div>
          </div>
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
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
