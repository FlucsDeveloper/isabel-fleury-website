'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url?: string
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL

  useEffect(() => {
    if (calendlyUrl) {
      // Load Calendly widget script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [calendlyUrl])

  if (!calendlyUrl) {
    return (
      <div className="aspect-[4/3] bg-mist-50 rounded-lg flex items-center justify-center text-warmGray-light">
        <div className="text-center p-8">
          <p className="mb-4 text-lg">Calendly booking widget</p>
          <p className="text-sm">
            To enable booking, set the <code className="bg-warmGray/10 px-2 py-1 rounded">NEXT_PUBLIC_CALENDLY_URL</code> environment variable with your Calendly scheduling link.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden"
      data-url={calendlyUrl}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
