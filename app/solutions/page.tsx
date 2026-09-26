import { pageMetadata } from '@/lib/metadata'
import { CardGrid, CTA, SectionHeading, SiteShell } from '@/components/site'
import { SplitHero } from '@/components/motion-sections'
import { solutionLinks } from '@/lib/site-data'

export const metadata = pageMetadata('AI, Software, Mobile & Cloud Solutions', 'Practical AI development, custom software, mobile app, and cloud DevOps solutions aligned to the problem you are solving.', '/solutions')

const solutionProcess = [
  ['01', 'Problem', 'We start with the outcome you actually need.'],
  ['02', 'Strategy', 'We decide the approach before touching a stack.'],
  ['03', 'Architecture', 'We design a system that stays maintainable.'],
  ['04', 'Engineering', 'We build in focused, visible iterations.'],
  ['05', 'Deployment', 'We ship, test, document, and hand over.'],
  ['06', 'Optimization', 'We improve based on real-world usage.'],
]

export default function Solutions() {
  return (
    <SiteShell>
      <main>
        <SplitHero
          eyebrow="NEXIO AI SOLUTIONS"
          title="The right technology solution for the problem you&apos;re actually solving."
          copy="We do not force clients into a stack or a trend. We start with the outcome, then choose the strategy, architecture, and engineering path that makes sense—across AI, software, mobile, and cloud."
          primary={{ label: 'Start a Project', href: '/contact' }}
          secondary={{ label: 'View solution areas', href: '#solutions' }}
          trust={['Outcome-first', 'No stack lock-in', 'Senior ownership']}
        >
          <p className="svc-panel-label">How we work</p>
          <div className="svc-stats">
            <div className="svc-stat"><strong>4</strong><span>Solution areas</span></div>
            <div className="svc-stat"><strong>Any</strong><span>Stack, chosen to fit</span></div>
            <div className="svc-stat"><strong>6</strong><span>Industries served</span></div>
            <div className="svc-stat"><strong>E2E</strong><span>Problem → production</span></div>
          </div>
          <p className="svc-panel-flow">Problem <span>→</span> Strategy <span>→</span> Architecture <span>→</span> Build <span>→</span> Deploy</p>
        </SplitHero>

        <section id="solutions" className="section shell">
          <SectionHeading eyebrow="SOLUTION AREAS" title="Focused engineering capabilities. No technology theater." copy="Four core areas we build in—chosen and combined around the problem in front of us, not a fixed menu." />
          <div className="mt-12"><CardGrid items={solutionLinks} /></div>
        </section>

        <section id="approach" className="section approach-section">
          <div className="shell">
            <SectionHeading eyebrow="HOW WE WORK" title="From the problem to a system that keeps improving." copy="Every solution moves through the same clear path—so the technology always serves the outcome, not the other way around." action={{ label: 'How we work', href: '/about#method' }} />
            <div className="process-grid">
              {solutionProcess.map(([number, title, copy]) => (
                <article className="process-step" key={number}>
                  <span className="process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </SiteShell>
  )
}
