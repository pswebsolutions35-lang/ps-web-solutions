import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { triggerLeadAutomation } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, source } = body;

    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          company,
          service_interest: service,
          budget_range: budget,
          message,
          source: source || 'direct',
          status: 'new'
        }
      ])
      .select();

    if (error) throw error;

    // Trigger Email Automation (Async)
    triggerLeadAutomation({ 
      name, 
      email, 
      company, 
      service_interest: service, 
      message 
    }).catch(err => console.error('Email automation failed:', err));

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating lead:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
