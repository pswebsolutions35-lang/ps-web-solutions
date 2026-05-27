'use client';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  TrendingUp, 
  Briefcase, 
  DollarSign, 
  Plus, 
  Search, 
  MoreHorizontal,
  Clock,
  Loader2,
  Calendar
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubscriptionCard } from '@/components/dashboard/subscription-card';

export default function DashboardPage() {
  const [stats, setStats] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, leadsRes] = await Promise.all([
          fetch('/api/dashboard/stats'),
          fetch('/api/leads')
        ]);

        const statsData = await statsRes.json();
        const leadsData = await leadsRes.json();

        if (statsData.success) {
          const statsArray = [
            { label: 'Total Leads', value: statsData.stats.totalLeads.toString(), icon: Users, color: 'text-blue-500' },
            { label: 'Conv. Rate', value: statsData.stats.conversionRate, icon: TrendingUp, color: 'text-green-500' },
            { label: 'Active Projects', value: statsData.stats.activeProjects.toString(), icon: Briefcase, color: 'text-purple-500' },
            { label: 'Monthly Rev', value: statsData.stats.monthlyRevenue, icon: DollarSign, color: 'text-yellow-500' },
          ];
          setStats(statsArray);
        }

        if (leadsData.success) {
          setLeads(leadsData.data.slice(0, 5)); // Show recent 5
        }

        // Mock subscription for demo purposes
        setSubscription({
          id: 'sub_123',
          plan_name: 'Growth + SEO',
          amount: 500,
          status: 'active',
          next_billing: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString()
        });

      } catch (error) {
        console.error('Dashboard fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#050505] min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-brand-blue animate-spin" />
      </div>
    );
  }
  return (
    <div className="bg-[#050505] min-h-screen pt-24 pb-12">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Agency Dashboard</h1>
            <p className="text-gray-500">Welcome back. Here's what's happening today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" /> New Lead
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6 border-white/5 bg-white/[0.02] hover:bg-white/[0.04]">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-none">+12%</Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Leads */}
          <div className="lg:col-span-8">
            <Card className="p-0 border-white/5 bg-white/[0.02] overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">Recent Leads</h3>
                <Button variant="ghost" size="sm" className="text-brand-blue">View All</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-gray-500 bg-white/[0.02]">
                      <th className="px-6 py-4 font-bold">Contact</th>
                      <th className="px-6 py-4 font-bold">Service</th>
                      <th className="px-6 py-4 font-bold">Status</th>
                      <th className="px-6 py-4 font-bold">Date</th>
                      <th className="px-6 py-4 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {leads.length > 0 ? (
                      leads.map((lead, i) => (
                        <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                          <td className="px-6 py-4">
                            <p className="text-white font-medium">{lead.name}</p>
                            <p className="text-xs text-gray-500">{lead.company || 'Personal'}</p>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-400">{lead.service_interest || 'General'}</td>
                          <td className="px-6 py-4">
                            <Badge variant={lead.status === 'new' ? 'default' : 'secondary'} className="text-[10px] uppercase">
                              {lead.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-gray-600 hover:text-white transition-colors">
                              <MoreHorizontal className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                          No leads found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Quick Actions / Activity */}
          <div className="lg:col-span-4 space-y-8">
            <SubscriptionCard subscription={subscription} />

            <Card className="p-6 border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Invoice', icon: DollarSign },
                  { label: 'Meeting', icon: Clock },
                  { label: 'Add Site', icon: Plus },
                  { label: 'Analytics', icon: TrendingUp },
                ].map((action, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-brand-blue/20 border border-white/5 transition-all group">
                    <action.icon className="h-6 w-6 text-gray-400 group-hover:text-brand-blue mb-2" />
                    <span className="text-xs font-medium text-gray-500 group-hover:text-white">{action.label}</span>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-bold text-white mb-6">Upcoming Meetings</h3>
              <div className="space-y-4">
                {[
                  { time: '10:00 AM', title: 'Miller Roofing Audit', type: 'Strategy Call' },
                  { time: '02:30 PM', title: 'Sapori Menu Review', type: 'Design Check' },
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                    <div className="text-brand-blue font-bold text-xs shrink-0 pt-1">{m.time}</div>
                    <div>
                      <p className="text-sm font-bold text-white">{m.title}</p>
                      <p className="text-xs text-gray-500">{m.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
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
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
