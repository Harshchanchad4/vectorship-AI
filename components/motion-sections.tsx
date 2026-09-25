'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowLeft, ArrowRight, ChevronRight, Check } from 'lucide-react'
import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, type Variants } from 'motion/react'

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

// A draggable, snap-free capability carousel. The track is a single motion.div
// dragged along x; arrow buttons page by ~80% of the viewport, and a slim
// progress bar tracks scroll position. Slides use their own always-visible
// class so they escape the IntersectionObserver reveal (off-screen slides in
// an overflow-clipped track would otherwise never intersect and stay hidden).
type CardItem = { title: string; copy: string; href?: string; label?: string; cta?: string }

export function CapabilityCarousel({ items }: { items: CardItem[] }) {
  const reduce = useReducedMotion()
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const boundsRef = useRef(0)
  const x = useMotionValue(0)
  const [bounds, setBounds] = useState(0)
  const [progress, setProgress] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback((v: number) => {
    const max = boundsRef.current
    setProgress(max > 0 ? Math.min(1, Math.max(0, -v / max)) : 0)
    setAtStart(v >= -1)
    setAtEnd(v <= -max + 1)
  }, [])

  const measure = useCallback(() => {
    const vp = viewportRef.current
    const tr = trackRef.current
    if (!vp || !tr) return
    const max = Math.max(0, tr.scrollWidth - vp.clientWidth)
    boundsRef.current = max
    setBounds(max)
    if (-x.get() > max) x.set(-max)
    sync(x.get())
  }, [sync, x])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useMotionValueEvent(x, 'change', sync)

  const page = (dir: 1 | -1) => {
    const vp = viewportRef.current
    if (!vp) return
    const step = vp.clientWidth * 0.8
    const target = Math.min(0, Math.max(-boundsRef.current, x.get() - dir * step))
    animate(x, target, reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 34 })
  }

  const draggable = bounds > 0 && !reduce

  return (
    <div className="cap-carousel">
      <motion.div
        className="cap-carousel-viewport"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ cursor: draggable ? 'grab' : 'default' }}
      >
        <motion.div
          ref={trackRef}
          className="cap-carousel-track"
          style={{ x }}
          drag={draggable ? 'x' : false}
          dragConstraints={{ left: -bounds, right: 0 }}
          dragElastic={0.08}
          whileTap={draggable ? { cursor: 'grabbing' } : undefined}
        >
          {items.map((item, i) => (
            <article className="cap-slide" key={item.title}>
              <div className="capability-head">
                <p className="eyebrow">{item.label || 'ENGINEERING CAPABILITY'}</p>
                <span className="capability-number">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="card-copy">{item.copy}</p>
              {item.href && (
                <Link href={item.href} className="card-link" draggable={false}>
                  {item.cta || 'Explore capability'} <ChevronRight className="size-4" />
                </Link>
              )}
            </article>
          ))}
        </motion.div>
      </motion.div>

      <div className="cap-carousel-controls">
        <div className="cap-carousel-progress"><span style={{ transform: `scaleX(${progress || 0.001})` }} /></div>
        <div className="cap-carousel-buttons">
          <button type="button" className="cap-carousel-btn" onClick={() => page(-1)} disabled={atStart} aria-label="Previous capabilities"><ArrowLeft className="size-[18px]" /></button>
          <button type="button" className="cap-carousel-btn" onClick={() => page(1)} disabled={atEnd} aria-label="Next capabilities"><ArrowRight className="size-[18px]" /></button>
        </div>
      </div>
    </div>
  )
}
