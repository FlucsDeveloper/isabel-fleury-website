import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Isabel Fleury | Psychotherapy, Dreamwork & Meditation',
  description: 'Psychotherapy, Dreamwork, and Meditation — a space for pause and inner reconnection. Bridging Jungian psychology and contemplative practice.',
  keywords: ['psychotherapy', 'Jungian dreamwork', 'meditation', 'depth psychology', 'contemplative practice', 'Buddhist wisdom'],
  authors: [{ name: 'Isabel Fleury' }],
  openGraph: {
    title: 'Isabel Fleury | Psychotherapy, Dreamwork & Meditation',
    description: 'A space for pause and inner reconnection. Bridging Jungian psychology and contemplative practice.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
