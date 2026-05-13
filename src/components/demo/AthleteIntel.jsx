import React from 'react'
import { athletes } from '../../data/mockData'

function Meter({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-500 mb-1">
        <span>{label}</span>
        <span className="tabular-nums text-gray-800">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#1030FF] to-indigo-400 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function AthleteIntel() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50/80 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-tight text-gray-900">Athlete intrinsic layer</h2>
          <p className="text-sm text-gray-500 mt-1">Proprietary composite scores (demo narrative).</p>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-400">{athletes.length} profiles loaded</span>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {athletes.map((a) => (
          <article
            key={a.id}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#1030FF]/20 transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">{a.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {a.position} · {a.team}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5">{a.sport}</span>
            </div>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed line-clamp-3">{a.narrative}</p>
            <div className="mt-4 space-y-2.5">
              <Meter label="Intrinsic" value={a.intrinsic} />
              <Meter label="Impact / wins" value={a.impact} />
              <Meter label="Durability" value={a.durability} />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {a.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-medium uppercase tracking-wide bg-[#1030FF]/10 text-[#1030FF] px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
