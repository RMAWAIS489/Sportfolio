import React, { useEffect, useState } from 'react'
import { insights } from '../../data/mockData'

export default function InsightRotator() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % insights.length), 6500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="rounded-xl bg-gray-900 text-white px-5 py-4 flex items-start gap-3">
      <span className="shrink-0 mt-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase px-2 py-0.5">Desk</span>
      <p key={i} className="text-sm leading-relaxed text-gray-200 min-h-[3rem]">
        {insights[i]}
      </p>
    </div>
  )
}
