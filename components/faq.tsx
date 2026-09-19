'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq-list mt-12">
      {items.map(([question, answer], i) => {
        const isOpen = open === i
        return (
          <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={question}>
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
