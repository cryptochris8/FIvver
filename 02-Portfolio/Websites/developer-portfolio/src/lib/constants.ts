export const SITE_CONFIG = {
  name: 'Chris Campbell',
  title: 'Web Developer & Author',
  description: 'Web developer and published author specializing in modern web applications, interactive experiences, and e-commerce solutions. Creator of Declassified.io and author of The Red Brick Road.',
  url: 'https://chriscampbell.dev',
  email: 'chris@pregameapp.io',
  location: 'Spartanburg, SC',
  availability: 'Available for new projects',
  social: {
    github: 'https://github.com/cryptochris8',
    linkedin: 'https://linkedin.com/in/chriscampbell',
    twitter: 'https://twitter.com/chriscampbell',
    fiverr: 'https://fiverr.com/chriscam8',
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SKILLS = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'HTML5/CSS3',
    'JavaScript',
  ],
  backend: [
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Supabase',
    'REST APIs',
  ],
  tools: [
    'Git/GitHub',
    'VS Code',
    'Figma',
    'Vercel',
    'Docker',
    'AWS',
  ],
} as const;

export const STATS = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
] as const;
