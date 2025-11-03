import type { Metadata } from 'next'
import FadeIn from '@/components/animations/FadeIn'
import ContactForm from '@/components/ui/ContactForm'
import CalendlyWidget from '@/components/ui/CalendlyWidget'

export const metadata: Metadata = {
  title: 'Contact | Isabel Fleury',
  description: 'Get in touch to book a therapy session, dreamwork journey, or meditation practice. Begin your journey of inner reconnection.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-mist-50 to-mist-100">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-warmGray mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-warmGray-light leading-relaxed italic">
                If you feel called to begin, reach out.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="bg-mist-100 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-serif text-warmGray mb-6 text-center">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Alternative Contact Info */}
            <FadeIn delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-warmGray-light mb-4">
                  You can also reach out directly via email:
                </p>
                <a
                  href="mailto:isabel@isabelfleury.com"
                  className="text-sage hover:text-sage-dark transition-colors font-medium"
                >
                  isabel@isabelfleury.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-mist-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-warmGray mb-6">
                Book a Session
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Ready to schedule? Use the booking calendar below to find a time
                that works for you.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <CalendlyWidget />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn>
            <blockquote className="max-w-2xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-serif text-warmGray italic leading-relaxed">
                "What was night becomes temple."
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
