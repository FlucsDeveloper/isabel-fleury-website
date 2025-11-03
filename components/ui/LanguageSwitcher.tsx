'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n, type Locale } from '@/i18n-config'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.startsWith('/pt') ? 'pt' : 'en'

  const switchLanguage = (locale: Locale) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`

    // Get current path without locale
    const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, '') || '/'

    // Navigate to new locale path
    const newPath = locale === 'en' ? pathWithoutLocale : `/pt${pathWithoutLocale}`
    router.push(newPath)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          currentLocale === 'en'
            ? 'bg-sage text-white'
            : 'text-warmGray-light hover:text-sage'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-warmGray-light">|</span>
      <button
        onClick={() => switchLanguage('pt')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          currentLocale === 'pt'
            ? 'bg-sage text-white'
            : 'text-warmGray-light hover:text-sage'
        }`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  )
}
