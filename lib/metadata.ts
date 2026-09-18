import type { Metadata } from 'next'

export function pageMetadata(title: string, description: string, path = ''): Metadata {
  const fullTitle = `${title} | VectorShip AI Solutions`
  const ogImage = '/opengraph-image'
  return { title: fullTitle, description, alternates: { canonical: `https://vectorship.ai${path}` }, openGraph: { title: fullTitle, description, type: 'website', url: `https://vectorship.ai${path}`, siteName: 'VectorShip AI Solutions', images: [ogImage] }, twitter: { card: 'summary_large_image', title: fullTitle, description, images: [ogImage] } }
}
