'use client'

import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

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
