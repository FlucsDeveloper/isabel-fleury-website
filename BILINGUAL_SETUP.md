# Bilingual Website Setup - Portuguese & English 🇧🇷🇬🇧

## ✅ What's Been Configured

Your website now has a complete bilingual infrastructure ready for Portuguese and English content!

### Current Setup

1. **i18n Configuration** (`i18n-config.ts`)
   - Supports: English (en) and Portuguese (pt)
   - Default language: English

2. **Middleware** (`middleware.ts`)
   - Automatically handles language routing
   - Detects user's language preference
   - Routes `/pt/*` for Portuguese, `/` for English

3. **Translation Files**
   - `lib/translations/en.json` - Complete English translations
   - `lib/translations/pt.json` - Complete Portuguese translations
   - Includes: Navigation, homepage, about page, footer, and buttons

4. **Language Switcher**
   - Added to navigation (desktop and mobile)
   - EN/PT toggle buttons
   - Saves preference in cookie
   - Appears in top navigation bar

### How It Works

**URL Structure:**
- English (default): `https://yourdomain.com/about`
- Portuguese: `https://yourdomain.com/pt/about`

**Language Detection:**
1. User clicks EN or PT button
2. Cookie is set with preference
3. User is redirected to appropriate URL
4. Future visits remember preference

---

## 🎨 What You'll See Now

**Top Navigation:**
- New language switcher: **EN | PT** buttons
- Active language highlighted in sage green
- Works on both desktop and mobile

**Current Behavior:**
- Clicking PT will redirect to `/pt/` routes
- Clicking EN will redirect back to `/` routes
- Language preference is saved

---

## 📋 Next Steps: Implementing Portuguese Content

There are two approaches to complete the bilingual implementation:

### Option A: Quick Setup (Duplicate Pages)

Create Portuguese versions by duplicating pages:

```bash
# Create pt directory structure
mkdir -p app/pt/{about,psychotherapy,dreamwork,meditation,contact}

# Copy English pages as starting point
cp app/page.tsx app/pt/page.tsx
cp app/about/page.tsx app/pt/about/page.tsx
# ... repeat for other pages
```

Then translate the content in each Portuguese file.

### Option B: Dynamic Routing (Recommended for Scale)

Use Next.js dynamic routes with `[lang]` parameter:

```bash
# Restructure app directory
mkdir -p app/[lang]
# Move all pages into [lang] directory
# Update imports and routing
```

This approach uses the translation JSON files and is more maintainable.

---

## 🗂️ Translation Files Structure

### English (`lib/translations/en.json`)

```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    ...
  },
  "home": {
    "hero": {
      "title": "Live with Heart & Meaning",
      ...
    }
  }
}
```

### Portuguese (`lib/translations/pt.json`)

```json
{
  "nav": {
    "home": "Início",
    "about": "Sobre",
    ...
  },
  "home": {
    "hero": {
      "title": "Viver com Coração e Sentido",
      ...
    }
  }
}
```

---

## 🔧 Using Translations in Components

### Server Components

```typescript
import { getDictionary } from '@/lib/translations/get-dictionary'
import type { Locale } from '@/i18n-config'

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <h1>{dict.home.hero.title}</h1>
  )
}
```

### Client Components

Pass translations as props from parent server component:

```typescript
// Parent (Server Component)
const dict = await getDictionary(params.lang)
return <ClientComponent translations={dict.nav} />

// Child (Client Component)
'use client'
export default function ClientComponent({ translations }) {
  return <button>{translations.bookSession}</button>
}
```

---

## 📝 Portuguese Translations Provided

All major content has been translated:

✅ **Navigation**
- Início, Sobre, Psicoterapia, Trabalho com Sonhos, Meditação, Contato

✅ **Homepage**
- Hero title: "Viver com Coração e Sentido"
- All service descriptions
- About preview
- Call-to-action sections

✅ **About Page**
- Complete biography in Portuguese
- Philosophy section
- Training descriptions

✅ **Footer**
- Tagline and links
- Quote: "O que era noite torna-se templo."

✅ **Buttons & UI**
- "Agendar Sessão", "Explorar Ofertas", etc.

---

## 🌍 SEO for Both Languages

Update metadata for bilingual SEO:

```typescript
export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.home.hero.title,
    description: dict.home.hero.subtitle,
    alternates: {
      canonical: params.lang === 'en' ? '/' : '/pt',
      languages: {
        'en': '/',
        'pt-BR': '/pt'
      }
    }
  }
}
```

---

## 🧪 Testing the Language Switcher

1. **Start dev server**: `npm run dev`
2. **Visit**: http://localhost:3001
3. **Look for**: EN | PT buttons in top navigation
4. **Click PT**: Should see URL change to `/pt`
5. **Click EN**: Should return to `/`

**Note**: Currently, both EN and PT show English content because pages haven't been duplicated/restructured yet. The infrastructure is ready!

---

## 📊 Implementation Status

| Feature | Status | Notes |
|---------|--------|-------|
| i18n Config | ✅ Complete | Supports EN and PT |
| Middleware | ✅ Complete | Routes /pt/* correctly |
| Translation Files | ✅ Complete | All content translated |
| Language Switcher | ✅ Complete | In navigation |
| Helper Functions | ✅ Complete | getDictionary() ready |
| English Pages | ✅ Complete | All pages exist |
| Portuguese Pages | ⏳ Pending | Need to create /pt routes |
| Bilingual SEO | ⏳ Pending | Update metadata |

---

## 🎯 Quick Start: Create First Portuguese Page

Let's create the Portuguese homepage as an example:

```bash
# 1. Create Portuguese directory
mkdir -p app/pt

# 2. Create Portuguese homepage
# Copy this to app/pt/page.tsx:
```

```typescript
import { getDictionary } from '@/lib/translations/get-dictionary'
import Link from 'next/link'
import ParallaxSection from '@/components/animations/ParallaxSection'
import FadeIn from '@/components/animations/FadeIn'
import ServiceCard from '@/components/ui/ServiceCard'
import OptionalImage from '@/components/ui/OptionalImage'

export default async function HomePage() {
  const dict = await getDictionary('pt')

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptionalImage
            src="/images/hero/buddha-garden.jpg"
            alt="Espaço sereno de meditação"
            fill
            className="object-cover opacity-20"
            priority
            fallbackText=""
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-mist-50/95 via-mist-100/90 to-moonlight/30" />

        <ParallaxSection className="relative z-10 w-full">
          <div className="container-custom text-center py-32">
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-warmGray mb-6 text-balance">
                {dict.home.hero.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-warmGray-light max-w-3xl mx-auto mb-12 leading-relaxed">
                {dict.home.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/pt#services" className="btn-primary">
                  {dict.buttons.exploreOfferings}
                </Link>
                <Link href="/pt/contact" className="btn-secondary">
                  {dict.buttons.bookSession}
                </Link>
              </div>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>

      {/* Services Section with Portuguese content */}
      {/* ... rest of the page ... */}
    </>
  )
}
```

---

## 🚀 Production Deployment

When deploying, ensure:

1. **Environment Variables**: Same for both languages
2. **Sitemap**: Generate for both EN and PT routes
3. **Analytics**: Track language preference
4. **Hreflang Tags**: Add for SEO

Example hreflang:
```html
<link rel="alternate" hreflang="en" href="https://yourdomain.com/" />
<link rel="alternate" hreflang="pt-BR" href="https://yourdomain.com/pt" />
```

---

## 📱 Current User Experience

**What works now:**
- ✅ Language switcher visible and functional
- ✅ URL changes when switching languages
- ✅ Language preference saved in cookie
- ✅ Smooth navigation transitions

**What needs content:**
- ⏳ Portuguese pages (show English content until created)
- ⏳ Translated page titles and meta descriptions

---

## 💡 Recommendations

1. **Phase 1** (Now): Test the language switcher
2. **Phase 2** (Next): Create Portuguese homepage
3. **Phase 3**: Duplicate other key pages (About, Contact)
4. **Phase 4**: Add service pages in Portuguese
5. **Phase 5**: Update SEO metadata for both languages

---

## 🐛 Troubleshooting

**Language switcher not appearing:**
- Hard refresh browser (Cmd+Shift+R)
- Check browser console for errors
- Verify Navigation component updated

**Clicking PT doesn't change content:**
- This is expected! Portuguese pages need to be created
- URL should change to `/pt`
- Infrastructure is ready for content

**Cookie not saving:**
- Check browser allows cookies
- Try incognito mode to test
- Verify middleware is running

---

## 📚 Resources

- **Next.js i18n**: https://nextjs.org/docs/app/building-your-application/routing/internationalization
- **Translation Management**: Consider using Locize or Phrase for future
- **Testing**: Test both languages in different browsers

---

**Status**: ✅ **Bilingual Infrastructure Complete**
**Next Step**: Create Portuguese versions of key pages
**Effort**: 30-60 minutes per page for Portuguese versions

**The hard part is done! Now it's just about creating Portuguese page files.** 🎉🇧🇷
