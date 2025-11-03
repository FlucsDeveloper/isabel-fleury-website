import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Dreamwork | Isabel Fleury',
  description: 'A journey into rest and the language of dreams. Learn to listen to your living unconscious and restore inner dialogue through Jungian dreamwork.',
}

export default function DreamworkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-moonlight/10 to-mist-100">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl mb-6">🌙</div>
              <h1 className="text-5xl md:text-6xl font-serif text-warmGray mb-6">
                Dreamwork
              </h1>
              <p className="text-xl text-warmGray-light leading-relaxed italic">
                A journey into rest and the language of dreams
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                If something in you is asking for pause, this is your place.
                A space to rest from within — and remember who you are.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                From a Jungian perspective, dreams are a hidden doorway to the unconscious —
                a living source of guidance and renewal.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-12">
                Each dream becomes a step in the lifelong process of individuation —
                the unfolding journey toward authenticity and inner unity.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-mist-100 rounded-2xl p-8 mb-12 italic text-center">
                <p className="text-xl text-warmGray leading-relaxed">
                  "What once felt like fatigue becomes invitation.<br />
                  What was noise becomes silence.<br />
                  What was night becomes temple."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Four Sessions Journey */}
      <section className="section-padding bg-mist-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-8 text-center">
                About the Journey
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6">
                A journey of four or five gatherings — online or in person —
                offering a space for pause and inner reconnection.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6">
                Each session is an invitation to rest from within,
                to learn the art of listening to your dreams,
                and to restore the dialogue with your living unconscious.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6">
                The program weaves together elements of depth psychology
                and restorative practices —
                soft rituals, meditative guidance, and ways to prepare for sleep.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-12">
                It is, above all, an experience of inner re-enchantment —
                a way to relearn rest, silence,
                and the meaning of what the unconscious reveals each night.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Link href="/contact" className="btn-primary">
                  Join the Dreamwork Journey
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-8 text-center">
                On Sleep and Dreaming
              </h2>
              <p className="text-center text-warmGray-light mb-8">Workshop</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-12 text-center">
                A journey into rest and the language of dreams.
                If something in you is asking for pause, this is your place.
                A space to rest from within — and remember who you are.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <Link href="/contact" className="btn-secondary">
                  Inquire About Workshop
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
