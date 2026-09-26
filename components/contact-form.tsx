'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [budget, setBudget] = useState('Choose one')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (sent) return (
    <div className="success-card">
      <h2>Thanks—we have your brief.</h2>
      <p>We&apos;ll review the context and follow up with the next useful step.</p>
    </div>
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    const str = (k: string) => (fd.get(k) ?? '').toString().trim()
    const clean = (v: string) => (v === 'Choose one' ? '' : v)
    const budgetRaw = str('budget')
    const payload = {
      name: str('name'),
      email: str('email'),
      phone: str('phone'),
      role: str('role'),
      company: str('company'),
      website: str('website'),
      type: clean(str('type')),
      services: fd.getAll('services').map(s => s.toString()).join(', '),
      problem: str('problem'),
      timeline: clean(str('timeline')),
      budget: budgetRaw === 'Custom range' ? str('budgetCustom') : clean(budgetRaw),
      referral: clean(str('referral')),
      company_url: str('company_url'), // honeypot — must stay empty
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.error || 'Something went wrong. Please try again.')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot: hidden from real users, tempting to bots. Leave it empty. */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      <div className="form-row">
        <label><span className="field-label">Full Name</span><input required name="name" autoComplete="name" /></label>
        <label><span className="field-label">Work Email</span><input required type="email" name="email" autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label><span className="field-label">Phone <span className="form-optional">optional</span></span><input type="tel" name="phone" autoComplete="tel" /></label>
        <label><span className="field-label">Your Role <span className="form-optional">optional</span></span><input name="role" placeholder="e.g. Founder, CTO, Product Lead" /></label>
      </div>
      <div className="form-row">
        <label><span className="field-label">Company <span className="form-optional">optional</span></span><input name="company" autoComplete="organization" /></label>
        <label><span className="field-label">Company Website <span className="form-optional">optional</span></span><input type="url" name="website" placeholder="https://" autoComplete="url" /></label>
      </div>
      <label><span className="field-label">Project Type</span><select name="type"><option>Choose one</option><option>AI &amp; automation</option><option>Software engineering</option><option>Mobile</option><option>Cloud &amp; DevOps</option></select></label>
      <fieldset className="form-fieldset">
        <span className="form-field-label">What do you need help with? <span className="form-optional">(select any)</span></span>
        <div className="form-checks">
          {['AI & automation', 'Software engineering', 'Mobile', 'Cloud & DevOps', 'Data & analytics', 'Recruitment / talent'].map(s => (
            <label className="form-check" key={s}><input type="checkbox" name="services" value={s} /><span>{s}</span></label>
          ))}
        </div>
      </fieldset>
      <label><span className="field-label">What are you trying to solve?</span><textarea required name="problem" rows={6} placeholder="Describe the problem, what you've tried, and what a good outcome looks like." /></label>
      <div className="form-row">
        <label><span className="field-label">Expected Timeline</span><select name="timeline"><option>Choose one</option><option>Exploring</option><option>Next 1–3 months</option><option>Immediate</option></select></label>
        <label><span className="field-label">Budget Range</span>
          <select name="budget" value={budget} onChange={e => setBudget(e.target.value)}>
            <option>Choose one</option>
            <option>$10k–$25k</option>
            <option>$25k–$75k</option>
            <option>$75k+</option>
            <option>Custom range</option>
          </select>
        </label>
      </div>
      {budget === 'Custom range' && (
        <label><span className="field-label">Your budget range</span><input required name="budgetCustom" placeholder="e.g. $40k–$60k, or around $120k" /></label>
      )}
      <label><span className="field-label">How did you hear about us? <span className="form-optional">optional</span></span>
        <select name="referral">
          <option>Choose one</option>
          <option>Google / search</option>
          <option>Referral</option>
          <option>LinkedIn</option>
          <option>Social media</option>
          <option>Blog / article</option>
          <option>Other</option>
        </select>
      </label>
      {error && <p className="form-error">{error}</p>}
      <Button className="button-primary mx-auto mt-2 min-h-14 w-fit rounded-sm px-10 py-4 text-base" type="submit" disabled={loading}>
        {loading ? 'Sending…' : <>Send Project Brief <Send className="ml-2 size-5 shrink-0" /></>}
      </Button>
    </form>
  )
}
