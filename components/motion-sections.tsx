'use client'

import Link from 'next/link'
import { Fragment, useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, ChevronRight, Check, Plus, Target, Users, UserPlus, Handshake } from 'lucide-react'
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

// Expertise grid of 3D flip cards. The front shows the title; clicking the card
// flips it in 3D to reveal the description on the back. Fixed height means no
// layout shift, and cards stagger in on scroll. Tap again (or another card) to flip back.
type ExpertiseItem = [string, string]

export function ExpertiseCards({ items }: { items: ExpertiseItem[] }) {
  const reduce = useReducedMotion()
  const [flipped, setFlipped] = useState<number[]>([])
  const toggle = (i: number) => setFlipped(f => (f.includes(i) ? f.filter(x => x !== i) : [...f, i]))
  return (
    <motion.div
      className="xp-grid mt-12"
      variants={reduce ? undefined : container}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map(([title, copy], i) => {
        const isFlipped = flipped.includes(i)
        return (
          <motion.button
            type="button"
            key={title}
            variants={reduce ? undefined : item}
            aria-pressed={isFlipped}
            className={`xp-card${isFlipped ? ' is-flipped' : ''}`}
            onClick={() => toggle(i)}
          >
            <span className="xp-card-inner">
              <span className="xp-face xp-front">
                <span className="xp-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="xp-title">{title}</span>
                <span className="xp-hint">Read more <Plus className="size-3.5" /></span>
              </span>
              <span className="xp-face xp-back">
                <span className="xp-back-label">{title}</span>
                <span className="xp-back-copy">{copy}</span>
                <span className="xp-hint">Flip back <ChevronRight className="size-3.5 -rotate-180" /></span>
              </span>
            </span>
          </motion.button>
        )
      })}
    </motion.div>
  )
}

// Services page hero. A two-column layout: animated copy + CTAs on the left,
// a stat panel summarizing capability coverage on the right — mirroring the
// homepage hero's balance so the page no longer leaves the right half empty.
const svcStats: [string, string][] = [
  ['9', 'Core capabilities'],
  ['50+', 'Technologies'],
  ['6', 'Industries served'],
  ['E2E', 'Idea → production'],
]

export function ServicesHero() {
  const reduce = useReducedMotion()
  const v = reduce ? undefined : item
  return (
    <section className="svc-hero shell">
      <motion.div
        className="svc-hero-copy"
        variants={reduce ? undefined : container}
        initial={reduce ? false : 'hidden'}
        animate={reduce ? undefined : 'show'}
      >
        <motion.p className="eyebrow" variants={v}><span className="pulse-dot" /> NEXIO AI SOLUTIONS</motion.p>
        <motion.h1 variants={v}>Software engineering &amp; AI development services built for real business problems.</motion.h1>
        <motion.p className="page-lede" variants={v}>Nexio provides end-to-end AI development, software engineering, mobile, and cloud DevOps services for teams that need clarity, speed, and ownership from idea through production.</motion.p>
        <motion.div className="svc-hero-cta" variants={v}>
          <Link href="/contact" className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">Start a Project <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link>
          <Link href="#capabilities" className="button-secondary inline-flex min-h-12 items-center rounded-sm px-5 py-3">View Capabilities</Link>
        </motion.div>
        <motion.p className="hero-trust" variants={v}><Check /> End-to-end delivery <span>•</span> Senior engineers <span>•</span> Any stack <span>•</span> Production-ready</motion.p>
      </motion.div>

      <motion.div
        className="svc-hero-panel"
        variants={reduce ? undefined : container}
        initial={reduce ? false : 'hidden'}
        animate={reduce ? undefined : 'show'}
      >
        <span className="svc-panel-grid" aria-hidden="true" />
        <motion.p className="svc-panel-label" variants={v}>Capability coverage</motion.p>
        <div className="svc-stats">
          {svcStats.map(([value, label]) => (
            <motion.div className="svc-stat" key={label} variants={v}>
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
        <motion.p className="svc-panel-flow" variants={v}>Discover <span>→</span> Architect <span>→</span> Build <span>→</span> Ship <span>→</span> Scale</motion.p>
      </motion.div>
    </section>
  )
}

// Engagement models. Numbered, iconed cards that stagger in on scroll and lift
// on hover — a more tactile treatment than the previous flat cards.
const engageIcons = [Target, Users, UserPlus, Handshake]

export function EngagementModels({ items }: { items: [string, string][] }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="engage-grid mt-12"
      variants={reduce ? undefined : container}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map(([title, copy], i) => {
        const Icon = engageIcons[i % engageIcons.length]
        return (
          <motion.article className="engage-card" key={title} variants={reduce ? undefined : item}>
            <div className="engage-card-top">
              <span className="engage-icon"><Icon className="size-5" /></span>
              <span className="engage-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.article>
        )
      })}
    </motion.div>
  )
}

// Reusable split hero — animated copy + CTAs on the left, an arbitrary panel on
// the right. Powers the solutions index and every solution detail page so none
// of them leave the right half of the hero empty.
type HeroCta = { label: string; href: string }

export function SplitHero({ eyebrow, title, copy, primary, secondary, trust, children }: {
  eyebrow: string
  title: string
  copy: string
  primary?: HeroCta
  secondary?: HeroCta
  trust?: string[]
  children?: ReactNode
}) {
  const reduce = useReducedMotion()
  const v = reduce ? undefined : item
  return (
    <section className="svc-hero shell">
      <motion.div
        className="svc-hero-copy"
        variants={reduce ? undefined : container}
        initial={reduce ? false : 'hidden'}
        animate={reduce ? undefined : 'show'}
      >
        <motion.p className="eyebrow" variants={v}><span className="pulse-dot" /> {eyebrow}</motion.p>
        <motion.h1 variants={v}>{title}</motion.h1>
        <motion.p className="page-lede" variants={v}>{copy}</motion.p>
        {(primary || secondary) && (
          <motion.div className="svc-hero-cta" variants={v}>
            {primary && <Link href={primary.href} className="button-primary inline-flex min-h-12 items-center rounded-sm px-5 py-3">{primary.label} <ArrowUpRight className="ml-2 size-4 shrink-0" /></Link>}
            {secondary && <Link href={secondary.href} className="button-secondary inline-flex min-h-12 items-center rounded-sm px-5 py-3">{secondary.label}</Link>}
          </motion.div>
        )}
        {trust && trust.length > 0 && (
          <motion.p className="hero-trust" variants={v}>
            <Check />
            {trust.map((t, i) => (
              <Fragment key={t}>{i > 0 && <span>•</span>} {t} </Fragment>
            ))}
          </motion.p>
        )}
      </motion.div>

      {children && (
        <motion.div
          className="svc-hero-panel"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <span className="svc-panel-grid" aria-hidden="true" />
          {children}
        </motion.div>
      )}
    </section>
  )
}

// A single metric that counts up from zero to its target with an eased curve
// once its parent band scrolls into view. Reduced-motion jumps straight to the
// final value.
function CountUp({ value, suffix, active }: { value: number; suffix?: string; active: boolean }) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)
  useEffect(() => {
    if (reduce) { setN(value); return }
    if (!active) return
    let raf = 0
    const start = performance.now()
    const dur = 1300
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, value, reduce])
  return <>{n}{suffix}</>
}

// Animated metric band — a row of large numbers that count up when scrolled
// into view. A modern credibility beat that reuses the site's card language.
type Metric = { value: number; suffix?: string; label: string }

export function StatStrip({ items }: { items: Metric[] }) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(false)
  return (
    <motion.div
      className="stat-strip"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setActive(true)}
    >
      {items.map(m => (
        <div className="stat-strip-item" key={m.label}>
          <strong><CountUp value={m.value} suffix={m.suffix} active={active} /></strong>
          <span>{m.label}</span>
        </div>
      ))}
    </motion.div>
  )
}
