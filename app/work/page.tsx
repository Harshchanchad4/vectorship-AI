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

// Projects rendered on the Work page. E-commerce is our specialty, so those
// projects always render first — the sort below keeps them ahead regardless of
// the order entries are authored in.
type Project = { title: string; category: string; problem: string; solution: string; technology: string }

const projects: Project[] = [
  { title: 'Headless Commerce Platform', category: 'E-commerce', problem: 'A monolithic storefront capping page speed and conversion.', solution: 'A headless, composable storefront with an optimized checkout.', technology: 'Next.js · TypeScript · Shopify · Stripe' },
  { title: 'High-Traffic Checkout', category: 'E-commerce', problem: 'Cart abandonment and slowdowns during peak sales events.', solution: 'A streamlined checkout engineered for Core Web Vitals and load.', technology: 'React · Node.js · Stripe · Redis' },
  { title: 'Retail Operations Integration', category: 'E-commerce', problem: 'Inventory and orders drifting across store, ERP, and POS.', solution: 'Real-time sync across commerce, ERP, and fulfillment.', technology: 'Node.js · Webhooks · PostgreSQL · AWS' },
  { title: 'AI Operations Platform', category: 'AI & Automation', problem: 'Manual, repetitive operational workflows.', solution: 'AI-powered, human-in-the-loop workflow automation.', technology: 'LLMs · Agents · APIs · Cloud' },
  { title: 'Scalable SaaS Platform', category: 'SaaS', problem: 'A product ready for a stronger technical foundation.', solution: 'Modern, multi-tenant cloud product architecture.', technology: 'React · TypeScript · Node.js · PostgreSQL' },
  { title: 'Mobile Product Ecosystem', category: 'Mobile', problem: 'A mobile experience connected to complex services.', solution: 'Cross-platform product and clean API integration.', technology: 'React Native · APIs · Auth · Deployment' },
]

// E-commerce first; everything else keeps its authored order (stable sort).
const orderedProjects = [...projects].sort((a, b) => Number(b.category === 'E-commerce') - Number(a.category === 'E-commerce'))

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
            <li><span className="svc-panel-idx">01</span> E-commerce &amp; retail systems</li>
            <li><span className="svc-panel-idx">02</span> AI &amp; agentic automation</li>
            <li><span className="svc-panel-idx">03</span> SaaS &amp; platform builds</li>
            <li><span className="svc-panel-idx">04</span> Mobile products</li>
          </ul>
        </SplitHero>

        <section className="section shell">
          <StatStrip items={workMetrics} />
        </section>

        <section id="work" className="section shell">
          <SectionHeading eyebrow="OUR SPECIALTY" title="E-commerce is where we do our deepest work." copy="Storefronts, checkout, and the operations behind them—engineered to convert and scale. Alongside commerce, we build AI, SaaS, and mobile systems for ambitious teams." />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {orderedProjects.map(({ title, category, problem, solution, technology }) => (
              <article className="case-card" key={title}>
                <div className="case-visual"><span>CASE STUDY<br />COMING SOON</span></div>
                <p className="eyebrow">{category}</p>
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
