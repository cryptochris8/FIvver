# Next.js + Tailwind CSS Starter Template

A modern, production-ready starter template for building websites and web applications. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, OpenGraph, sitemap ready
- **Reusable Components** - Button, Card, Header, Footer
- **Clean Architecture** - Organized folder structure
- **Performance Optimized** - Automatic code splitting, image optimization

## Quick Start

### 1. Copy the template

```bash
cp -r nextjs-tailwind-starter ../04-Client-Projects/Active/[client-name]
cd ../04-Client-Projects/Active/[client-name]
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 4. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Project Structure

```
nextjs-tailwind-starter/
├── public/                 # Static assets
│   └── robots.txt
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   └── ui/            # Button, Card, etc.
│   ├── lib/               # Utilities and constants
│   └── styles/            # Global CSS
├── .env.example           # Environment template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization Guide

### 1. Update Site Information

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Client Site Name',
  description: 'Client site description',
  url: 'https://clientsite.com',
  // ... update all values
};
```

### 2. Update Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Client Site Name',
    template: '%s | Client Site Name',
  },
  description: 'Your custom description',
  // ...
};
```

### 3. Customize Colors

Edit `tailwind.config.ts` to update brand colors:

```typescript
colors: {
  primary: {
    500: '#yourcolor',
    600: '#yourcolor',
    // ...
  },
}
```

### 4. Update Navigation

Edit `src/components/layout/Header.tsx`:

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  // Add/remove links as needed
];
```

### 5. Add New Pages

Create a new folder in `src/app/`:

```
src/app/services/page.tsx
```

```typescript
export default function ServicesPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1>Services</h1>
      </div>
    </section>
  );
}
```

## Components

### Button

```tsx
import { Button } from '@/components/ui/Button';

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Static Export

Uncomment in `next.config.js`:

```javascript
output: 'export',
```

Then run:

```bash
npm run build
```

Upload the `out/` folder to any static hosting.

## Checklist for New Projects

- [ ] Copy template to client project folder
- [ ] Update `SITE_CONFIG` in `src/lib/constants.ts`
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Replace logo text in Header/Footer
- [ ] Update navigation links
- [ ] Add/remove pages as needed
- [ ] Update contact information
- [ ] Add favicon to `public/`
- [ ] Set up environment variables
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit before delivery

## License

This template is for use in Fiverr client projects.

---

**Delivery Time Estimates:**
- Basic customization: ~2 days
- Full website (5-7 pages): ~5-7 days
- With backend integration: ~10-14 days
