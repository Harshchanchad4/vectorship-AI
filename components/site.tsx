'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X, Sparkles, Code2, Smartphone, Cloud, Landmark, HeartPulse, Layers, ShoppingCart, Truck, Briefcase, type LucideIcon } from 'lucide-react'
import { solutionLinks, industryLinks } from '@/lib/site-data'

// Icon per dropdown destination — keyed by href so Solutions and Industries both resolve.
const navIcons: Record<string, LucideIcon> = {
  '/solutions/ai-automation': Sparkles,
  '/solutions/software-engineering': Code2,
  '/solutions/mobile': Smartphone,
  '/solutions/cloud-devops': Cloud,
  '/industries/fintech': Landmark,
  '/industries/healthcare': HeartPulse,
  '/industries/saas-startups': Layers,
  '/industries/ecommerce': ShoppingCart,
  '/industries/logistics': Truck,
  '/industries/professional-services': Briefcase,
}

export const navItems: { label: string; href: string; children?: { title: string; href: string; copy: string }[] }[] = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions', children: solutionLinks },
  { label: 'Industries', href: '/industries', children: industryLinks },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
]

export function Logo() { return <Link href="/" className="flex items-center gap-3" aria-label="Nexio home"><svg className="logo-mark" width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true"><defs><linearGradient id="nx-logo-g" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2C5FD6" /><stop offset="1" stopColor="#6A9BFF" /></linearGradient></defs><rect x="1" y="1" width="30" height="30" rx="8.5" fill="#0d1219" stroke="url(#nx-logo-g)" strokeOpacity="0.4" /><path d="M9 23 L9 9 L23 23 L23 9" fill="none" stroke="url(#nx-logo-g)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="9" r="2" fill="url(#nx-logo-g)" /><circle cx="23" cy="23" r="2" fill="url(#nx-logo-g)" /><circle cx="23" cy="9" r="2" fill="url(#nx-logo-g)" /></svg><span className="font-heading text-[19px] font-bold tracking-[-0.03em] text-foreground">Nexio</span></Link> }

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="shell flex h-18 items-center justify-between"><Logo /><nav className="hidden items-center gap-8 md:flex" aria-label="Primary">{navItems.map(({ label, href, children }) => children ? (
      <div className="nav-item-has-children" key={href}>
        <Link href={href} aria-current={isActive(href) ? 'page' : undefined} className={isActive(href) ? 'nav-link-active' : ''}>{label} <ChevronDown className="nav-caret" aria-hidden="true" /></Link>
        <div className="nav-dropdown"><div className="nav-dropdown-panel">
          <div className="nav-dropdown-grid">{children.map(c => { const Icon = navIcons[c.href] ?? ChevronRight; return (
            <Link key={c.href} href={c.href} className="nav-dropdown-item"><span className="nav-dropdown-icon"><Icon className="size-[18px]" aria-hidden="true" /></span><span className="nav-dropdown-text"><span>{c.title}</span><small>{c.copy}</small></span></Link>
          )})}</div>
          <Link href="/contact" className="nav-dropdown-cta"><span className="nav-dropdown-cta-eyebrow">DON&apos;T SEE YOURS?</span><strong>Tell us what you&apos;re building.</strong><p>Share the problem and we&apos;ll map the right approach.</p><span className="card-link mt-0!">Get in touch <ArrowUpRight className="size-4" /></span></Link>
          <div className="nav-dropdown-foot"><span>{children.length} OPTIONS</span><Link href={href} className="card-link mt-0!">View all {label.toLowerCase()} <ArrowUpRight className="size-4" /></Link></div>
        </div></div>
      </div>
    ) : <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} className={isActive(href) ? 'nav-link-active' : ''}>{label}</Link>)}</nav><div className="hidden md:block"><Link href="/contact" className="button-primary inline-flex min-h-10 items-center rounded-sm px-4 py-2 text-sm">Let&apos;s Talk <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link></div><button className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-border md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav className="mobile-menu shell flex flex-col border-t border-border py-6 md:hidden" aria-label="Mobile primary">{navItems.map(({ label, href, children }, i) => <div className="mobile-nav-row" key={href}><Link href={href} aria-current={isActive(href) ? 'page' : undefined} className={`mobile-nav-link ${isActive(href) ? 'nav-link-active' : ''}`} style={{ animationDelay: `${i * 40}ms` }} onClick={() => setOpen(false)}><span className="mobile-nav-num">{String(i + 1).padStart(2, '0')}</span><span>{label}</span><ChevronRight className="mobile-nav-arrow" aria-hidden="true" /></Link>{children && <div className="mobile-nav-children">{children.map(c => <Link key={c.href} href={c.href} className="mobile-nav-child" onClick={() => setOpen(false)}>{c.title}</Link>)}</div>}</div>)}<Link href="/contact" onClick={() => setOpen(false)} className="button-primary mobile-nav-cta inline-flex min-h-12 items-center justify-center rounded-sm px-4 py-2 text-sm" style={{ animationDelay: `${navItems.length * 40}ms` }}>Let&apos;s Talk <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link></nav>}
  </header>
}

function FooterAccordion({ title, links }: { title: string; links: [string, string][] }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="footer-col footer-accordion">
      <button type="button" className="footer-accordion-trigger" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <span className="footer-label">{title}</span>
        <ChevronDown className="footer-accordion-icon" aria-hidden="true" />
      </button>
      <div className="footer-accordion-panel" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="footer-accordion-inner">{links.map(([l, h]) => <Link key={h} href={h} className="footer-link"><span>{l}</span><ArrowUpRight aria-hidden="true" /></Link>)}</div>
      </div>
    </div>
  )
}

export function Footer() { return <footer className="footer"><div className="shell"><div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.5fr_repeat(3,1fr)]"><div className="footer-brand"><Logo /><p className="mt-4 max-w-xs text-sm text-muted-foreground">Move fast. Ship better. Senior engineering for ambitious teams.</p></div><FooterAccordion title="Company" links={[['About', '/about'], ['How We Work', '/about#method'], ['Recruitment', '/recruitment'], ['Work', '/work'], ['Contact', '/contact']]} /><FooterAccordion title="Solutions" links={[['AI & Automation', '/solutions/ai-automation'], ['Software Engineering', '/solutions/software-engineering'], ['Mobile', '/solutions/mobile'], ['Cloud & DevOps', '/solutions/cloud-devops']]} /><div className="footer-col footer-connect"><p className="footer-label">Connect</p><a href="#" aria-label="LinkedIn placeholder" className="footer-link" onClick={e => e.preventDefault()}><span>LinkedIn</span><ArrowUpRight aria-hidden="true" /></a><a href="mailto:hello@vectorship.ai" className="footer-link"><span>Email</span><ArrowUpRight aria-hidden="true" /></a></div></div><div className="flex flex-col items-center gap-3 pt-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left"><span>© 2026 Nexio AI Solutions. All rights reserved.</span><span className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></span></div></div></footer> }

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow: string; title: string; copy?: string; action?: { label: string; href: string } }) {
  const heading = <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 text-balance text-[clamp(1.7rem,2.6vw,2.5rem)] font-semibold leading-[1.22] tracking-[-0.045em] text-foreground">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">{copy}</p>}</div>
  if (!action) return heading
  return <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">{heading}<Link href={action.href} className="card-link mt-0! shrink-0 whitespace-nowrap">{action.label} <ArrowUpRight className="size-4" /></Link></div>
}

export function PageHero({ eyebrow='VECTORSHIP AI SOLUTIONS', title, copy, children }: { eyebrow?: string; title: string; copy: string; children?: React.ReactNode }) { return <section className="page-hero shell"><p className="eyebrow"><span className="pulse-dot" />{eyebrow}</p><h1 className="text-balance">{title}</h1><p className="page-lede">{copy}</p>{children}</section> }

export function CTA({ title='Have a problem worth solving?', copy='Let’s understand it, architect it, and ship the right solution.' }: { title?: string; copy?: string }) { return <section className="cta-section"><div className="shell text-center"><p className="eyebrow justify-center">READY WHEN YOU ARE</p><h2>{title}</h2><p>{copy}</p><div className="mt-8 flex justify-center"><Link href="/contact" className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Start a Conversation <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link></div><p className="cta-reassure">You&apos;ll talk to senior engineers, not account managers. No pressure, no obligation.</p></div></section> }

export function CardGrid({ items }: { items: { title: string; copy: string; href?: string; label?: string; cta?: string }[] }) { return <div className="grid gap-4 md:grid-cols-2">{items.map((item, i) => <article className="capability-card" key={item.title}><div className="capability-head"><p className="eyebrow">{item.label || 'ENGINEERING CAPABILITY'}</p><span className="capability-number">{String(i + 1).padStart(2, '0')}</span></div><h3>{item.title}</h3><p className="card-copy">{item.copy}</p>{item.href && <Link href={item.href} className="card-link">{item.cta || 'Explore capability'} <ChevronRight className="size-4" /></Link>}</article>)}</div> }

// Note: .faq-item is intentionally excluded — the Faq component manages its own
// reveal in React state so open/close re-renders don't wipe an imperatively-added class.
const REVEAL_SELECTOR = '.capability-card, .profile-card, .case-card, .booking-card, .why-item, .trust-item, .process-step, .tech-group, .overlap-banner'

function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    if (targets.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(el => el.classList.add('is-visible'))
      return
    }

    const groups = new Map<Element | null, HTMLElement[]>()
    targets.forEach(el => {
      const parent = el.parentElement
      const siblings = groups.get(parent) ?? []
      siblings.push(el)
      groups.set(parent, siblings)
    })
    groups.forEach(siblings => siblings.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 70}ms`)
    }))

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' })

    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Navbar /><ScrollReveal />{children}<Footer /></> }
