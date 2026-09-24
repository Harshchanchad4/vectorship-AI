import Link from 'next/link'
import { ArrowUpRight, BadgeCheck, Gauge, ShieldCheck, UserCheck } from 'lucide-react'
import { CTA, CardGrid, PageHero, SectionHeading, SiteShell } from '@/components/site'
import { Faq } from '@/components/faq'
import { industries, recruitmentFaqs, recruitmentModels, recruitmentProcess, recruitmentRoles } from '@/lib/site-data'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Tech Recruitment & IT Staffing',
  'Nexio Talent places senior software, AI, cloud, product, and leadership talent through permanent, contract, and contract-to-hire staffing—vetted by engineers.',
  '/recruitment',
)

const whyPartner: [string, string, typeof UserCheck][] = [
  ['Engineering-led vetting', 'Our screens are run by senior engineers, not keyword matchers—so every shortlist candidate can actually do the work.', UserCheck],
  ['Speed without the noise', 'A curated shortlist in days and most roles filled in 2–4 weeks. Fewer, stronger candidates instead of a resume pile.', Gauge],
  ['Replacement guarantee', 'Direct-hire placements are backed by a guarantee period. If a hire does not work out, we replace them at no extra fee.', BadgeCheck],
  ['Compliance handled', 'For contract talent we act as employer of record—payroll, benefits, taxes, and compliance are entirely on us.', ShieldCheck],
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: recruitmentFaqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
}

export default function Recruitment() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="VECTORSHIP TALENT"
          title="Senior tech talent, vetted by engineers and placed fast."
          copy="We help ambitious teams hire the software, AI, cloud, product, and leadership talent they need—through permanent, contract, and contract-to-hire staffing built on the same engineering standard as everything else we do."
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Request Talent <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link>
            <a href="mailto:hello@vectorship.ai?subject=Candidate%20Introduction" className="button-secondary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Join Our Talent Network</a>
          </div>
        </PageHero>

        <section id="staffing-models" className="section shell">
          <SectionHeading eyebrow="STAFFING MODELS" title="Hire the way that fits the work—not the other way around." copy="Whether you need one specialist for a sprint or a permanent leader for the next stage, we match the engagement model to your risk, timeline, and budget." />
          <div className="mt-12"><CardGrid items={recruitmentModels} /></div>
        </section>

        <section id="roles" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="ROLES WE PLACE" title="Deep coverage across the technical org." copy="We focus on technology talent—so our network runs deep in exactly the roles hard to fill through generalist recruiters." />
            <div className="tech-grid mt-12">
              {recruitmentRoles.map(([group, roles]) => (
                <div className="tech-group" key={group}>
                  <p>{group}</p>
                  <div>{roles.map(role => <span key={role}>{role}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hiring-process" className="section shell">
          <SectionHeading eyebrow="HOW WE HIRE" title="A hiring process built to surface signal, not volume." />
          <div className="process-grid">
            {recruitmentProcess.map(([number, title, copy]) => (
              <article className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="WHY NEXIO TALENT" title="A recruitment partner that understands the work you're hiring for." copy="We build software ourselves. That means we know what great engineers look like—and we screen for it." />
            <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
              {whyPartner.map(([title, copy, Icon]) => (
                <article className="why-item" key={title}>
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="INDUSTRIES WE SERVE" title="Talent tuned to the realities of your domain." copy="From fintech compliance to healthcare data privacy, we place people who already understand the constraints of your industry." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, copy], i) => (
              <article className="profile-card" key={title}>
                <span className="industry-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="FAQ" title="Common questions about hiring through Nexio Talent." />
            <Faq items={recruitmentFaqs} />
          </div>
        </section>

        <CTA title="Have a role worth filling?" copy="Tell us who you need. We'll come back with a calibrated plan and a curated shortlist." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
    </SiteShell>
  )
}
