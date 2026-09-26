import { CTA, SectionHeading, SiteShell } from '@/components/site'
import { SplitHero, StatStrip } from '@/components/motion-sections'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Software Development Case Studies & Work', 'Examples of the AI, software, and mobile systems Nexio builds for ambitious teams, with detailed case studies coming soon.', '/work')

const workMetrics = [
  { value: 6, label: 'Engineering disciplines in-house' },
  { value: 50, suffix: '+', label: 'Technologies in the toolkit' },
  { value: 5, label: 'Stages from idea to production' },
  { value: 100, suffix: '%', label: 'Senior engineers on the work' },
]

export default function Work() {
  return (
    <SiteShell>
      <main>
        <SplitHero
          eyebrow="OUR WORK"
          title="Serious software systems for ambitious teams."
          copy="We are building a portfolio of software development case studies that show the problems, decisions, and outcomes behind the work. Until then, here are the kinds of engagements we support."
          primary={{ label: 'Start a Project', href: '/contact' }}
          secondary={{ label: 'See engagements', href: '#work' }}
          trust={['Senior engineers', 'Any stack', 'Idea → production']}
        >
          <p className="svc-panel-label">Engagements we support</p>
          <ul className="svc-panel-list">
            <li><span className="svc-panel-idx">01</span> AI &amp; agentic automation</li>
            <li><span className="svc-panel-idx">02</span> SaaS &amp; platform builds</li>
            <li><span className="svc-panel-idx">03</span> Mobile products</li>
            <li><span className="svc-panel-idx">04</span> Modernization &amp; scaling</li>
          </ul>
        </SplitHero>

        <section className="section shell pt-0!">
          <StatStrip items={workMetrics} />
        </section>

        <section id="work" className="section shell pt-0!">
          <SectionHeading eyebrow="CASE STUDIES COMING SOON" title="Clear about what is known—and what is not." />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[['AI Operations Platform', 'Manual operational workflows.', 'AI-powered workflow automation.', 'LLMs · Agents · APIs · Cloud'], ['Scalable SaaS Platform', 'A product ready for a stronger technical foundation.', 'Modern cloud-based product architecture.', 'React · TypeScript · Node.js · PostgreSQL'], ['Mobile Product Ecosystem', 'A mobile experience connected to complex services.', 'Cross-platform product and API integration.', 'React Native · APIs · Auth · Deployment']].map(([title, problem, solution, technology]) => (
              <article className="case-card" key={title}>
                <div className="case-visual"><span>CASE STUDY<br />COMING SOON</span></div>
                <h3>{title}</h3>
                <p><strong>Problem:</strong> {problem}</p>
                <p><strong>Solution:</strong> {solution}</p>
                <p><strong>Technology:</strong> {technology}</p>
                <span className="status-label">Status: Case study coming soon</span>
              </article>
            ))}
          </div>
        </section>

        <CTA />
      </main>
    </SiteShell>
  )
}
