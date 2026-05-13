import React, { useMemo, useState } from 'react'
import Sparkline from './Sparkline'
import { listings } from '../../data/mockData'

const leagues = ['All', 'NBA', 'NFL', 'NHL', 'MLS', 'UEFA', 'Other']

function leagueBucket(league) {
  if (['NBA', 'NFL', 'NHL', 'MLS', 'UEFA'].includes(league)) return league
  return 'Other'
}

export default function ListingBoard() {
  const [q, setQ] = useState('')
  const [league, setLeague] = useState('All')
  const [sort, setSort] = useState({ key: 'volume24h', dir: 'desc' })

  const filtered = useMemo(() => {
    let rows = listings.filter((L) => {
      const bucket = leagueBucket(L.league)
      const okLeague = league === 'All' || bucket === league || L.league === league
      const s = `${L.symbol} ${L.team} ${L.league}`.toLowerCase()
      const okQ = !q.trim() || s.includes(q.trim().toLowerCase())
      return okLeague && okQ
    })

    rows = [...rows].sort((a, b) => {
      const av = a[sort.key]
      const bv = b[sort.key]
      const m = sort.dir === 'asc' ? 1 : -1
      if (av < bv) return -1 * m
      if (av > bv) return 1 * m
      return 0
    })
    return rows
  }, [q, league, sort])

  function toggleSort(key) {
    setSort((prev) =>
      prev.key === key ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'desc' },
    )
  }

  const th = (key, label) => (
    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
      <button type="button" onClick={() => toggleSort(key)} className="inline-flex items-center gap-1 hover:text-gray-900">
        {label}
        {sort.key === key && <span className="text-[#1030FF]">{sort.dir === 'asc' ? '↑' : '↓'}</span>}
      </button>
    </th>
  )

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm shadow-gray-200/50 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 border-b border-gray-100 bg-gray-50/80">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-tight text-gray-900">Team token board</h2>
          <p className="text-sm text-gray-500 mt-0.5">Search and sort simulated continuous quotes.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search symbol or team…"
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1030FF]/30 min-w-[200px]"
          />
          <select
            value={league}
            onChange={(e) => setLeague(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1030FF]/30"
          >
            {leagues.map((L) => (
              <option key={L} value={L === 'All' ? 'All' : L}>
                {L}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-white border-b border-gray-100">
            <tr>
              {th('symbol', 'Symbol')}
              {th('team', 'Team')}
              {th('league', 'League')}
              {th('price', 'Last')}
              {th('changePct', 'Chg %')}
              {th('volume24h', '24h Vol')}
              <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Intraday</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((L) => {
              const up = L.changePct >= 0
              return (
                <tr key={L.id} className="border-b border-gray-50 hover:bg-[#1030FF]/[0.04] transition-colors">
                  <td className="py-3 px-3 font-bold tabular-nums text-gray-900">{L.symbol}</td>
                  <td className="py-3 px-3 text-gray-700 max-w-[200px] truncate" title={L.team}>
                    {L.team}
                  </td>
                  <td className="py-3 px-3 text-gray-500">{L.league}</td>
                  <td className="py-3 px-3 tabular-nums font-medium">${L.price.toFixed(2)}</td>
                  <td className={`py-3 px-3 tabular-nums font-semibold ${up ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {up ? '+' : ''}
                    {L.changePct.toFixed(2)}%
                  </td>
                  <td className="py-3 px-3 tabular-nums text-gray-600">
                    ${(L.volume24h / 1_000_000).toFixed(1)}M
                  </td>
                  <td className="py-3 px-3">
                    <Sparkline values={L.spark} positive={up} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && (
        <div className="p-8 text-center text-gray-500 text-sm">No rows match your filters.</div>
      )}
    </div>
  )
}
