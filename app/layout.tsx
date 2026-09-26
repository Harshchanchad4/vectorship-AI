import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sora', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Nexio AI Solutions | AI Software Development Company',
  description: 'Nexio is an AI software development company helping ambitious companies design, build, automate, and scale high-performance digital products.',
  metadataBase: new URL('https://nexio.ai'),
  alternates: { canonical: 'https://nexio.ai' },
  openGraph: { title: 'Nexio AI Solutions | AI Software Development Company', description: 'Senior engineering for AI automation, software, mobile, and cloud DevOps.', type: 'website', url: 'https://nexio.ai', siteName: 'Nexio AI Solutions' },
  twitter: { card: 'summary_large_image', title: 'Nexio AI Solutions | AI Software Development Company', description: 'Senior engineering for AI automation, software, mobile, and cloud DevOps.' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  generator: 'Nexio AI Solutions',
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
      '@id': 'https://nexio.ai/#organization',
      name: 'Nexio AI Solutions',
      url: 'https://nexio.ai',
      logo: 'https://nexio.ai/icon.svg',
      description: 'Nexio helps ambitious companies design, build, automate, and scale high-performance digital products with senior software engineering, AI automation, mobile, and cloud DevOps expertise.',
      email: 'hello@nexio.ai',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nexio.ai/#website',
      url: 'https://nexio.ai',
      name: 'Nexio AI Solutions',
      publisher: { '@id': 'https://nexio.ai/#organization' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://nexio.ai/#service',
      name: 'Nexio AI Solutions',
      image: 'https://nexio.ai/icon.svg',
      url: 'https://nexio.ai',
      priceRange: '$$',
      areaServed: 'Worldwide',
      description: 'Senior engineering for AI & agentic automation, software engineering, mobile engineering, and cloud & DevOps.',
      parentOrganization: { '@id': 'https://nexio.ai/#organization' },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`bg-background ${GeistSans.variable} ${GeistMono.variable} ${sora.variable} ${inter.variable}`}><body className="antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    {children}{process.env.NODE_ENV === 'production' && <Analytics />}
  </body></html>
}
