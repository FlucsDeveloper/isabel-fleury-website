import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mist-100 border-t border-warmGray/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif text-warmGray mb-4">Isabel Fleury</h3>
            <p className="text-warmGray-light text-sm leading-relaxed">
              A space for pause and inner reconnection. Bridging psychotherapy,
              Jungian dreamwork, and contemplative practice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-warmGray mb-4">Offerings</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/psychotherapy" className="text-warmGray-light text-sm hover:text-sage transition-colors">
                  Psychotherapy
                </Link>
              </li>
              <li>
                <Link href="/dreamwork" className="text-warmGray-light text-sm hover:text-sage transition-colors">
                  Dreamwork
                </Link>
              </li>
              <li>
                <Link href="/meditation" className="text-warmGray-light text-sm hover:text-sage transition-colors">
                  Meditation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-warmGray-light text-sm hover:text-sage transition-colors">
                  About Isabel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif text-warmGray mb-4">Connect</h4>
            <Link
              href="/contact"
              className="inline-block text-warmGray-light text-sm hover:text-sage transition-colors mb-6"
            >
              Book a Session →
            </Link>
            <p className="text-warmGray-light text-sm italic">
              "What was night becomes temple."
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warmGray/10 text-center">
          <p className="text-warmGray-light text-sm">
            © {currentYear} Isabel Fleury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
