'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptionalImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  fallbackText?: string
}

export default function OptionalImage({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
  sizes,
  fallbackText = 'Image will appear here'
}: OptionalImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`w-full h-full bg-mist-100 flex items-center justify-center ${className}`}>
        <p className="text-warmGray-light text-center p-8">{fallbackText}</p>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setHasError(true)}
    />
  )
}
