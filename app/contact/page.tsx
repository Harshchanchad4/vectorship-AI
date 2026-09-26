import { ContactForm } from '@/components/contact-form'
import { SiteShell } from '@/components/site'
import { SplitHero } from '@/components/motion-sections'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Contact Our Software Development Team', 'Contact Nexio to start a technical conversation about the software, AI, or automation project you are building.', '/contact')

export default function Contact() {
  return (
    <SiteShell>
      <main>
        <SplitHero
          eyebrow="CONTACT NEXIO"
          title="Let's talk about the software you're building."
          copy="Tell us what you're trying to build, automate, improve, or solve. We'll come prepared to discuss the technical path forward."
          primary={{ label: 'Start the conversation', href: '#project-inquiry' }}
          secondary={{ label: 'Email us directly', href: 'mailto:hello@nexio.ai?subject=Project%20Inquiry' }}
          trust={['Reply within 1 business day', 'Senior engineers', 'No obligation']}
        >
          <p className="svc-panel-label">What happens next</p>
          <ul className="svc-panel-list">
            <li><span className="svc-panel-idx">01</span> We reply within one business day</li>
            <li><span className="svc-panel-idx">02</span> A 15-minute architecture review</li>
            <li><span className="svc-panel-idx">03</span> A scoped, honest technical plan</li>
          </ul>
        </SplitHero>

        <section id="project-inquiry" className="section shell">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="eyebrow justify-center">PROJECT INQUIRY</p>
              <h2 className="mt-4 text-balance text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.22] tracking-[-0.04em] text-foreground">Tell us about your project.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">The more context you share, the more useful our first reply will be. Everything except your name, email, and the problem is optional—fill in what's relevant.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
