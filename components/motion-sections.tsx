'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronRight, Check, Plus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react'

// Shared entrance variants — a soft fade + slide-up with an eased curve.
// Children stagger so each element arrives just after the previous one.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

// Section 1 — Hero copy. Animates on mount (page load).
export function HeroCopy() {
  const reduce = useReducedMotion()
  const variants = reduce ? undefined : item
  return (
    <motion.div
      className="hero-copy"
      variants={reduce ? undefined : container}
      initial={reduce ? false : 'hidden'}
      animate={reduce ? undefined : 'show'}
    >
      <motion.p className="eyebrow" variants={variants}><span className="pulse-dot" /> AI SOFTWARE DEVELOPMENT COMPANY</motion.p>
      <motion.h1 variants={variants}>We Don&apos;t Just Write Code.<br /><span>We Ship Solutions.</span></motion.h1>
      <motion.p className="hero-lede" variants={variants}>Nexio is an AI software development company helping ambitious companies design, build, automate, and scale high-performance digital products—from custom web platforms and mobile applications to AI agents and intelligent automation.</motion.p>
      <motion.div className="hero-cta-group mt-8 flex flex-wrap gap-3" variants={variants}>
        <Link href="/contact" className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Schedule a Call <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link>
        <Link href="/services" className="button-secondary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Explore Services</Link>
      </motion.div>
      <motion.p className="hero-trust" variants={variants}><Check /> Senior engineering <span>•</span> Direct communication <span>•</span> Fast iteration <span>•</span> Global delivery</motion.p>
    </motion.div>
  )
}

// Section 2 — Bottom CTA. Animates when scrolled into view.
export function MotionCTA({ title = 'Have a problem worth solving?', copy = 'Let’s understand it, architect it, and ship the right solution.' }: { title?: string; copy?: string }) {
  const reduce = useReducedMotion()
  const variants = reduce ? undefined : item
  return (
    <section className="cta-section">
      <motion.div
        className="shell text-center"
        variants={reduce ? undefined : container}
        initial={reduce ? false : 'hidden'}
        whileInView={reduce ? undefined : 'show'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="eyebrow justify-center" variants={variants}>READY WHEN YOU ARE</motion.p>
        <motion.h2 variants={variants}>{title}</motion.h2>
        <motion.p variants={variants}>{copy}</motion.p>
        <motion.div className="mt-8 flex justify-center" variants={variants}>
          <Link href="/contact" className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Start a Conversation <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link>
        </motion.div>
        <motion.p className="cta-reassure" variants={variants}>You&apos;ll talk to senior engineers, not account managers. No pressure, no obligation.</motion.p>
      </motion.div>
    </section>
  )
}

// A featured capability showcase. One large panel presents the active
// capability (big index, title, detail, CTA) and crossfades via AnimatePresence
// when the selection changes; a list on the right navigates between them with an
// accent indicator that slides (layoutId). It auto-advances and pauses on hover.
const AUTO_MS = 5200
type CardItem = { title: string; copy: string; href?: string; label?: string; cta?: string; points?: string[] }

export function CapabilityShowcase({ items }: { items: CardItem[] }) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = items.length
  const item = items[active]
  const total = String(count).padStart(2, '0')
  const href = item.href ?? '/contact'
  const cta = item.cta ?? (item.href ? 'Explore capability' : 'Discuss this capability')

  useEffect(() => {
    if (paused || reduce || count < 2) return
    const id = setInterval(() => setActive(i => (i + 1) % count), AUTO_MS)
    return () => clearInterval(id)
  }, [paused, reduce, count])

  return (
    <motion.div
      className="cap-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <ul className="cap-showcase-list">
        {items.map((it, i) => {
          const isActive = i === active
          return (
            <li key={it.title}>
              <button type="button" className={`cap-showcase-tab${isActive ? ' is-active' : ''}`} onClick={() => setActive(i)}>
                {isActive && (reduce
                  ? <span className="cap-tab-bar" />
                  : <motion.span layoutId="cap-active-bar" className="cap-tab-bar" transition={{ type: 'spring', stiffness: 420, damping: 38 }} />)}
                <span className="cap-tab-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="cap-tab-title">{it.title}</span>
                <ChevronRight className="cap-tab-arrow size-4" />
              </button>
            </li>
          )
        })}
      </ul>

      <div className="cap-showcase-feature">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="cap-feature-inner"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="cap-feature-index">{String(active + 1).padStart(2, '0')}<i>/ {total}</i></span>
            <p className="eyebrow">{item.label || 'ENGINEERING CAPABILITY'}</p>
            <h3>{item.title}</h3>
            <p className="cap-feature-copy">{item.copy}</p>
            {item.points && (
              <ul className="cap-feature-points">
                {item.points.map(point => (
                  <li key={point}><Check className="size-4" /><span>{point}</span></li>
                ))}
              </ul>
            )}
            <Link href={href} className="card-link">
              {cta} <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// Technology stack grid. Groups stagger in on scroll and each tag staggers in
// after its group heading; tags lift and glow on hover for a tactile feel.
const stackContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const stackGroup: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.03, delayChildren: 0.08 } },
}

const stackTag: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

export function TechStack({ groups }: { groups: [string, string[]][] }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="tech-grid mt-12"
      variants={reduce ? undefined : stackContainer}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, amount: 0.15 }}
    >
      {groups.map(([group, items]) => (
        <motion.div className="tech-group" key={group} variants={reduce ? undefined : stackGroup}>
          <motion.p variants={reduce ? undefined : stackTag}>{group}</motion.p>
          <div>
            {items.map(it => (
              <motion.span key={it} variants={reduce ? undefined : stackTag}>{it}</motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Expertise grid with click-to-expand cards. Only the title shows by default;
// clicking a card reveals its description with a height + fade animation.
type ExpertiseItem = [string, string]

export function ExpertiseAccordion({ items }: { items: ExpertiseItem[] }) {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([title, copy], i) => {
        const isOpen = open === i
        return (
          <button
            type="button"
            key={title}
            aria-expanded={isOpen}
            className={`profile-card expertise-card${isOpen ? ' is-open' : ''}`}
            onClick={() => setOpen(isOpen ? null : i)}
          >
            <span className="expertise-head">
              <h3>{title}</h3>
              <span className="expertise-toggle" aria-hidden="true"><Plus className="size-4" /></span>
            </span>
            {reduce ? (
              isOpen && <p className="expertise-copy">{copy}</p>
            ) : (
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="expertise-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="expertise-copy">{copy}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </button>
        )
      })}
    </div>
  )
}
