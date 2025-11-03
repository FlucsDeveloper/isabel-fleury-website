# Deployment Guide

This guide will help you deploy the Isabel Fleury website to production.

## Prerequisites

Before deploying, ensure you have:

1. A GitHub account (for version control)
2. A Vercel account (recommended) or other hosting provider
3. Sanity.io account (for CMS)
4. Resend account (for contact form emails)
5. Calendly account (for booking)
6. Domain name configured

## Step 1: Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/your-username/isabel-fleury-website.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Sanity CMS

1. **Create Sanity Project**
   ```bash
   npm install -g @sanity/cli
   cd sanity
   sanity init
   ```

2. **Configure Sanity**
   - Choose a project name
   - Select "Production" dataset
   - Copy the Project ID

3. **Deploy Sanity Studio**
   ```bash
   sanity deploy
   ```
   This creates a studio at: `https://your-project.sanity.studio`

4. **Add CORS Origins**
   - Go to sanity.io/manage
   - Select your project
   - Add your domain(s) to CORS origins

## Step 3: Configure Email Service (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Create an API key
4. Save for environment variables

## Step 4: Set Up Calendly

1. Create account at [calendly.com](https://calendly.com)
2. Set up your availability
3. Copy your scheduling link
4. Format: `https://calendly.com/your-username`

## Step 5: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables (see below)
5. Click "Deploy"

### Option B: Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Environment Variables

Add these in your Vercel dashboard (Settings → Environment Variables):

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# Email Service
RESEND_API_KEY=your_resend_key

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username

# Analytics (Optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Step 6: Configure Domain

### In Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning

### DNS Configuration:

For most domain providers:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 7: Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check Calendly widget functionality
- [ ] Verify responsive design on mobile
- [ ] Test all navigation links
- [ ] Run Lighthouse audit (target >95 score)
- [ ] Test in multiple browsers
- [ ] Verify SEO metadata
- [ ] Check sitemap.xml accessibility
- [ ] Test with screen reader (accessibility)

## Step 8: Populate Content in Sanity

1. Go to your Sanity Studio URL
2. Create content for:
   - Homepage hero section
   - Service descriptions
   - About page content
   - Any custom content

## Step 9: Set Up Analytics (Optional)

### Plausible Analytics:

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Add the domain to environment variables
4. Add script to `app/layout.tsx`:

```tsx
<Script
  defer
  data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
  src="https://plausible.io/js/script.js"
/>
```

### Google Analytics:

Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

## Continuous Deployment

Once configured, Vercel automatically deploys:

- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Monitoring

Monitor your site using:

1. **Vercel Dashboard**: Real-time logs and analytics
2. **Sanity**: Content updates and history
3. **Resend**: Email delivery status
4. **Lighthouse**: Run periodic performance audits

## Troubleshooting

### Build Fails

Check Vercel build logs for errors. Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

### Contact Form Not Working

1. Verify `RESEND_API_KEY` is set
2. Check domain verification in Resend
3. Review API route logs in Vercel

### Calendly Widget Not Showing

1. Verify `NEXT_PUBLIC_CALENDLY_URL` is correct
2. Check browser console for errors
3. Ensure Calendly script is loading

### Images Not Loading from Sanity

1. Verify Sanity project ID is correct
2. Check CORS settings in Sanity
3. Ensure images are uploaded in Sanity Studio

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update dependencies"
git push
```

### Backup

- Sanity: Automatic backups included
- Git: Repository serves as code backup
- Content: Export from Sanity Studio periodically

## Support

For issues or questions:
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Sanity: [sanity.io/docs](https://sanity.io/docs)

---

## Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Lint code
npm run lint

# Deploy to Vercel
vercel --prod

# Deploy Sanity Studio
cd sanity && sanity deploy
```

## Performance Optimization

After deployment, optimize:

1. **Images**: Use Next.js Image component
2. **Fonts**: Subset and preload fonts
3. **Code Splitting**: Lazy load heavy components
4. **Caching**: Configure via Vercel
5. **CDN**: Automatic with Vercel

---

**Deployment Complete!**

Visit your site at your configured domain and verify everything works as expected.
