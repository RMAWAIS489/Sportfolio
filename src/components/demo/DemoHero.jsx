import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { globalStats, marketMeta } from '../../data/mockData'

export default function DemoHero() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const ny = now.toLocaleTimeString('en-US', {
    timeZone: marketMeta.tz,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <div className="bg-gradient-to-br from-gray-950 via-[#0c1744] to-gray-950 text-white border-b border-white/10">
      <Container>
        <div className="py-10 md:py-14 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#7c9bff] mb-3">{marketMeta.venue}</p>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              Simulated exchange surface
            </h1>
            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Explore dense mock market data: continuous quotes, athlete intelligence, venue depth, and a time &amp; sales tape — all
              rendered client-side for a portfolio-grade demo.
            </p>
            <p className="mt-3 text-xs text-gray-500 max-w-2xl">{marketMeta.regulatoryNote}</p>
          </div>
          <div className="md:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Session</span>
                <span className="text-sm font-bold text-emerald-400">{marketMeta.session}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">{marketMeta.tz}</span>
                <span className="text-xl font-mono font-bold tabular-nums">{ny}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-gray-500 uppercase tracking-wide">Listings</div>
                  <div className="text-lg font-bold tabular-nums">{globalStats.tokenListings}+</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase tracking-wide">Leagues</div>
                  <div className="text-lg font-bold tabular-nums">{globalStats.leaguesCovered}</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase tracking-wide">Avg fill</div>
                  <div className="text-lg font-bold tabular-nums">{globalStats.avgFillMs} ms</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase tracking-wide">Engines</div>
                  <div className="text-lg font-bold tabular-nums">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
