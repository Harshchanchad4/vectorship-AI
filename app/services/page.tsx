import { pageMetadata } from '@/lib/metadata'
import { CTA, PageHero, SectionHeading, SiteShell } from '@/components/site'
import { CapabilityShowcase, TechStack } from '@/components/motion-sections'
import { Faq } from '@/components/faq'
import { serviceLinks, techGroups, serviceFaqs } from '@/lib/site-data'
import Link from 'next/link'

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
        <PageHero title="Software engineering & AI development services built for real business problems." copy="Nexio provides end-to-end AI development, software engineering, mobile, and cloud DevOps services for teams that need clarity, speed, and ownership from idea through production." />

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

        <section id="engagement" className="section shell">
          <SectionHeading eyebrow="HOW WE ENGAGE" title="Flexible engagement models, consistent ownership." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {engagementModels.map(([title, copy]) => (
              <article className="profile-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="card-link">Tell us what you&apos;re building <span>→</span></Link>
        </section>

        <section id="faq" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="FAQ" title="Common questions about working with a software development company." />
            <Faq items={serviceFaqs} />
          </div>
        </section>

        <CTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
    </SiteShell>
  )
}
