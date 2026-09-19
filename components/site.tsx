'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'

export const navItems = [
  ['Services', '/services'], ['Solutions', '/solutions'], ['Recruitment', '/recruitment'], ['Approach', '/approach'], ['Work', '/work'], ['About', '/about'],
]

export function Logo() { return <Link href="/" className="flex items-center gap-3" aria-label="VectorShip home"><svg className="logo-mark" width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true"><defs><linearGradient id="vs-logo-g" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#308DFF" /><stop offset="1" stopColor="#65E2E0" /></linearGradient></defs><rect x="1" y="1" width="30" height="30" rx="8.5" fill="#0d1219" stroke="url(#vs-logo-g)" strokeOpacity="0.4" /><path d="M8.5 9 L15.5 22 L23.5 6.5" stroke="url(#vs-logo-g)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5 7.4 L23.5 6.5 L22.8 11.6" fill="none" stroke="url(#vs-logo-g)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="font-heading text-[19px] font-bold tracking-[-0.03em] text-foreground">VectorShip</span></Link> }

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
    <div className="shell flex h-18 items-center justify-between"><Logo /><nav className="hidden items-center gap-8 md:flex" aria-label="Primary">{navItems.map(([label, href]) => <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} className={isActive(href) ? 'nav-link-active' : ''}>{label}</Link>)}</nav><div className="hidden md:block"><Link href="/contact" className="button-primary inline-flex min-h-10 items-center rounded-sm px-4 py-2 text-sm">Let&apos;s Talk <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link></div><button className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-border md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav className="mobile-menu shell flex flex-col border-t border-border py-6 md:hidden" aria-label="Mobile primary">{navItems.map(([label, href], i) => <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} className={`mobile-nav-link ${isActive(href) ? 'nav-link-active' : ''}`} style={{ animationDelay: `${i * 40}ms` }} onClick={() => setOpen(false)}><span className="mobile-nav-num">{String(i + 1).padStart(2, '0')}</span><span>{label}</span><ChevronRight className="mobile-nav-arrow" aria-hidden="true" /></Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button-primary mobile-nav-cta inline-flex min-h-12 items-center justify-center rounded-sm px-4 py-2 text-sm" style={{ animationDelay: `${navItems.length * 40}ms` }}>Let&apos;s Talk <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link></nav>}
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

export function Footer() { return <footer className="footer"><div className="shell"><div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.5fr_repeat(3,1fr)]"><div className="footer-brand"><Logo /><p className="mt-4 max-w-xs text-sm text-muted-foreground">Move fast. Ship better. Senior engineering for ambitious teams.</p></div><FooterAccordion title="Company" links={[['About', '/about'], ['Approach', '/approach'], ['Recruitment', '/recruitment'], ['Work', '/work'], ['Contact', '/contact']]} /><FooterAccordion title="Solutions" links={[['AI & Automation', '/solutions/ai-automation'], ['Software Engineering', '/solutions/software-engineering'], ['Mobile', '/solutions/mobile'], ['Cloud & DevOps', '/solutions/cloud-devops']]} /><div className="footer-col footer-connect"><p className="footer-label">Connect</p><a href="#" aria-label="LinkedIn placeholder" className="footer-link" onClick={e => e.preventDefault()}><span>LinkedIn</span><ArrowUpRight aria-hidden="true" /></a><a href="#" aria-label="GitHub placeholder" className="footer-link" onClick={e => e.preventDefault()}><span>GitHub</span><ArrowUpRight aria-hidden="true" /></a><a href="mailto:hello@vectorship.ai" className="footer-link"><span>Email</span><ArrowUpRight aria-hidden="true" /></a></div></div><div className="flex flex-col items-center gap-3 pt-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left"><span>© 2026 VectorShip AI Solutions. All rights reserved.</span><span className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></span></div></div></footer> }

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">{copy}</p>}</div> }

export function PageHero({ eyebrow='VECTORSHIP AI SOLUTIONS', title, copy, children }: { eyebrow?: string; title: string; copy: string; children?: React.ReactNode }) { return <section className="page-hero shell"><p className="eyebrow"><span className="pulse-dot" />{eyebrow}</p><h1 className="text-balance">{title}</h1><p className="page-lede">{copy}</p>{children}</section> }

export function CTA({ title='Have a problem worth solving?', copy='Let’s understand it, architect it, and ship the right solution.' }: { title?: string; copy?: string }) { return <section className="cta-section"><div className="shell text-center"><p className="eyebrow justify-center">READY WHEN YOU ARE</p><h2>{title}</h2><p>{copy}</p><div className="mt-8 flex justify-center"><Link href="/contact" className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Start a Conversation <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link></div><p className="cta-reassure">You&apos;ll talk to senior engineers, not account managers. No pressure, no obligation.</p></div></section> }

export function CardGrid({ items }: { items: { title: string; copy: string; href?: string; label?: string; cta?: string }[] }) { return <div className="grid gap-4 md:grid-cols-2">{items.map((item, i) => <article className="capability-card" key={item.title}><div className="capability-head"><p className="eyebrow">{item.label || 'ENGINEERING CAPABILITY'}</p><span className="capability-number">{String(i + 1).padStart(2, '0')}</span></div><h3>{item.title}</h3><p className="card-copy">{item.copy}</p>{item.href && <Link href={item.href} className="card-link">{item.cta || 'Explore capability'} <ChevronRight className="size-4" /></Link>}</article>)}</div> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Navbar />{children}<Footer /></> }
