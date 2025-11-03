import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Isabel Fleury | Psychotherapy, Dreamwork & Meditation',
    short_name: 'Isabel Fleury',
    description: 'Psychotherapy, Dreamwork, and Meditation — a space for pause and inner reconnection',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF8',
    theme_color: '#8FA68E',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
