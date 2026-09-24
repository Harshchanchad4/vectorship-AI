import { pageMetadata } from '@/lib/metadata'
import { PageHero, SiteShell } from '@/components/site'
export const metadata=pageMetadata('Terms of Service','Placeholder terms of service for Nexio AI Solutions, pending legal review.','/terms')
const sections: [string, string][] = [
  ['Use of this website','This website provides general information about Nexio AI Solutions and is not a binding statement of scope, pricing, or deliverables.'],
  ['Project agreements','Services, deliverables, intellectual property, confidentiality, payment, and support terms should be defined in a written agreement for each engagement.'],
  ['Content accuracy','We aim to keep the site clear and current, but content may change as the company and its services evolve.'],
  ['Legal review required','This is not legal advice or a final terms document. Replace this content before publishing.'],
]
export default function Terms(){return <SiteShell><main><PageHero title="Terms of Service" copy="This placeholder page is included for site completeness and must be reviewed and replaced by qualified legal counsel before launch."/><section className="legal-content shell"><p className="legal-updated">Last updated September 18, 2026</p><div className="legal-sections">{sections.map(([heading,body],i)=><article className="legal-row" key={heading}><div className="legal-row-head"><span className="legal-num">{String(i+1).padStart(2,'0')}</span><h2>{heading}</h2></div><p>{body}</p></article>)}</div></section></main></SiteShell>}
