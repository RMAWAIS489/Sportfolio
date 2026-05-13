import React from 'react'
import Container from '../Container'
import { globalStats, formatUsdCompact } from '../../data/mockData'
import { useAnimatedNumber } from '../../hooks/useAnimatedNumber'

function Stat({ label, value, suffix = '' }) {
  return (
    <div className="text-center px-4 py-2">
      <div className="text-2xl md:text-3xl font-bold tabular-nums tracking-tight text-white">
        {value}
        {suffix}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/70 mt-1">{label}</div>
    </div>
  )
}

export default function StatsStrip() {
  const aum = useAnimatedNumber(globalStats.aumUsd)
  const vol = useAnimatedNumber(globalStats.volume24hUsd)
  const inv = useAnimatedNumber(globalStats.qualifiedInvestors)

  return (
    <div className="bg-gradient-to-r from-[#0a1a6b] via-[#1030FF] to-[#0a1a6b] border-b border-white/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 py-6 md:py-8">
          <Stat label="Simulated AUM" value={formatUsdCompact(aum)} />
          <Stat label="24h Notional" value={formatUsdCompact(vol)} />
          <Stat label="Qualified accounts" value={Math.round(inv).toLocaleString()} />
          <Stat label="Live listings (demo)" value={String(globalStats.tokenListings)} suffix="+" />
        </div>
      </Container>
    </div>
  )
}
