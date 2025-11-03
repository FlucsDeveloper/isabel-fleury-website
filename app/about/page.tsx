import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'About Isabel Fleury',
  description: 'Born in Brazil, Isabel Fleury is a psychologist and meditation teacher bridging Jungian dreamwork and contemplative practice from Esalen Institute.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-mist-50 to-mist-100">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-warmGray mb-6">
                About Isabel Fleury
              </h1>
              <p className="text-xl text-warmGray-light leading-relaxed italic">
                A path of listening — where therapy, meditation, and dreams converge
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Born and raised in Brazil, Isabel Fleury is a psychologist and meditation
                teacher whose work bridges Jungian dreamwork and contemplative practice.
                Since moving to California in 2007 to study and work at the Esalen Institute
                in Big Sur, her path has been rooted in both depth psychology and the dharma.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Her approach invites presence, warmth, and deep listening — guiding others
                to rest, reconnect, and rediscover the wisdom that speaks through dreams
                and silence alike.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-12">
                Isabel's work draws from years of immersion in both Western depth psychology
                and Eastern contemplative traditions. She has studied Jungian analysis,
                Buddhist meditation, and somatic practices, weaving these threads into
                a unique approach that honors the wholeness of the human experience.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-mist-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-8 text-center">
                Approach & Philosophy
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 mb-8">
                <p className="text-xl text-warmGray italic leading-relaxed text-center">
                  "A path of listening — where therapy, meditation, and dreams
                  converge as ways to return home to the self."
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6">
                Isabel's work is grounded in the belief that healing is not about fixing
                or becoming someone other than who you are. Rather, it is about listening —
                to the unconscious, to the body, to the dreams that visit in the night,
                and to the silence that holds everything.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6">
                From Jung, she brings an understanding of the psyche as a living, symbolic
                realm — where dreams speak in images and the unconscious guides us toward
                individuation, the lifelong journey of becoming whole.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-12">
                From the dharma, she brings practices of presence, compassion, and
                the recognition that suffering and freedom are both woven into the
                fabric of being human. Meditation becomes a way to rest in what is,
                to meet experience with openness rather than resistance.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Training & Background */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-8 text-center">
                Training & Background
              </h2>
            </FadeIn>

            <div className="space-y-6 mb-12">
              <FadeIn delay={0.2}>
                <div className="border-l-2 border-sage pl-6">
                  <h3 className="text-xl font-serif text-warmGray mb-2">
                    Psychology & Psychotherapy
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Licensed psychologist with advanced training in Jungian analysis
                    and depth psychology
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="border-l-2 border-sage pl-6">
                  <h3 className="text-xl font-serif text-warmGray mb-2">
                    Esalen Institute
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Studied and worked at Esalen Institute in Big Sur, California,
                    immersing in somatic practices and humanistic psychology
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="border-l-2 border-sage pl-6">
                  <h3 className="text-xl font-serif text-warmGray mb-2">
                    Buddhist Meditation
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Trained meditation teacher with deep study in Buddhist philosophy
                    and contemplative practices
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="border-l-2 border-sage pl-6">
                  <h3 className="text-xl font-serif text-warmGray mb-2">
                    Dreamwork
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Specialized training in Jungian dream analysis and the art of
                    listening to the unconscious
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Link href="/contact" className="btn-primary">
                  Begin Your Journey
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-gradient-to-br from-moonlight/10 to-sage/5">
        <div className="container-custom">
          <FadeIn>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-serif text-warmGray italic mb-6 leading-relaxed">
                "May this be a space where words become silence,<br />
                and silence becomes home."
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
