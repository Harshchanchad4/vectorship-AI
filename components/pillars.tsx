'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Pillar } from '@/lib/site-data'

export function Pillars({ items }: { items: Pillar[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="pillars mt-12">
      <div className="pillars-tabs" role="tablist" aria-label="Capabilities">
        {items.map((p, i) => (
          <button
            key={p.tab}
            role="tab"
            type="button"
            aria-selected={active === i}
            className={`pillars-tab ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="pillars-tab-num">{String(i + 1).padStart(2, '0')}</span>
            <span>{p.tab}</span>
          </button>
        ))}
      </div>
      <div className="pillars-panels">
        {items.map((p, i) => (
          <div key={p.tab} role="tabpanel" className="pillars-panel" hidden={active !== i}>
            <div className="pillars-panel-main">
              <p className="eyebrow">{p.eyebrow}</p>
              <h3>{p.title}</h3>
              <p className="pillars-copy">{p.copy}</p>
              <Link href={p.href} className="card-link">Explore {p.tab} <ArrowUpRight className="size-4" /></Link>
            </div>
            <ul className="pillars-points">
              {p.points.map(pt => (
                <li key={pt}><Check className="size-4 shrink-0" aria-hidden="true" /> {pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
