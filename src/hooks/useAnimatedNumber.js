import { useEffect, useState } from 'react'

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

/** Counts from 0 (or `from`) to `to` over `durationMs`. */
export function useAnimatedNumber(to, durationMs = 1400, from = 0) {
  const [value, setValue] = useState(from)

  useEffect(() => {
    let start
    let frame

    const tick = (now) => {
      if (start === undefined) start = now
      const elapsed = now - start
      const p = Math.min(1, elapsed / durationMs)
      const eased = easeOutCubic(p)
      setValue(from + (to - from) * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [to, durationMs, from])

  return value
}
