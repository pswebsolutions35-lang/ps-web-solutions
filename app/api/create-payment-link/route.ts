import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/server';

export async function POST(request: Request) {
  try {
    const { amount, description, client_email, invoice_id } = await request.json();

    if (!amount || !description || !client_email) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // For invoicing, we create a specialized checkout session
    // This allows for dynamic amounts if we don't have a fixed price ID
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: description,
            },
            unit_amount: Math.round(amount * 100), // in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: client_email,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
      metadata: {
        invoice_id: invoice_id || '',
        type: 'invoice',
      },
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error: any) {
    console.error('Error creating payment link:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
