import React from 'react'
import { listings } from '../../data/mockData'

function TickerItem({ symbol, price, changePct }) {
  const up = changePct >= 0
  return (
    <span className="inline-flex items-center gap-2 px-6 text-sm font-medium tabular-nums">
      <span className="text-white font-bold tracking-wide">{symbol}</span>
      <span className="text-white/90">${price.toFixed(2)}</span>
      <span className={up ? 'text-emerald-400' : 'text-rose-400'}>
        {up ? '+' : ''}
        {changePct.toFixed(2)}%
      </span>
    </span>
  )
}

export default function MarketTicker() {
  const row = (
    <div className="flex shrink-0 items-center">
      {listings.map((L) => (
        <TickerItem key={L.id} symbol={L.symbol} price={L.price} changePct={L.changePct} />
      ))}
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-gray-950 py-2.5 border-y border-white/5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-gray-950 to-transparent" />
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  )
}
