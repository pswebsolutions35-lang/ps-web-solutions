import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function GET() {
  try {
    // Fetch total leads
    const { count: totalLeads, error: leadsError } = await supabaseAdmin
      .from('leads')
      .select('*', { count: 'exact', head: true });

    if (leadsError) throw leadsError;

    // Fetch won leads for conversion rate
    const { count: wonLeads, error: wonError } = await supabaseAdmin
      .from('leads')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'won');

    if (wonError) throw wonError;

    // Fetch active projects
    const { count: activeProjects, error: projectsError } = await supabaseAdmin
      .from('projects')
      .select('*', { count: 'exact', head: true })
      .not('status', 'eq', 'completed');

    if (projectsError) throw projectsError;

    // Fetch monthly revenue (sum of paid invoices this month)
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const { data: revenueData, error: revenueError } = await supabaseAdmin
      .from('invoices')
      .select('amount')
      .eq('status', 'paid')
      .gte('paid_date', startOfMonth.toISOString());

    if (revenueError) throw revenueError;

    const monthlyRevenue = revenueData.reduce((sum, inv) => sum + Number(inv.amount), 0);

    const conversionRate = totalLeads && totalLeads > 0 
      ? ((wonLeads || 0) / totalLeads) * 100 
      : 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalLeads: totalLeads || 0,
        conversionRate: `${conversionRate.toFixed(1)}%`,
        activeProjects: activeProjects || 0,
        monthlyRevenue: `$${monthlyRevenue.toLocaleString()}`
      }
    });
  } catch (error: any) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
