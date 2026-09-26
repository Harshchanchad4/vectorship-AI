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
    const budgetRaw = str('budget')
    const payload = {
      name: str('name'),
      email: str('email'),
      company: str('company'),
      type: str('type') === 'Choose one' ? '' : str('type'),
      problem: str('problem'),
      timeline: str('timeline') === 'Choose one' ? '' : str('timeline'),
      budget: budgetRaw === 'Custom range' ? str('budgetCustom') : budgetRaw === 'Choose one' ? '' : budgetRaw,
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
        <label>Full Name<input required name="name" /></label>
        <label>Work Email<input required type="email" name="email" /></label>
      </div>
      <div className="form-row">
        <label>Company<input name="company" /></label>
        <label>Project Type<select name="type"><option>Choose one</option><option>AI &amp; automation</option><option>Software engineering</option><option>Mobile</option><option>Cloud &amp; DevOps</option></select></label>
      </div>
      <label>What are you trying to solve?<textarea required name="problem" rows={5} /></label>
      <div className="form-row">
        <label>Expected Timeline<select name="timeline"><option>Choose one</option><option>Exploring</option><option>Next 1–3 months</option><option>Immediate</option></select></label>
        <label>Budget Range
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
        <label>Your budget range<input required name="budgetCustom" placeholder="e.g. $40k–$60k, or around $120k" /></label>
      )}
      {error && <p className="form-error">{error}</p>}
      <Button className="button-primary min-h-12 w-fit rounded-sm px-5 py-3" type="submit" disabled={loading}>
        {loading ? 'Sending…' : <>Send Project Brief <Send className="ml-2 size-4 shrink-0" /></>}
      </Button>
    </form>
  )
}
