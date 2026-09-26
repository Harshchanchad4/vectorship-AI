import Link from 'next/link'
import { ArrowUpRight, Award, Compass, GraduationCap, MessageSquare, Radar, Rocket } from 'lucide-react'
import { CTA, SectionHeading, SiteShell } from '@/components/site'
import { SplitHero, StatStrip } from '@/components/motion-sections'
import { Faq } from '@/components/faq'
import { careerFaqs, careerOpenings, careerProcess, careerValues } from '@/lib/site-data'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Careers at Nexio | Software, AI & Cloud Engineering Jobs',
  'Join Nexio, a senior-only software and AI engineering team. Remote-first roles across full-stack, AI/LLM, mobile, cloud, and design—real ownership, meaningful work, no bureaucracy.',
  '/careers',
)

const valueIcons = [Award, Compass, MessageSquare, Rocket, Radar, GraduationCap]

const cultureMetrics = [
  { value: 100, suffix: '%', label: 'Senior engineers on the team' },
  { value: 6, label: 'Disciplines under one roof' },
  { value: 100, suffix: '%', label: 'Remote-first, async-friendly' },
  { value: 0, label: 'Layers between you and the work' },
]

const applyHref = (role: string) =>
  `mailto:careers@nexio.ai?subject=${encodeURIComponent(`Application: ${role}`)}`

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: careerFaqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
}

export default function Careers() {
  return (
    <SiteShell>
      <main>
        <SplitHero
          eyebrow="CAREERS AT NEXIO"
          title="Build a career doing work that actually matters."
          copy="Nexio is a senior-only software and AI engineering team. We take on serious problems for ambitious companies—and we hire people who want real ownership, direct communication, and the freedom to do their best work."
          primary={{ label: 'See open roles', href: '#open-roles' }}
          secondary={{ label: 'Open application', href: 'mailto:careers@nexio.ai?subject=Open%20Application' }}
          trust={['Remote-first', 'Senior-only team', 'Real ownership']}
        >
          <p className="svc-panel-label">Life at Nexio</p>
          <div className="svc-stats">
            <div className="svc-stat"><strong>Remote</strong><span>Work from anywhere</span></div>
            <div className="svc-stat"><strong>Senior</strong><span>No junior bench</span></div>
            <div className="svc-stat"><strong>Async</strong><span>Focus over meetings</span></div>
            <div className="svc-stat"><strong>Ownership</strong><span>Problems, not tickets</span></div>
          </div>
          <p className="svc-panel-flow">Apply <span>→</span> Intro <span>→</span> Deep-dive <span>→</span> Fit <span>→</span> Offer</p>
        </SplitHero>

        <section className="section shell">
          <StatStrip items={cultureMetrics} />
        </section>

        <section id="why-nexio" className="section shell">
          <SectionHeading eyebrow="WHY NEXIO" title="A place built for engineers who want to do their best work." copy="We keep the team senior, the structure flat, and the work meaningful—so the people who build here can focus on craft and outcomes, not process." />
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {careerValues.map(([title, copy], i) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <article className="why-item" key={title}>
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="open-roles" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="OPEN ROLES" title="Roles we're hiring for right now." copy="We don't have any open positions at the moment—but we're always glad to hear from strong engineers, designers, and AI specialists." />
            {careerOpenings.length > 0 ? (
              <div className="mt-12 grid gap-4">
                {careerOpenings.map(([role, team, type, location, copy]) => (
                  <article className="role-card" key={role}>
                    <div className="role-card-main">
                      <div className="role-card-meta">
                        <span className="role-card-team">{team}</span>
                        <span className="role-card-tags"><span>{type}</span><span>{location}</span></span>
                      </div>
                      <h3>{role}</h3>
                      <p>{copy}</p>
                    </div>
                    <a href={applyHref(role)} className="card-link role-card-apply">Apply now <ArrowUpRight className="size-4" /></a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="roles-empty mt-12">
                <span className="roles-empty-badge">No open roles right now</span>
                <h3>We're not actively hiring—but we're always talking to great people.</h3>
                <p>When a role opens up, it starts here. In the meantime, send us an open application telling us what you do and the problems you want to work on. If there's a fit, we'll reach out.</p>
                <a href="mailto:careers@nexio.ai?subject=Open%20Application" className="button-primary mt-2 inline-flex min-h-12 items-center rounded-sm px-5 py-3">Send an open application <ArrowUpRight className="ml-2 size-4 shrink-0" /></a>
              </div>
            )}
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="HOW WE HIRE" title="A hiring process built to respect your time." copy="No trick puzzles, no endless rounds. A practical conversation about the work you'd actually do—usually wrapped up in a couple of weeks." />
          <div className="process-grid">
            {careerProcess.map(([number, title, copy]) => (
              <article className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="FAQ" title="Common questions about working at Nexio." />
            <Faq items={careerFaqs} />
          </div>
        </section>

        <CTA title="Want to build with us?" copy="Send your CV and a short note on the problems you want to work on. Every application is read by an engineer." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
    </SiteShell>
  )
}
