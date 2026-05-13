import React from 'react'
import { formatUsdCompact, ipoPipeline } from '../../data/mockData'

export default function IpoRail() {
  return (
    <div className="rounded-2xl border border-dashed border-[#1030FF]/40 bg-[#1030FF]/[0.03] p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-tight text-gray-900">IPO &amp; primary calendar</h2>
          <p className="text-sm text-gray-600 mt-1">Pipeline names for storytelling — not real offerings.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ipoPipeline.map((p) => (
          <div key={p.id} className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-[#1030FF]">{p.stage}</div>
            <div className="font-bold text-gray-900 mt-1">{p.name}</div>
            <div className="text-xs text-gray-500 mt-0.5">{p.league}</div>
            <div className="mt-3 flex items-end justify-between gap-2">
              <span className="text-[10px] uppercase text-gray-400">{p.window}</span>
              <span className="text-sm font-bold tabular-nums text-gray-900">{formatUsdCompact(p.estUsd)} est.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
