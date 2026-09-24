import { pageMetadata } from '@/lib/metadata'
import { PageHero, SiteShell } from '@/components/site'
export const metadata=pageMetadata('Privacy Policy','A placeholder privacy policy for Nexio AI Solutions, pending legal review.','/privacy')
const sections: [string, string][] = [
  ['Information we collect','We may collect information you submit through the contact form, such as your name, work email, company, and project context.'],
  ['How we use information','Information is used to respond to inquiries, understand project needs, and communicate about requested services.'],
  ['Third parties','Any analytics, scheduling, hosting, or communication providers should be documented here after the production stack is finalized.'],
  ['Legal review required','This is not legal advice or a final privacy policy. Replace this content before publishing.'],
]
export default function Privacy(){return <SiteShell><main><PageHero title="Privacy Policy" copy="This placeholder policy is provided for site structure and must be reviewed and replaced by qualified legal counsel before launch."/><section className="legal-content shell"><p className="legal-updated">Last updated September 18, 2026</p><div className="legal-sections">{sections.map(([heading,body],i)=><article className="legal-row" key={heading}><div className="legal-row-head"><span className="legal-num">{String(i+1).padStart(2,'0')}</span><h2>{heading}</h2></div><p>{body}</p></article>)}</div></section></main></SiteShell>}
