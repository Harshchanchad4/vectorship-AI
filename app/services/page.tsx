import { pageMetadata } from '@/lib/metadata'
import { CTA, SectionHeading, SiteShell } from '@/components/site'
import { CapabilityShowcase, TechStack, ServicesHero, EngagementModels } from '@/components/motion-sections'
import { Faq } from '@/components/faq'
import { serviceLinks, techGroups, serviceFaqs, processSteps } from '@/lib/site-data'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = pageMetadata('Software Engineering & AI Development Services', 'End-to-end AI development, software engineering, mobile app development, and cloud DevOps services for ambitious teams.', '/services')

const engagementModels: [string, string][] = [
  ['Fixed-scope projects', 'A focused team and clear deliverables for a defined outcome.'],
  ['Dedicated engineering teams', 'Experienced engineers who integrate with your existing product organization.'],
  ['Staff augmentation', 'Add the technical capacity you need without adding unnecessary layers.'],
  ['Long-term partnerships', 'Ongoing engineering support, modernization, and scaling.'],
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: serviceFaqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
}

export default function Services() {
  return (
    <SiteShell>
      <main>
        <ServicesHero />

        <section id="capabilities" className="section shell">
          <SectionHeading eyebrow="WHAT WE DO" title="A senior software engineering partner for the work that matters." copy="Pick a capability to see how we approach it—or let it cycle through everything we build." />
          <CapabilityShowcase items={serviceLinks} />
        </section>

        <section id="technology" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="TECHNOLOGY" title="Deep expertise across the full modern stack." copy="Our team spans every layer of modern software—languages, frameworks, AI, data, and infrastructure. We choose technology based on the problem, not the trend." />
            <TechStack groups={techGroups} />
          </div>
        </section>

        <section id="process" className="section shell">
          <SectionHeading eyebrow="HOW WE DELIVER" title="A process built to think clearly and ship quickly." copy="Every engagement moves through the same clear path—so you always know where things stand and what happens next." action={{ label: 'How we work', href: '/about#method' }} />
          <div className="process-grid">
            {processSteps.map(([number, title, copy]) => (
              <article className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="engagement" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="HOW WE ENGAGE" title="Flexible engagement models, consistent ownership." copy="However we plug into your team, the standard stays the same—senior engineers who own the outcome end to end." />
            <EngagementModels items={engagementModels} />
            <Link href="/contact" className="card-link">Tell us what you&apos;re building <ArrowUpRight className="size-4" /></Link>
          </div>
        </section>

        <section id="faq" className="section shell">
          <SectionHeading eyebrow="FAQ" title="Common questions about working with a software development company." />
          <Faq items={serviceFaqs} />
        </section>

        <CTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
    </SiteShell>
  )
}
