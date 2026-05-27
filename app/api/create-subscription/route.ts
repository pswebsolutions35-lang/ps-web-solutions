import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/server';
import { MAINTENANCE_PLANS } from '@/lib/stripe/pricing';

export async function POST(request: Request) {
  try {
    const { plan_id, client_email, client_id } = await request.json();

    const plan = Object.values(MAINTENANCE_PLANS).find(p => p.id === plan_id);

    if (!plan || !client_email) {
      return NextResponse.json({ success: false, error: 'Invalid plan or missing email' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      customer_email: client_email,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
      metadata: {
        client_id: client_id || '',
        plan_id: plan.id,
        type: 'subscription',
      },
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error: any) {
    console.error('Error creating subscription:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
