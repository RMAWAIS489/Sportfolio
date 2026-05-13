import React from 'react'
import { tape } from '../../data/mockData'

export default function TradeTape() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-900 text-gray-100 overflow-hidden shadow-lg">
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Time &amp; sales</h2>
        <span className="text-[10px] text-white/50 tabular-nums">Last 20 prints (sim)</span>
      </div>
      <div className="max-h-[320px] overflow-y-auto text-xs font-mono">
        <table className="w-full">
          <thead className="sticky top-0 bg-gray-900/95 backdrop-blur text-[10px] uppercase tracking-wider text-gray-500">
            <tr>
              <th className="text-left py-2 px-3">Time</th>
              <th className="text-left py-2 px-3">Sym</th>
              <th className="text-left py-2 px-3">Side</th>
              <th className="text-right py-2 px-3">Qty</th>
              <th className="text-right py-2 px-3">Px</th>
              <th className="text-left py-2 px-3 hidden sm:table-cell">Venue</th>
            </tr>
          </thead>
          <tbody>
            {tape.map((r) => (
              <tr key={r.id} className="border-t border-white/5 hover:bg-white/5">
                <td className="py-2 px-3 text-gray-400 tabular-nums">{r.t}</td>
                <td className="py-2 px-3 text-white font-semibold">{r.symbol}</td>
                <td className={`py-2 px-3 font-bold ${r.side === 'BUY' ? 'text-emerald-400' : 'text-rose-400'}`}>{r.side}</td>
                <td className="py-2 px-3 text-right tabular-nums text-gray-300">{r.qty.toLocaleString()}</td>
                <td className="py-2 px-3 text-right tabular-nums text-white">{r.px.toFixed(2)}</td>
                <td className="py-2 px-3 hidden sm:table-cell text-gray-500">{r.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
