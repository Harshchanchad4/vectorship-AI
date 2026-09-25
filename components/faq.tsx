'use client'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  const [visible, setVisible] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  // Self-managed scroll reveal: the global ScrollReveal adds `is-visible`
  // imperatively, which React would wipe on every open/close re-render. Owning
  // it in state keeps the class stable across clicks.
  useEffect(() => {
    const el = listRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="faq-list mt-12" ref={listRef}>
      {items.map(([question, answer], i) => {
        const isOpen = open === i
        return (
          <div
            className={`faq-item ${visible ? 'is-visible' : ''} ${isOpen ? 'is-open' : ''}`}
            style={{ '--reveal-delay': `${Math.min(i, 5) * 70}ms` } as React.CSSProperties}
            key={question}
          >
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="faq-q-text">{question}</span>
              <span className="faq-icon-ring" aria-hidden="true"><ChevronDown className="faq-icon" /></span>
            </button>
            <div className="faq-answer-panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="faq-answer-inner"><p>{answer}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
