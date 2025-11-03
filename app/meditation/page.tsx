import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import OptionalImage from '@/components/ui/OptionalImage'

export const metadata: Metadata = {
  title: 'Meditation | Isabel Fleury',
  description: 'Guided meditation and dharma talks rooted in Buddhist wisdom. Personalized practice to cultivate presence, clarity, and compassion.',
}

export default function MeditationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-sage/10 to-mist-100">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl mb-6">🪷</div>
              <h1 className="text-5xl md:text-6xl font-serif text-warmGray mb-6">
                Training & Cultivating the Mind
              </h1>
              <p className="text-xl text-warmGray-light leading-relaxed italic">
                Meditation rooted in Buddhist wisdom
              </p>
            </div>
          </FadeIn>

          {/* Meditation Altar Image */}
          <FadeIn delay={0.3}>
            <div className="relative max-w-4xl mx-auto mt-12 aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <OptionalImage
                src="/images/services/meditation-altar.jpg"
                alt="Meditation altar with Buddha statue"
                fill
                className="object-cover"
                fallbackText=""
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Buddha Quote */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <blockquote className="text-center mb-12">
                <p className="text-xl md:text-2xl font-serif text-warmGray italic mb-4 leading-relaxed">
                  "Who is your enemy? Mind is your enemy.<br />
                  No one can harm you more than your own mind untamed..."
                </p>
                <cite className="text-warmGray-light">— Buddha</cite>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Meditation is not one-size-fits-all. Each of us carries unique experiences
                and intentions. This offering is a space to slow down and drop into your
                personal practice.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Enjoy a peaceful guided meditation and a dharma talk rooted in Buddhist
                wisdom. Isabel offers personalized guidance to invite presence, clarity,
                and compassion.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-sage/5 rounded-2xl p-8 mb-12 text-center">
                <p className="text-xl text-warmGray italic leading-relaxed">
                  "Together, we'll make space to come home to yourself.<br />
                  To listen deeply. To relax into presence."
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-center text-warmGray-light mb-12">
                All experience levels welcome.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-mist-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-8 text-center">
                What to Expect
              </h2>
            </FadeIn>

            <div className="space-y-6 mb-12">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-serif text-warmGray mb-3">
                    Personalized Guidance
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Each session is tailored to your needs, whether you're new to meditation
                    or deepening an established practice.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-serif text-warmGray mb-3">
                    Guided Meditation
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Peaceful, guided practices drawing from various Buddhist traditions,
                    including mindfulness, loving-kindness, and breath awareness.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-serif text-warmGray mb-3">
                    Dharma Talks
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Teachings rooted in Buddhist wisdom, exploring themes of presence,
                    compassion, impermanence, and the nature of mind.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-serif text-warmGray mb-3">
                    Support for Daily Practice
                  </h3>
                  <p className="text-warmGray-light leading-relaxed">
                    Practical guidance to establish and maintain a sustainable meditation
                    practice in your daily life.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Link href="/contact" className="btn-primary">
                  Book a Meditation Session
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meditation Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-8 text-center">
                Guided Meditation with Isabel
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light text-center mb-8 leading-relaxed">
                Experience a guided meditation practice. This video offers a glimpse into
                Isabel's approach to cultivating presence and inner peace.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <YouTubeEmbed
                videoId="v1Ch2RMvXrk"
                title="Guided Meditation with Isabel Fleury"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
