# Isabel Fleury Website

A serene, contemplative website for psychotherapy, dreamwork, and meditation services. Built with Next.js 14 and designed as a digital sanctuary.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and parallax effects
- **Content Management**: Sanity CMS integration for easy content updates
- **Contact Forms**: React Hook Form with email integration
- **Booking Integration**: Calendly widget for session scheduling
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Fully Responsive**: Mobile-first design approach
- **Performance**: Optimized for Lighthouse scores >95

## Project Structure

```
isabel-fleury-website/
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Main website routes
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── psychotherapy/ # Psychotherapy service
│   │   ├── dreamwork/     # Dreamwork service
│   │   ├── meditation/    # Meditation service
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   │   └── contact/       # Form submission endpoint
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── manifest.ts        # Web app manifest
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── ServiceCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── CalendlyWidget.tsx
│   ├── sections/          # Page sections
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── animations/        # Animation wrappers
│       ├── FadeIn.tsx
│       └── ParallaxSection.tsx
├── lib/
│   ├── sanity/            # Sanity configuration
│   │   ├── config.ts
│   │   └── client.ts
│   └── utils/             # Utilities
├── sanity/                # Sanity Studio
│   └── schemas/           # Content schemas
│       ├── homepage.ts
│       ├── service.ts
│       ├── about.ts
│       └── index.ts
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd isabel-fleury-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your configuration:
```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# Email Service (Resend)
RESEND_API_KEY=your_key

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Configuration

### Setting Up Sanity CMS

1. Create a Sanity project at [sanity.io](https://www.sanity.io/)
2. Add your project ID to `.env.local`
3. Install Sanity CLI: `npm install -g @sanity/cli`
4. Initialize Sanity Studio: `sanity init`
5. Deploy Studio: `sanity deploy`

### Email Integration

The contact form uses Resend for email delivery. To enable:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env.local`
4. Update `/app/api/contact/route.ts` with your email configuration

### Calendly Integration

1. Create a Calendly account
2. Get your scheduling link
3. Add it as `NEXT_PUBLIC_CALENDLY_URL` in `.env.local`

## Design System

### Colors

- **Mist White**: `#FAFAF8` - Primary background
- **Sand Beige**: `#F5F2ED` - Secondary background
- **Sage Green**: `#8FA68E` - Primary accent
- **Moonlight Blue**: `#A6B8CC` - Secondary accent
- **Warm Gray**: `#1E1E1E` - Text primary

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- **Line Height**: 1.8 for relaxed reading

### Animations

- Fade-in on scroll: 0.8s ease
- Parallax hero sections
- Smooth hover transitions: 300ms
- Mobile-friendly animations

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any Node.js hosting platform:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## Performance

Target metrics:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 95
- Bundle Size: < 200KB initial

## Browser Support

- Chrome/Edge (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Mobile Safari/Chrome

## Accessibility

- WCAG AA compliant
- Keyboard navigation
- Screen reader support
- Focus indicators
- Color contrast ratio > 4.5:1

## Contributing

This is a private project for Isabel Fleury's website.

## License

Private - All rights reserved

## Contact

For questions about this project:
- Developer: Felipe Caltabiano Castro
- Client: Isabel Fleury
- Website: [isabelfleury.com](https://isabelfleury.com)

---

**"May this be a space where words become silence, and silence becomes home."**
