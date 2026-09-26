// Contact form handler. Each submitted brief can be delivered up to three ways
// so a single failure never loses a lead:
//   1. Emailed to CONTACT_TO via Resend's REST API (instant notification).
//   2. Appended as a row to a Google Sheet via an Apps Script webhook (record).
//   3. Posted to a form-backend provider (Formspree / Basin / Getform), which
//      both stores the submission in its dashboard and emails you.
// Each is optional. Any one alone is enough — the request succeeds if at least
// one configured sink works, and only fails when every configured sink fails.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const TO = process.env.CONTACT_TO || 'chanchadharsh4@gmail.com'
// Uses Resend's shared onboarding sender until a verified domain is added.
const FROM = process.env.CONTACT_FROM || 'Nexio Contact <onboarding@resend.dev>'
const SHEET_URL = process.env.SHEET_WEBHOOK_URL || ''
const SHEET_TOKEN = process.env.SHEET_WEBHOOK_TOKEN || ''
// Formspree / Basin / Getform endpoint, e.g. https://usebasin.com/f/xxxx
const FORM_ENDPOINT = process.env.FORM_ENDPOINT || ''

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

// --- Abuse protection ---------------------------------------------------------
// Server-side rate limit: at most RATE_MAX submissions per IP in RATE_WINDOW_MS.
// In-memory, so it resets on redeploy/cold start and is per-instance (fine for a
// low-traffic contact form). For a hard guarantee across serverless instances,
// swap `hits` for a shared store like Upstash Redis.
const RATE_MAX = 5
const RATE_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  // Opportunistic cleanup so the map can't grow unbounded across many IPs.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every(t => now - t >= RATE_WINDOW_MS)) hits.delete(k)
  }
  return false
}

function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

type Brief = {
  name: string
  email: string
  phone: string
  role: string
  company: string
  website: string
  type: string
  services: string
  timeline: string
  budget: string
  problem: string
  referral: string
}

// Returns true/false when configured, or null when this sink is switched off.
async function sendEmail(b: Brief): Promise<boolean | null> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null

  const fields: [string, string][] = [
    ['Name', b.name],
    ['Email', b.email],
    ['Phone', b.phone || '—'],
    ['Role', b.role || '—'],
    ['Company', b.company || '—'],
    ['Website', b.website || '—'],
    ['Project type', b.type || '—'],
    ['Needs', b.services || '—'],
    ['Timeline', b.timeline || '—'],
    ['Budget', b.budget || '—'],
    ['Heard via', b.referral || '—'],
  ]
  const rows = fields.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#8d9aaa;font:14px/1.5 sans-serif;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#0b0f14;font:14px/1.5 sans-serif">${esc(v)}</td></tr>`).join('')
  const html = `<div style="max-width:560px"><h2 style="font:600 18px sans-serif;color:#0b0f14">New project brief</h2><table style="border-collapse:collapse;margin:12px 0">${rows}</table><p style="color:#8d9aaa;font:14px sans-serif;margin:16px 0 4px">What they're trying to solve</p><p style="color:#0b0f14;font:14px/1.7 sans-serif;white-space:pre-wrap">${esc(b.problem)}</p></div>`
  const text = [...fields.map(([k, v]) => `${k}: ${v}`), '', 'Problem:', b.problem].join('\n')

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [TO], reply_to: b.email, subject: `New project brief — ${b.name}`, html, text }),
    })
    if (!res.ok) {
      console.error('Resend error', res.status, await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error('Resend request failed', err)
    return false
  }
}

// Appends one row to the Google Sheet through its Apps Script web app.
async function appendToSheet(b: Brief): Promise<boolean | null> {
  if (!SHEET_URL) return null
  try {
    const res = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...b, token: SHEET_TOKEN }),
    })
    const out = await res.json().catch(() => ({}))
    if (!res.ok || out.ok === false) {
      console.error('Sheet webhook error', res.status, out)
      return false
    }
    return true
  } catch (err) {
    console.error('Sheet request failed', err)
    return false
  }
}

// Posts the brief to a form-backend provider (Formspree / Basin / Getform).
// These accept a plain JSON body and use the `email` field as the reply-to.
async function sendToFormBackend(b: Brief): Promise<boolean | null> {
  if (!FORM_ENDPOINT) return null
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: b.name,
        email: b.email,
        phone: b.phone,
        role: b.role,
        company: b.company,
        website: b.website,
        'project type': b.type,
        needs: b.services,
        timeline: b.timeline,
        budget: b.budget,
        'heard via': b.referral,
        message: b.problem,
      }),
    })
    if (!res.ok) {
      console.error('Form backend error', res.status, await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error('Form backend request failed', err)
    return false
  }
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY && !SHEET_URL && !FORM_ENDPOINT) {
    return Response.json({ error: 'Email is not configured yet. Add FORM_ENDPOINT (Formspree/Basin), RESEND_API_KEY, or SHEET_WEBHOOK_URL to .env.local.' }, { status: 500 })
  }

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const get = (k: string) => (typeof data[k] === 'string' ? (data[k] as string).trim() : '')

  // Honeypot: real users never see or fill the `company_url` field. If it has a
  // value, it's a bot — pretend success so the bot gets no signal, but do nothing.
  if (get('company_url')) {
    return Response.json({ ok: true })
  }

  // Rate limit by IP.
  if (isRateLimited(clientIp(request))) {
    return Response.json({ error: 'Too many submissions. Please try again in a few minutes.' }, { status: 429 })
  }

  const brief: Brief = {
    name: get('name'),
    email: get('email'),
    phone: get('phone'),
    role: get('role'),
    company: get('company'),
    website: get('website'),
    type: get('type'),
    services: get('services'),
    timeline: get('timeline'),
    budget: get('budget'),
    problem: get('problem'),
    referral: get('referral'),
  }
  if (!brief.name || !brief.email || !brief.problem) {
    return Response.json({ error: 'Name, email, and project details are required.' }, { status: 400 })
  }

  const outcomes = await Promise.all([sendEmail(brief), appendToSheet(brief), sendToFormBackend(brief)])
  const attempted = outcomes.filter((r): r is boolean => r !== null)
  if (attempted.length > 0 && attempted.every(ok => ok === false)) {
    return Response.json({ error: 'Could not send your message. Please email us directly.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
