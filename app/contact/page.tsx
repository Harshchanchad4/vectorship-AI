import { ArrowUpRight, CalendarClock } from 'lucide-react'
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

        <section id="project-inquiry" className="section shell contact-grid">
          <div>
            <p className="eyebrow">PROJECT INQUIRY</p>
            <ContactForm />
          </div>
          <aside className="booking-card">
            <p className="eyebrow">CALENDAR</p>
            <h2>Technical Architecture Review</h2>
            <strong>15 minutes</strong>
            <p className="card-copy">A short conversation to understand your challenge and determine whether Nexio is the right technical partner.</p>
            <div className="calendar-placeholder">
              <CalendarClock className="size-5" aria-hidden="true" />
              <span>Live scheduling is on the way</span>
              <small>Email us your best times and we&apos;ll confirm a slot within one business day.</small>
            </div>
            <a href="mailto:hello@nexio.ai?subject=Architecture%20Review" className="button-primary mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-sm py-3 text-center">Request a Time <ArrowUpRight className="ml-2 size-4 shrink-0" /></a>
          </aside>
        </section>
      </main>
    </SiteShell>
  )
}
