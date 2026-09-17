import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VectorShip AI Solutions | AI, Software & Automation',
  description: 'VectorShip helps ambitious companies design, build, automate, and scale high-performance digital products.',
  metadataBase: new URL('https://vectorship.ai'),
  openGraph: { title: 'VectorShip AI Solutions | AI, Software & Automation', description: 'Senior engineering for ambitious teams.', type: 'website', siteName: 'VectorShip AI Solutions' },
  twitter: { card: 'summary_large_image', title: 'VectorShip AI Solutions | AI, Software & Automation', description: 'Senior engineering for ambitious teams.' },
  generator: 'VectorShip AI Solutions',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080B10',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
