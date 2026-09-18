'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'

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
              <span>{question}</span>
              <Plus className="faq-icon size-5 shrink-0" aria-hidden="true" />
            </button>
            <div className="faq-answer" hidden={!isOpen}>
              <p>{answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
