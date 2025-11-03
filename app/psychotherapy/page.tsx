import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Psychotherapy | Isabel Fleury',
  description: 'Individual psychotherapy sessions rooted in Jungian and contemplative traditions. A space to explore what asks to be seen, felt, or transformed.',
}

export default function PsychotherapyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-mist-50 to-mist-100">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl mb-6">🌿</div>
              <h1 className="text-5xl md:text-6xl font-serif text-warmGray mb-6">
                Therapy Sessions
              </h1>
              <p className="text-xl text-warmGray-light leading-relaxed">
                Individual psychotherapy sessions (online or in person) rooted in
                Jungian and contemplative traditions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray leading-relaxed mb-8">
                Each encounter offers a space to explore what asks to be seen, felt,
                or transformed — with care, depth, and presence.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Therapy is not about fixing or rushing toward answers. It is about
                creating a safe container where you can meet yourself — your patterns,
                wounds, dreams, and possibilities — with compassion and curiosity.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-12">
                Drawing from Jungian psychology and contemplative practices, these
                sessions honor both the psyche's symbolic language and the body's wisdom.
                Together, we explore the unconscious patterns that shape your life and
                support your journey toward wholeness and authenticity.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-mist-100 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-serif text-warmGray mb-4">What to Expect</h2>
                <ul className="space-y-3 text-warmGray-light">
                  <li className="flex items-start">
                    <span className="text-sage mr-3">•</span>
                    <span>Individual sessions lasting 50-60 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3">•</span>
                    <span>Available online via video call or in person</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3">•</span>
                    <span>Integration of dream material when relevant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3">•</span>
                    <span>A collaborative, non-directive approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3">•</span>
                    <span>Emphasis on depth, presence, and inner listening</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Link href="/contact" className="btn-primary">
                  Book a Therapy Session
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-gradient-to-br from-sage/5 to-moonlight/5">
        <div className="container-custom">
          <FadeIn>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-serif text-warmGray italic mb-6">
                "The privilege of a lifetime is to become who you truly are."
              </p>
              <cite className="text-warmGray-light">— C.G. Jung</cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
