export const PRICING_TIERS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: 1500,
    priceId: process.env.STRIPE_PRICE_STARTER || 'price_starter_placeholder',
    type: 'one-time',
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    price: 3000,
    priceId: process.env.STRIPE_PRICE_GROWTH || 'price_growth_placeholder',
    type: 'one-time',
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    price: 5000,
    priceId: process.env.STRIPE_PRICE_PREMIUM || 'price_premium_placeholder',
    type: 'one-time',
  },
};

export const MAINTENANCE_PLANS = {
  maintenance: {
    id: 'maintenance',
    name: 'Maintenance',
    price: 150,
    priceId: process.env.STRIPE_PRICE_MAINTENANCE || 'price_maintenance_placeholder',
    type: 'recurring',
    interval: 'month',
  },
  growth_seo: {
    id: 'growth-seo',
    name: 'Growth + SEO',
    price: 500,
    priceId: process.env.STRIPE_PRICE_GROWTH_SEO || 'price_growth_seo_placeholder',
    type: 'recurring',
    interval: 'month',
  },
};

export type PricingTier = keyof typeof PRICING_TIERS;
export type MaintenancePlan = keyof typeof MAINTENANCE_PLANS;
