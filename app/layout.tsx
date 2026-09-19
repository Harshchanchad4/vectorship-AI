import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'VectorShip AI Solutions | AI Software Development Company',
  description: 'VectorShip is an AI software development company helping ambitious companies design, build, automate, and scale high-performance digital products.',
  metadataBase: new URL('https://vectorship.ai'),
  alternates: { canonical: 'https://vectorship.ai' },
  openGraph: { title: 'VectorShip AI Solutions | AI Software Development Company', description: 'Senior engineering for AI automation, software, mobile, and cloud DevOps.', type: 'website', url: 'https://vectorship.ai', siteName: 'VectorShip AI Solutions' },
  twitter: { card: 'summary_large_image', title: 'VectorShip AI Solutions | AI Software Development Company', description: 'Senior engineering for AI automation, software, mobile, and cloud DevOps.' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  generator: 'VectorShip AI Solutions',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080B10',
  userScalable: true,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://vectorship.ai/#organization',
      name: 'VectorShip AI Solutions',
      url: 'https://vectorship.ai',
      logo: 'https://vectorship.ai/icon.svg',
      description: 'VectorShip helps ambitious companies design, build, automate, and scale high-performance digital products with senior software engineering, AI automation, mobile, and cloud DevOps expertise.',
      email: 'hello@vectorship.ai',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vectorship.ai/#website',
      url: 'https://vectorship.ai',
      name: 'VectorShip AI Solutions',
      publisher: { '@id': 'https://vectorship.ai/#organization' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://vectorship.ai/#service',
      name: 'VectorShip AI Solutions',
      image: 'https://vectorship.ai/icon.svg',
      url: 'https://vectorship.ai',
      priceRange: '$$',
      areaServed: 'Worldwide',
      description: 'Senior engineering for AI & agentic automation, software engineering, mobile engineering, and cloud & DevOps.',
      parentOrganization: { '@id': 'https://vectorship.ai/#organization' },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`bg-background ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable}`}><body className="antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    {children}{process.env.NODE_ENV === 'production' && <Analytics />}
  </body></html>
}
