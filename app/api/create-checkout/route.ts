import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/server';
import { PRICING_TIERS } from '@/lib/stripe/pricing';

export async function POST(request: Request) {
  try {
    const { tier_id, client_email } = await request.json();

    const tier = Object.values(PRICING_TIERS).find(t => t.id === tier_id);

    if (!tier) {
      return NextResponse.json({ success: false, error: 'Invalid tier' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: tier.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: client_email || undefined,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
      metadata: {
        tier_id: tier.id,
        type: 'one-time-build',
      },
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
