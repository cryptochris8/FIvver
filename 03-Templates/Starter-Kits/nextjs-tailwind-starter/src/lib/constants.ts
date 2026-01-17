/**
 * Site configuration constants
 * Update these values for each project
 */

export const SITE_CONFIG = {
  name: 'Your Site Name',
  description: 'Your site description goes here',
  url: 'https://yoursite.com',
  ogImage: '/og-image.jpg',
  author: 'Your Name',
  email: 'hello@example.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Main Street',
    city: 'City',
    state: 'State',
    zip: '12345',
    country: 'USA',
  },
  social: {
    twitter: 'https://twitter.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
