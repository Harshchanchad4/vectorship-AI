import { pageMetadata } from '@/lib/metadata'
import { CardGrid, CTA, SectionHeading, SiteShell } from '@/components/site'
import { SplitHero } from '@/components/motion-sections'
import { industryLinks } from '@/lib/site-data'

export const metadata = pageMetadata('Industries We Serve | Fintech, Healthcare, SaaS, E-commerce & More', 'Industry-focused software and AI development for fintech, healthcare, SaaS, e-commerce, logistics, and professional services—engineering adapted to the realities of your domain.', '/industries')

export default function Industries() {
  return (
    <SiteShell>
      <main>
        <SplitHero
          eyebrow="INDUSTRIES & DOMAINS"
          title="Software and AI expertise, adapted to the industries we know best."
          copy="We do not treat every project the same. Fintech lives and dies on compliance and correctness; healthcare on privacy; e-commerce on conversion and scale. We bring domain-aware engineering to the industries where we have the deepest experience."
          primary={{ label: 'Discuss your domain', href: '/contact' }}
          secondary={{ label: 'Explore industries', href: '#industries' }}
          trust={['Domain-aware engineering', 'Senior team', 'Compliance-conscious']}
        >
          <p className="svc-panel-label">Where we go deep</p>
          <ul className="svc-panel-list">
            {industryLinks.map((ind, i) => (
              <li key={ind.href}><span className="svc-panel-idx">{String(i + 1).padStart(2, '0')}</span> {ind.title}</li>
            ))}
          </ul>
        </SplitHero>

        <section id="industries" className="section shell">
          <SectionHeading eyebrow="WHERE WE GO DEEP" title="Six industries. One senior team that understands each of them." copy="These are the domains where we have shipped the most work—so we start with the constraints that actually matter to your business, not a blank slate." />
          <div className="mt-12"><CardGrid items={industryLinks.map(i => ({ title: i.title, copy: i.copy, href: i.href, label: 'INDUSTRY', cta: 'Explore industry' }))} /></div>
        </section>

        <CTA title="Work in an industry we should know?" copy="Tell us about your domain. We'll bring engineering that already understands its constraints." />
      </main>
    </SiteShell>
  )
}
