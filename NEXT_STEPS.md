# Next Steps - Isabel Fleury Website

Congratulations! Your website foundation is complete. Here's what to do next to get your site live.

## Immediate Actions (Week 1)

### 1. Content & Assets Preparation

**Gather Required Materials:**

- [ ] **Professional Photos**
  - Portrait photo for About page (high resolution)
  - Background images for hero sections (optional)
  - Service-related imagery (meditation, dreamwork scenes)

- [ ] **Written Content**
  - Review all page copy and make any adjustments
  - Prepare any additional service descriptions
  - Gather testimonials (if available)

- [ ] **Brand Assets**
  - Finalize logo or wordmark
  - Confirm color palette is appropriate
  - Review typography choices

### 2. Service Configuration

**Set Up Calendly:**
1. Create Calendly account at [calendly.com](https://calendly.com)
2. Configure your availability and session types:
   - Psychotherapy sessions (50-60 min)
   - Dreamwork consultations (60 min)
   - Meditation sessions (45-60 min)
3. Customize booking page with your branding
4. Copy your Calendly URL (e.g., `https://calendly.com/isabelfleury`)

**Set Up Email:**
1. Register domain email (e.g., isabel@yourdomain.com)
2. Set up email forwarding or inbox
3. Sign up for Resend at [resend.com](https://resend.com)
4. Verify your domain for email sending

### 3. Domain & Hosting

**Register Domain:**
- Choose and register domain (suggestions: isabelfleury.com)
- Popular registrars: Namecheap, Google Domains, GoDaddy

**Set Up Vercel:**
1. Create account at [vercel.com](https://vercel.com)
2. It's free for personal/hobby projects
3. Deploy directly from GitHub

## Short Term (Week 2-3)

### 4. CMS Setup

**Create Sanity Account:**
1. Sign up at [sanity.io](https://sanity.io)
2. Create new project for Isabel Fleury website
3. Note your Project ID

**Install Sanity CLI:**
```bash
npm install -g @sanity/cli
cd isabel-fleury-website
sanity init
```

**Deploy Sanity Studio:**
```bash
sanity deploy
```

This creates your content management interface at a custom URL.

### 5. Content Population

Once Sanity Studio is deployed, add:

1. **Homepage Content**
   - Hero title and subtitle
   - Service descriptions
   - Background images

2. **About Page**
   - Full biography
   - Philosophy section
   - Profile photo

3. **Service Pages**
   - Detailed descriptions
   - Session information
   - Pricing (if applicable)

### 6. Testing

**Local Testing:**
```bash
cd isabel-fleury-website
npm run dev
```
Visit http://localhost:3000 and test:
- [ ] All navigation links work
- [ ] Contact form submits (check console logs)
- [ ] Responsive design on mobile (use browser dev tools)
- [ ] All animations display smoothly
- [ ] Text is readable and properly formatted

## Medium Term (Week 4-6)

### 7. Deployment

Follow the `DEPLOYMENT.md` guide to:
1. Push code to GitHub
2. Deploy to Vercel
3. Configure environment variables
4. Connect custom domain
5. Set up SSL certificate (automatic with Vercel)

### 8. SEO & Analytics Setup

**SEO Checklist:**
- [ ] Verify meta descriptions on all pages
- [ ] Test sitemap.xml is accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Check page titles in browser tabs
- [ ] Verify OpenGraph images for social sharing

**Analytics (Optional but Recommended):**
1. Choose analytics platform:
   - **Plausible** (privacy-friendly, recommended)
   - **Google Analytics** (more detailed)
2. Add tracking code to website
3. Monitor visitor behavior and adjust

### 9. Final Touches

**Performance Audit:**
```bash
npm run build
npm start
```
Then run Lighthouse audit in Chrome DevTools:
- Target scores: >95 in all categories
- Fix any accessibility issues
- Optimize images if needed

**Browser Testing:**
Test in multiple browsers:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

## Long Term (Ongoing)

### 10. Content Strategy

**Consider Adding:**
- Blog for articles and reflections
- Resources page with:
  - Guided meditations (audio files)
  - Recommended readings
  - Dharma talks
- Newsletter signup for updates
- Testimonials section

### 11. Marketing & Outreach

**Promote Your Website:**
- Share on social media
- Add to email signature
- Include in professional directories
- Consider Google My Business listing
- Network with related practitioners

### 12. Maintenance Schedule

**Monthly:**
- Review contact form submissions
- Check analytics for insights
- Update any outdated content

**Quarterly:**
- Review and update services/pricing
- Add new content or blog posts
- Check for broken links
- Update dependencies (`npm update`)

**Annually:**
- Renew domain registration
- Review and refresh website design
- Audit content for relevance

## Support & Resources

### Learning Resources

**Next.js:**
- Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Learn course: [nextjs.org/learn](https://nextjs.org/learn)

**Sanity CMS:**
- Documentation: [sanity.io/docs](https://sanity.io/docs)
- Guides: [sanity.io/guides](https://sanity.io/guides)

**Vercel:**
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Templates: [vercel.com/templates](https://vercel.com/templates)

### Common Questions

**Q: How do I update website content?**
A: Log into your Sanity Studio (your-project.sanity.studio) and edit content directly. Changes appear on the site after a rebuild (automatic on Vercel).

**Q: How do I modify the design/colors?**
A: Edit `tailwind.config.ts` for colors and styling. See README.md for design system details.

**Q: How much does hosting cost?**
A: Vercel is free for personal/hobby sites. Sanity has a free tier. Total cost is typically just your domain (~$15/year).

**Q: Can I add a blog later?**
A: Yes! The structure supports easy expansion. We can add a blog section when you're ready.

**Q: How do I handle booking confirmations?**
A: Calendly handles all booking confirmations and reminders automatically via email.

## Need Help?

Contact your developer (Felipe Caltabiano Castro) for:
- Technical issues
- Feature additions
- Design modifications
- Deployment assistance

## Checklist Summary

**Before Going Live:**
- [ ] Domain registered and configured
- [ ] Calendly account set up
- [ ] Email service configured (Resend)
- [ ] Content and photos ready
- [ ] Sanity CMS populated
- [ ] Environment variables set in Vercel
- [ ] Website deployed to production
- [ ] SSL certificate active
- [ ] All pages tested
- [ ] Contact form working
- [ ] Calendly widget functional
- [ ] Mobile responsive
- [ ] SEO metadata verified

**First Week After Launch:**
- [ ] Monitor contact form submissions
- [ ] Check analytics data
- [ ] Test booking flow with a friend
- [ ] Share website on social platforms
- [ ] Gather feedback from colleagues

---

**Remember:** Your website is a living project. Start simple, launch, and enhance over time based on what you and your clients need.

**"May this be a space where words become silence, and silence becomes home."** 🪷
