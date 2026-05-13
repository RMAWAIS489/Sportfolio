import React, { useMemo } from 'react'

export default function Sparkline({ values, positive }) {
  const d = useMemo(() => {
    if (!values?.length) return ''
    const w = 64
    const h = 24
    const min = Math.min(...values)
    const max = Math.max(...values)
    const span = max - min || 1
    const denom = Math.max(1, values.length - 1)
    return values
      .map((v, i) => {
        const x = (i / denom) * w
        const y = h - ((v - min) / span) * (h - 4) - 2
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(' ')
  }, [values])

  const stroke = positive ? '#34d399' : '#fb7185'

  return (
    <svg width="64" height="24" className="shrink-0 overflow-visible" aria-hidden>
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
