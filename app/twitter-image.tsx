import { ImageResponse } from 'next/og'

export const alt = 'Nexio AI Solutions — AI, Software & Automation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#080b10',
          backgroundImage:
            'linear-gradient(rgba(125,160,190,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125,160,190,.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 78% 30%, rgba(56,168,255,.28), transparent 55%)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <rect x="1" y="1" width="30" height="30" rx="8.5" fill="#0d1219" stroke="#65e2e0" strokeOpacity="0.5" />
            <path d="M9 23 L9 9 L23 23 L23 9" fill="none" stroke="#65e2e0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="9" r="2" fill="#65e2e0" />
            <circle cx="23" cy="23" r="2" fill="#65e2e0" />
            <circle cx="23" cy="9" r="2" fill="#65e2e0" />
          </svg>
          <span style={{ fontSize: 32, fontWeight: 700, color: '#f4f7fb', letterSpacing: '-0.02em' }}>Nexio</span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#38a8ff',
            position: 'relative',
          }}
        >
          AI · SOFTWARE · AUTOMATION
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#f4f7fb',
            position: 'relative',
          }}
        >
          <span>We Don&apos;t Just Write Code.</span>
          <span style={{ color: '#65e2e0' }}>We Ship Solutions.</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
