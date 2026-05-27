export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  result: string;
  resultLabel: string;
  heroImage: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'premier-roofing',
    client: 'Premier Roofing',
    industry: 'Home Services',
    result: '340%',
    resultLabel: 'Increase in Monthly Leads',
    heroImage: 'https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=1200',
    problem: 'Premier Roofing had an outdated site that wasn\'t mobile-friendly and wasn\'t appearing in local search results. They were relying entirely on word-of-mouth and expensive lead aggregators.',
    solution: 'We built a high-performance, conversion-optimized site with dedicated landing pages for each service. We implemented a local SEO strategy focusing on "roofing repair Austin" and optimized their Google Business Profile.',
    metrics: [
      { label: 'Monthly Leads', value: '50+' },
      { label: 'Google Ranking', value: '#1' },
      { label: 'Conversion Rate', value: '8.4%' },
    ],
    testimonial: {
      quote: "PS Web Solutions transformed our business. We went from zero online leads to a consistent stream of high-quality inquiries every single week.",
      author: "James Miller",
      role: "Owner, Premier Roofing",
    },
  },
  {
    slug: 'lens-and-light',
    client: 'Lens & Light Studio',
    industry: 'Photography',
    result: '2X',
    resultLabel: 'Booking Rate Growth',
    heroImage: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1200',
    problem: 'Sarah had a beautiful portfolio but a frustrating booking process. Clients had to email back and forth multiple times, leading to a 40% drop-off rate during the inquiry phase.',
    solution: 'We designed a minimalist, image-centric site that puts her work front and center. Crucially, we integrated a seamless booking and payment system that allows clients to see availability and book instantly.',
    metrics: [
      { label: 'Booking Rate', value: '+110%' },
      { label: 'Admin Time', value: '-10hrs/wk' },
      { label: 'Site Speed', value: '0.8s' },
    ],
    testimonial: {
      quote: "My website is now my best employee. It handles the bookings, the payments, and the first impressions while I focus on taking photos.",
      author: "Sarah Chen",
      role: "Founder, Lens & Light",
    },
  },
  {
    slug: 'sapori-ristorante',
    client: 'Sapori Ristorante',
    industry: 'Restaurant',
    result: '40%',
    resultLabel: 'Reservation Increase',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
    problem: 'Sapori relied on third-party delivery apps that took huge commissions and a reservation system that was difficult to use on mobile.',
    solution: 'We created a moody, immersive digital experience that mirrors their physical dining room. We built a custom reservation engine and an easy-to-use digital menu that updated in real-time.',
    metrics: [
      { label: 'Reservations', value: '+40%' },
      { label: 'Mobile Traffic', value: '75%' },
      { label: 'Direct Revenue', value: '+25%' },
    ],
    testimonial: {
      quote: "Our online presence finally matches the quality of our food. The reservation system has been a game-changer for our weekend rushes.",
      author: "Marco Rossi",
      role: "Manager, Sapori",
    },
  },
];
