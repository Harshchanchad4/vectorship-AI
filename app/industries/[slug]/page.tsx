import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { CTA, PageHero, SectionHeading, SiteShell } from '@/components/site'
import { Faq } from '@/components/faq'
import { pageMetadata } from '@/lib/metadata'
import { industryData } from '@/lib/site-data'

export async function generateStaticParams() {
  return Object.keys(industryData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = industryData[slug]
  if (!item) return pageMetadata('Industries', 'Nexio industry expertise and software engineering services.', '/industries/' + slug)
  return pageMetadata(item.seoTitle, item.seoDescription, '/industries/' + slug)
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = industryData[slug] || industryData.fintech
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.seoTitle,
    description: item.seoDescription,
    serviceType: item.seoTitle,
    provider: { '@type': 'Organization', name: 'Nexio AI Solutions', url: 'https://vectorship.ai' },
    areaServed: 'Worldwide',
    url: `https://vectorship.ai/industries/${slug}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: item.seoTitle,
      itemListElement: item.items.map(i => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i } })),
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: item.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
  return (
    <SiteShell>
      <main>
        <PageHero eyebrow={item.eyebrow} title={item.title} copy={item.copy}>
          <Link href="/contact" className="card-link">Discuss your project <ArrowUpRight className="size-4" /></Link>
        </PageHero>
        <section className="section shell">
          <SectionHeading eyebrow="WHAT WE BUILD" title="Solutions tuned to your domain." />
          <div className="tag-list large-tags mt-10">{item.items.map(i => <span key={i}>{i}</span>)}</div>
          <div className="detail-sections mt-20">
            {item.sections.map(([title, copy]) => (
              <article key={title}>
                <p className="eyebrow">{title}</p>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section approach-section">
          <div className="shell pillars-panel">
            <div className="pillars-panel-main">
              <p className="eyebrow">WHAT YOU GET</p>
              <h3>{item.outcomesTitle}</h3>
              <p className="pillars-copy">{item.outcomesCopy}</p>
              <Link href="/contact" className="card-link">Talk to an engineer <ArrowUpRight className="size-4" /></Link>
            </div>
            <ul className="pillars-points">
              {item.outcomes.map(pt => (
                <li key={pt}><Check className="size-4 shrink-0" aria-hidden="true" /> {pt}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="section shell">
          <SectionHeading eyebrow="COMMON QUESTIONS" title={`Questions about building for ${item.eyebrow.toLowerCase()}.`} />
          <Faq items={item.faqs} />
        </section>
        <CTA title="Building in this industry?" copy="Bring us the problem. We will bring engineering that already understands your domain." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
    </SiteShell>
  )
}
