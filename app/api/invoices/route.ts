import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { client_id, amount, description, due_date } = body;

    if (!client_id || !amount || !description || !due_date) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('invoices')
      .insert([
        {
          client_id,
          amount,
          description,
          due_date,
          status: 'draft'
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating invoice:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('invoices')
      .select(`
        *,
        clients (
          company_name,
          contact_name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
