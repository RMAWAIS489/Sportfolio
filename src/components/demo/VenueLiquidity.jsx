import React from 'react'
import { liquidityVenues } from '../../data/mockData'

export default function VenueLiquidity() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold uppercase tracking-tight text-gray-900 mb-1">Venue depth</h2>
      <p className="text-sm text-gray-500 mb-5">Synthetic top-of-book depth by matching engine.</p>
      <ul className="space-y-3">
        {liquidityVenues.map((v) => (
          <li key={v.code} className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 px-3 py-2.5">
            <div>
              <div className="font-mono text-xs font-bold text-[#1030FF]">{v.code}</div>
              <div className="text-xs text-gray-500">{v.city}</div>
            </div>
            <div className="text-right text-xs">
              <div className="font-semibold text-gray-900 tabular-nums">${(v.depthUsd / 1_000_000).toFixed(0)}M depth</div>
              <div className="text-gray-400 tabular-nums">{v.latencyMs} ms p50</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
