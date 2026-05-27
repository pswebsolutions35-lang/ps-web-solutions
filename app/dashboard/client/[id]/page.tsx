'use client';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  MessageSquare, 
  Download, 
  ExternalLink,
  Settings,
  LayoutDashboard
} from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ClientPortalPage() {
  const params = useParams();
  const clientId = params.id;

  // Mock client data
  const project = {
    name: 'Premier Roofing Website Redesign',
    status: 'In Development',
    progress: 65,
    phases: [
      { name: 'Strategy & Architecture', status: 'completed', date: 'Oct 12' },
      { name: 'UI/UX Design', status: 'completed', date: 'Oct 19' },
      { name: 'Full-Stack Development', status: 'current', date: 'Est. Nov 5' },
      { name: 'Launch & SEO', status: 'upcoming', date: 'TBD' },
    ],
    invoices: [
      { id: 'INV-001', amount: '$1,500', status: 'Paid', date: 'Oct 10' },
      { id: 'INV-002', amount: '$1,500', status: 'Sent', date: 'Oct 25' },
    ]
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-24 pb-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LayoutDashboard className="h-4 w-4 text-brand-blue" />
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Client Portal</span>
            </div>
            <h1 className="text-3xl font-bold text-white">{project.name}</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" /> Message Team
            </Button>
            <Button size="sm">
              <Settings className="mr-2 h-4 w-4" /> Project Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Progress Card */}
            <Card className="p-8 border-white/5 bg-white/[0.02]">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Project Status</p>
                  <h3 className="text-xl font-bold text-white">{project.status}</h3>
                </div>
                <p className="text-brand-blue font-bold">{project.progress}% Complete</p>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-12">
                <div className="h-full bg-brand-blue transition-all duration-1000" style={{ width: `${project.progress}%` }} />
              </div>

              <div className="space-y-6">
                {project.phases.map((phase, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-colors ${phase.status === 'completed' ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : phase.status === 'current' ? 'border-brand-blue animate-pulse text-brand-blue' : 'border-white/10 text-gray-600'}`}>
                        {phase.status === 'completed' ? <CheckCircle2 className="h-4 w-4" /> : <span className="text-xs font-bold">{i+1}</span>}
                      </div>
                      <div>
                        <p className={`font-medium ${phase.status === 'upcoming' ? 'text-gray-600' : 'text-white'}`}>{phase.name}</p>
                        <p className="text-xs text-gray-500">{phase.date}</p>
                      </div>
                    </div>
                    {phase.status === 'completed' && (
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity h-8 px-3">
                        <Download className="h-3 w-3 mr-2" /> View Assets
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-white/5 bg-white/[0.02]">
                <h4 className="font-bold text-white mb-4">Latest Deliverables</h4>
                <div className="space-y-3">
                  {['Site Architecture.pdf', 'Homepage High-Fi Mocks', 'Brand Style Guide'].map((doc) => (
                    <div key={doc} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-300">{doc}</span>
                      </div>
                      <Download className="h-4 w-4 text-gray-500" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-white/5 bg-white/[0.02]">
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Staging Preview', icon: ExternalLink },
                    { label: 'Content Submission', icon: FileText },
                    { label: 'Technical Docs', icon: FileText },
                  ].map((link) => (
                    <div key={link.label} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <span className="text-sm text-gray-300">{link.label}</span>
                      <link.icon className="h-4 w-4 text-gray-500" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-6 border-white/5 bg-white/[0.02]">
              <h4 className="font-bold text-white mb-6">Billing & Invoices</h4>
              <div className="space-y-4 mb-6">
                {project.invoices.map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-white">{inv.id}</p>
                      <p className="text-xs text-gray-500">{inv.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">{inv.amount}</p>
                      <Badge variant={inv.status === 'Paid' ? 'secondary' : 'default'} className="text-[8px] uppercase">
                        {inv.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">View All Billing</Button>
            </Card>

            <Card className="p-6 border-brand-blue/20 bg-brand-blue/5">
              <h4 className="font-bold text-white mb-4">Your Team</h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10" />
                <div>
                  <p className="text-sm font-bold text-white">Alex Rivers</p>
                  <p className="text-xs text-gray-500">Lead Project Manager</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Have questions or need an update? Alex is your dedicated point of contact for this project.
              </p>
              <Button size="sm" className="w-full">Book a Check-in</Button>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
