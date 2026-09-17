'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const navItems = [
  ['Services', '/services'], ['Solutions', '/solutions'], ['Approach', '/approach'], ['Work', '/work'], ['About', '/about'],
]

export function Logo() { return <Link href="/" className="flex items-center gap-3" aria-label="VectorShip home"><span className="logo-mark"><span /><span /></span><span className="text-[15px] font-semibold tracking-[-0.03em] text-foreground">VectorShip</span></Link> }

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="shell flex h-18 items-center justify-between"><Logo /><nav className="hidden items-center gap-8 md:flex" aria-label="Primary">{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><div className="hidden md:block"><Link href="/contact" className="button-primary inline-flex h-10 items-center rounded-sm px-4 text-sm">Let&apos;s Talk <ArrowUpRight className="ml-2 size-4" /></Link></div><button className="inline-flex size-10 items-center justify-center rounded-sm border border-border md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav className="mobile-menu shell flex flex-col gap-5 border-t border-border py-6 md:hidden" aria-label="Mobile primary">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button-primary inline-flex h-10 items-center justify-center rounded-sm px-4 text-sm">Let&apos;s Talk <ArrowUpRight className="ml-2 size-4" /></Link></nav>}
  </header>
}

export function Footer() { return <footer className="footer"><div className="shell"><div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.5fr_repeat(3,1fr)]"><div><Logo /><p className="mt-4 max-w-xs text-sm text-muted-foreground">Move fast. Ship better. Senior engineering for ambitious teams.</p></div><div><p className="footer-label">Company</p>{[['About','/about'],['Approach','/approach'],['Work','/work'],['Contact','/contact']].map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div><div><p className="footer-label">Solutions</p>{[['AI & Automation','/solutions/ai-automation'],['Software Engineering','/solutions/software-engineering'],['Mobile','/solutions/mobile'],['Cloud & DevOps','/solutions/cloud-devops']].map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div><div><p className="footer-label">Connect</p><a href="#" aria-label="LinkedIn placeholder">LinkedIn</a><a href="#" aria-label="GitHub placeholder">GitHub</a><a href="mailto:hello@vectorship.ai">Email</a></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between"><span>© 2026 VectorShip AI Solutions. All rights reserved.</span><span className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></span></div></div></footer> }

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">{copy}</p>}</div> }

export function PageHero({ eyebrow='VECTORSHIP AI SOLUTIONS', title, copy, children }: { eyebrow?: string; title: string; copy: string; children?: React.ReactNode }) { return <section className="page-hero shell"><p className="eyebrow"><span className="pulse-dot" />{eyebrow}</p><h1 className="text-balance">{title}</h1><p className="page-lede">{copy}</p>{children}</section> }

export function CTA({ title='Have a problem worth solving?', copy='Let’s understand it, architect it, and ship the right solution.' }: { title?: string; copy?: string }) { return <section className="cta-section"><div className="shell text-center"><p className="eyebrow justify-center">READY WHEN YOU ARE</p><h2>{title}</h2><p>{copy}</p><div className="mt-8 flex justify-center"><Link href="/contact" className="button-primary inline-flex h-12 items-center rounded-sm px-5">Start a Conversation <ArrowUpRight className="ml-2 size-4" /></Link></div></div></section> }

export function CardGrid({ items }: { items: { title: string; copy: string; href?: string; label?: string }[] }) { return <div className="grid gap-4 md:grid-cols-2">{items.map(item => <article className="capability-card" key={item.title}><p className="eyebrow">{item.label || 'ENGINEERING CAPABILITY'}</p><h3>{item.title}</h3><p className="card-copy">{item.copy}</p>{item.href && <Link href={item.href} className="card-link">Explore capability <ChevronRight className="size-4" /></Link>}</article>)}</div> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Navbar />{children}<Footer /></> }

export const solutionLinks = [
  { title: 'AI & Agentic Automation', href: '/solutions/ai-automation', copy: 'Agents, copilots, RAG, and intelligent workflow systems.' },
  { title: 'Software Engineering', href: '/solutions/software-engineering', copy: 'SaaS platforms, APIs, backends, and modern product architecture.' },
  { title: 'Mobile Engineering', href: '/solutions/mobile', copy: 'Cross-platform and native mobile products built for real users.' },
  { title: 'Cloud & DevOps', href: '/solutions/cloud-devops', copy: 'Secure infrastructure, CI/CD, observability, and scale.' },
]

export const serviceLinks = [
  { title: 'AI & Agentic Automation', href: '/solutions/ai-automation', copy: 'Build intelligent systems that understand, decide, and act.' },
  { title: 'Web & Software Engineering', href: '/solutions/software-engineering', copy: 'Modern applications, APIs, and scalable product architectures.' },
  { title: 'Mobile Engineering', href: '/solutions/mobile', copy: 'Reliable mobile experiences using modern technologies.' },
  { title: 'Backend & API Engineering', copy: 'Durable services, integrations, data models, and backend systems.' },
  { title: 'Cloud & DevOps', href: '/solutions/cloud-devops', copy: 'Deployment automation, infrastructure, monitoring, and security.' },
  { title: 'Product Development', copy: 'From product direction to production-ready software.' },
  { title: 'Technology Modernization', copy: 'Reduce technical drag and create a clear path forward.' },
  { title: 'Maintenance & Scaling', copy: 'Keep important systems healthy, useful, and ready for growth.' },
]

export const processSteps = [['01','Understand','We start with the business problem.'],['02','Architect','We define the right technical direction.'],['03','Build','We work in focused, visible iterations.'],['04','Ship','We test, deploy, document, and hand over properly.'],['05','Improve','We optimize based on real-world feedback.']]

export const techStack = ['React','Next.js','TypeScript','Node.js','Python','PostgreSQL','MongoDB','Redis','AWS','Docker']
