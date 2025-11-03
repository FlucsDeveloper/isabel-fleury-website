import Link from 'next/link'
import ParallaxSection from '@/components/animations/ParallaxSection'
import FadeIn from '@/components/animations/FadeIn'
import ServiceCard from '@/components/ui/ServiceCard'
import OptionalImage from '@/components/ui/OptionalImage'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Optional Background Image */}
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

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-mist-50/95 via-mist-100/90 to-moonlight/30" />

        <ParallaxSection className="relative z-10 w-full">
          <div className="container-custom text-center py-32">
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-warmGray mb-6 text-balance">
                Viver com Coração e Sentido
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-warmGray-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Psicoterapia, Trabalho com Sonhos e Meditação — um espaço para pausa e reconexão interior.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/pt#services" className="btn-primary">
                  Explorar Ofertas
                </Link>
                <Link href="/pt/contact" className="btn-secondary">
                  Agendar Sessão
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
                Ofertas
              </h2>
              <p className="text-lg text-warmGray-light max-w-2xl mx-auto">
                Três caminhos para reconexão, descanso e sabedoria interior.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <ServiceCard
                title="Psicoterapia"
                description="Sessões individuais enraizadas nas tradições junguiana e contemplativa. Um espaço para explorar o que pede para ser visto, sentido ou transformado."
                href="/pt/psychotherapy"
                icon="🌿"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ServiceCard
                title="Trabalho com Sonhos"
                description="Uma jornada na linguagem dos sonhos. Aprenda a escutar seu inconsciente vivo e restaure o diálogo interior."
                href="/pt/dreamwork"
                icon="🌙"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ServiceCard
                title="Meditação"
                description="Meditação guiada e ensinamentos dhármicos enraizados na sabedoria budista. Um espaço para cultivar presença, clareza e compaixão."
                href="/pt/meditation"
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
                Sobre Isabel
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-6 text-center">
                Nascida e criada no Brasil, Isabel Fleury é psicóloga e professora de meditação
                cujo trabalho une o trabalho com sonhos junguiano e a prática contemplativa.
                Desde que se mudou para a Califórnia em 2007 para estudar e trabalhar no
                Instituto Esalen em Big Sur, seu caminho tem sido enraizado tanto na psicologia
                profunda quanto no dharma.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8 text-center italic">
                "Um caminho de escuta — onde terapia, meditação e sonhos convergem como formas
                de retornar ao lar do self."
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Link href="/pt/about" className="btn-secondary">
                  Leia Mais
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
                Comece Sua Jornada
              </h2>
              <p className="text-lg text-warmGray-light leading-relaxed mb-8">
                Se você se sente chamado a começar, entre em contato. Juntos, criaremos
                espaço para você voltar para casa, para si mesmo.
              </p>
              <Link href="/pt/contact" className="btn-primary">
                Agendar Sessão
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
