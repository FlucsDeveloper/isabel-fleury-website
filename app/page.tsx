import Link from 'next/link'
import Image from 'next/image'
import ParallaxSection from '@/components/animations/ParallaxSection'
import FadeIn from '@/components/animations/FadeIn'
import ServiceCard from '@/components/ui/ServiceCard'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Optional Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/buddha-garden.jpg"
            alt="Serene garden meditation space"
            fill
            className="object-cover opacity-20"
            priority
            onError={(e) => {
              // Hide image if not found
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-mist-50/95 via-mist-100/90 to-moonlight/30" />

        <ParallaxSection className="relative z-10 w-full">
          <div className="container-custom text-center py-32">
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-warmGray mb-6 text-balance">
                Live with Heart & Meaning
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-warmGray-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Psychotherapy, Dreamwork, and Meditation — a space for pause and inner reconnection.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#services" className="btn-primary">
                  Explore Offerings
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Book a Session
                </Link>
              </div>
            </FadeIn>
          </div>
        </ParallaxSection>

        {/* Scroll indicator */}
        <FadeIn delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-warmGray-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-warmGray mb-4">
                Offerings
              </h2>
              <p className="text-lg text-warmGray-light max-w-2xl mx-auto">
                Three pathways to reconnection, rest, and inner wisdom.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <ServiceCard
                title="Psychotherapy"
                description="Individual sessions rooted in Jungian and contemplative traditions. A space to explore what asks to be seen, felt, or transformed."
                href="/psychotherapy"
                icon="🌿"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ServiceCard
                title="Dreamwork"
                description="A journey into the language of dreams. Learn to listen to your living unconscious and restore inner dialogue."
                href="/dreamwork"
                icon="🌙"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ServiceCard
                title="Meditation"
                description="Guided meditation and dharma talks rooted in Buddhist wisdom. A space to cultivate presence, clarity, and compassion."
                href="/meditation"
                icon="🪷"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-mist-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-warmGray mb-8 text-center">
                About Isabel
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6 text-center">
                Born and raised in Brazil, Isabel Fleury is a psychologist and meditation teacher
                whose work bridges Jungian dreamwork and contemplative practice. Since moving to
                California in 2007 to study and work at the Esalen Institute in Big Sur, her path
                has been rooted in both depth psychology and the dharma.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8 text-center italic">
                "A path of listening — where therapy, meditation, and dreams converge as ways to
                return home to the self."
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Link href="/about" className="btn-secondary">
                  Read More
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sage/10 to-moonlight/10">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-warmGray mb-6">
                Begin Your Journey
              </h2>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                If you feel called to begin, reach out. Together, we'll make space
                to come home to yourself.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Session
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
