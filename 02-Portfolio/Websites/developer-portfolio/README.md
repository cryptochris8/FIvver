# Developer Portfolio

A modern, professional portfolio website showcasing web development services and projects. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design** - Clean, professional aesthetic with smooth animations
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Performance Optimized** - Fast loading with Next.js optimizations
- **SEO Ready** - Meta tags, OpenGraph, and structured data
- **5 Pages** - Home, Projects, Services, About, Contact
- **Portfolio Showcase** - Project cards with category filtering
- **Service Pricing** - Clear pricing tiers with feature lists
- **Testimonials** - Client testimonial section
- **Contact Form** - Ready for integration with your preferred backend

## Pages

| Page | Description |
|------|-------------|
| `/` | Hero section, featured projects, skills, services preview, testimonials |
| `/projects` | Full project gallery with category filtering |
| `/services` | Service offerings with pricing, process, and FAQ |
| `/about` | Personal story, journey timeline, and values |
| `/contact` | Contact form with project type and budget selectors |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter (via next/font)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Open in browser

Visit [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Info

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ...
};
```

### Add Projects

Edit `src/lib/data.ts` to add your own projects:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Short description',
    // ...
  },
];
```

### Update Services & Pricing

Edit the `SERVICES` array in `src/lib/data.ts` to match your offerings.

### Add Project Images

1. Add images to `public/images/projects/`
2. Update the `image` field in your project data
3. Replace the placeholder div in `ProjectCard.tsx` with Next.js Image component

### Colors

Customize the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your brand color */ },
  accent: { /* secondary accent */ },
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy

### Static Export

```bash
npm run build
```

Upload the `out/` folder to any static host.

## Project Structure

```
developer-portfolio/
├── public/
│   └── images/projects/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ServiceCard.tsx
│   │       └── TestimonialCard.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── data.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
└── package.json
```

## Before Going Live

- [ ] Replace placeholder project images
- [ ] Update all personal information in `constants.ts`
- [ ] Add your actual projects to `data.ts`
- [ ] Update testimonials with real client feedback
- [ ] Add favicon to `public/`
- [ ] Connect contact form to backend (e.g., Formspree, EmailJS)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit

## License

This portfolio is for personal use. Feel free to customize for your own portfolio.
