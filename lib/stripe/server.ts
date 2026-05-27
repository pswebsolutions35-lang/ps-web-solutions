import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia' as any, // Use latest stable version or current
  appInfo: {
    name: 'PS Web Solutions Agency',
    version: '0.1.0',
  },
});
