'use client';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ChevronRight, ArrowLeft, Upload, Globe, Palette, Target } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    industry: '',
    colors: '',
    competitors: '',
    goals: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const steps = [
    { id: 1, title: 'Company Info', icon: Globe },
    { id: 2, title: 'Design Preferences', icon: Palette },
    { id: 3, title: 'Content & Goals', icon: Target },
    { id: 4, title: 'Complete', icon: CheckCircle2 },
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-24 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Progress Stepper */}
          <div className="flex justify-between mb-12">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2 relative flex-1">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all z-10 ${step >= s.id ? 'border-brand-blue bg-brand-blue text-white' : 'border-white/10 bg-white/5 text-gray-500'}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider ${step >= s.id ? 'text-white' : 'text-gray-600'}`}>{s.title}</span>
                {s.id !== 4 && (
                  <div className={`absolute h-0.5 w-full top-5 left-1/2 -z-0 ${step > s.id ? 'bg-brand-blue' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>

          <Card className="p-8 md:p-12 border-white/10 bg-white/[0.02]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Tell us about your business</h2>
                    <p className="text-gray-500">We'll use this information for your GBP and SEO setup.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Legal Company Name</label>
                      <Input placeholder="Acme Roofing LLC" value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Business Address (Public)</label>
                      <Input placeholder="123 Main St, Austin, TX 78701" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Industry</label>
                      <Input placeholder="Residential Roofing" value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} />
                    </div>
                  </div>
                  <Button onClick={nextStep} className="w-full h-14">Continue <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <button onClick={prevStep} className="flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-4"><ArrowLeft className="h-4 w-4" /> Back</button>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Design & Branding</h2>
                    <p className="text-gray-500">Help our designers understand your vision.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Preferred Color Palette</label>
                      <Input placeholder="e.g. Navy Blue and White, Dark Mode, Luxury" value={formData.colors} onChange={(e) => setFormData({...formData, colors: e.target.value})} />
                    </div>
                    <div className="p-8 border-2 border-dashed border-white/10 rounded-2xl text-center bg-white/5">
                      <Upload className="h-8 w-8 text-gray-500 mx-auto mb-4" />
                      <p className="text-sm text-white font-bold mb-1">Upload Your Logo</p>
                      <p className="text-xs text-gray-500">SVG, PNG, or AI formats preferred.</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Competitor Websites (Links)</label>
                      <textarea className="flex min-h-[100px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-blue outline-none" placeholder="https://competitor.com" value={formData.competitors} onChange={(e) => setFormData({...formData, competitors: e.target.value})} />
                    </div>
                  </div>
                  <Button onClick={nextStep} className="w-full h-14">Continue <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <button onClick={prevStep} className="flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-4"><ArrowLeft className="h-4 w-4" /> Back</button>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Project Goals</h2>
                    <p className="text-gray-500">What is the #1 goal for your new website?</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Generate more phone calls',
                      'Increase form submissions',
                      'Build brand authority',
                      'Online bookings/scheduling',
                    ].map((goal) => (
                      <button key={goal} onClick={() => setFormData({...formData, goals: goal})} className={`w-full p-4 rounded-xl border text-left transition-all ${formData.goals === goal ? 'border-brand-blue bg-brand-blue/10 text-white' : 'border-white/10 bg-white/5 text-gray-400'}`}>
                        {goal}
                      </button>
                    ))}
                  </div>
                  <Button onClick={nextStep} className="w-full h-14">Finalize Onboarding</Button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="h-24 w-24 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="h-12 w-12 text-brand-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Onboarding Complete!</h2>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    We've received your information. Your project manager will reach out within 
                    24 hours to schedule our kickoff call.
                  </p>
                  <Button onClick={() => window.location.href = '/dashboard'} className="w-full h-14">Go to My Dashboard</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </Container>
    </div>
  );
}
