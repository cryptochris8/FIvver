export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'website' | 'webapp' | 'landing' | 'ecommerce';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'flowcraft-studio',
    title: 'FlowCraft Studio',
    description: 'AI-themed merchandise store with apparel, drinkware, and tech accessories.',
    longDescription: 'An e-commerce store specializing in AI-themed merchandise for tech enthusiasts and developers. Features a clean, minimalist design with product categories including t-shirts, hoodies, mugs, phone cases, and desk mats. Includes email subscriptions, multiple payment options (Apple Pay, Google Pay, PayPal), and integrated analytics.',
    image: '/images/projects/flowcraft.png',
    tags: ['Shopify', 'E-Commerce', 'Dawn Theme', 'Payment Integration'],
    category: 'ecommerce',
    liveUrl: 'https://flow-craft-studio.myshopify.com/',
    featured: true,
  },
  {
    id: 'declassified-game',
    title: 'Declassified.io',
    description: 'Interactive investigation game featuring real declassified cases and branching narratives.',
    longDescription: 'An educational interactive investigation game platform featuring fact-based case scenarios. Players explore real historical events including the JFK assassination, Pentagon UAP reports, Watergate, and more through quiz systems, branching narratives, and achievement unlocks. Built with a privacy-first approach - no tracking or ads. Also launching as a mobile app.',
    image: '/images/projects/declassified.png',
    tags: ['Web Game', 'Interactive', 'Mobile App', 'Educational'],
    category: 'webapp',
    liveUrl: 'https://declassifiedio.netlify.app/',
    githubUrl: 'https://github.com/cryptochris8',
    featured: true,
  },
  {
    id: 'red-brick-road',
    title: 'The Red Brick Road',
    description: 'Book landing page for my published fantasy novel reimagining the Land of Oz.',
    longDescription: 'A promotional website for my fantasy novel that reimagines the Land of Oz. Features free chapter previews, character profiles, location guides, Goodreads integration, book giveaways, and links to purchase on Amazon Kindle. Clean, whimsical design with an emerald and gold color palette fitting the Oz theme.',
    image: '/images/projects/redbrickroad.png',
    tags: ['Landing Page', 'Book Promo', 'Netlify', 'Author Site'],
    category: 'landing',
    liveUrl: 'https://redbrickroad.netlify.app/',
    featured: true,
  },
  {
    id: 'benito-token',
    title: '$BENITO',
    description: 'Solana meme coin and marketing site I created for Bad Bunny\'s Super Bowl LX halftime show.',
    longDescription: 'A full Web3 project I built end-to-end — from deploying the $BENITO SPL token on Solana via Pump.fun to designing and developing the marketing website. The token features a 2 billion supply, 0% taxes, burned liquidity pool, and renounced contract. The site is built with Next.js 15, React 19, and Tailwind CSS, featuring a neon cyan and hot pink dark theme with animated elements, detailed tokenomics, a four-phase roadmap (La Ruta), white paper, step-by-step buying guide, and community hub linking Telegram, X, and DexScreener.',
    image: '/images/projects/benito.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Solana', 'Web3', 'Pump.fun'],
    category: 'landing',
    liveUrl: 'https://badbunnyhalftime.net/',
    githubUrl: 'https://github.com/cryptochris8/benito',
    featured: true,
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  deliveryTime: string;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'High-converting landing pages designed to capture leads and drive action.',
    features: [
      'Custom responsive design',
      'Mobile-first approach',
      'SEO optimization',
      'Contact form integration',
      'Fast loading speed',
      '2 revision rounds',
    ],
    startingPrice: '$150',
    deliveryTime: '3-5 days',
  },
  {
    id: 'business-website',
    title: 'Business Website',
    description: 'Professional multi-page websites that establish your online presence.',
    features: [
      'Up to 5 custom pages',
      'Responsive design',
      'SEO optimization',
      'Contact forms',
      'Social media integration',
      'Basic analytics setup',
      '3 revision rounds',
    ],
    startingPrice: '$500',
    deliveryTime: '7-10 days',
    popular: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    description: 'Full-featured online stores with payment processing and inventory management.',
    features: [
      'Product catalog',
      'Shopping cart & checkout',
      'Payment integration',
      'Order management',
      'Inventory tracking',
      'Customer accounts',
      'Admin dashboard',
    ],
    startingPrice: '$1,500',
    deliveryTime: '14-21 days',
  },
  {
    id: 'web-application',
    title: 'Custom Web App',
    description: 'Tailored web applications built to solve your specific business needs.',
    features: [
      'Custom functionality',
      'User authentication',
      'Database integration',
      'API development',
      'Admin panel',
      'Scalable architecture',
      'Ongoing support options',
    ],
    startingPrice: '$2,500',
    deliveryTime: '21-30 days',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'TechStart Inc.',
    content: 'Exceptional work! The landing page exceeded our expectations. Our conversion rate increased by 40% within the first month. Highly recommend!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'Professional, responsive, and delivered ahead of schedule. The website looks amazing and performs flawlessly. Will definitely work together again.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Owner',
    company: 'Bella Restaurant',
    content: 'Our new website has transformed our online presence. Reservations have doubled since launch. The attention to detail was impressive.',
    rating: 5,
  },
];
