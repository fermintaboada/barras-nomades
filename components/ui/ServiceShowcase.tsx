'use client'
import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '@/lib/constants'
import { usePrefersReducedMotion } from '@/components/ui/usePrefersReducedMotion'

const DURATION_MS = 4200
const TICK_MS = 30

export default function ServiceShowcase() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const elapsedRef = useRef(0)

  const paused = hovered || tabHidden || reducedMotion

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      elapsedRef.current += TICK_MS
      if (elapsedRef.current >= DURATION_MS) {
        elapsedRef.current = 0
        setActive((a) => (a + 1) % SERVICES.length)
      }
      setProgress(Math.min(100, (elapsedRef.current / DURATION_MS) * 100))
    }, TICK_MS)
    return () => clearInterval(id)
  }, [paused])

  const selectTab = (i: number) => {
    elapsedRef.current = 0
    setProgress(0)
    setActive(i)
  }

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div role="tablist" aria-label="Qué incluye el servicio" className="flex gap-1.5 sm:gap-2 mb-10">
        {SERVICES.map((service, i) => (
          <button
            key={service}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`service-panel-${i}`}
            onClick={() => selectTab(i)}
            className="group flex-1 text-left cursor-pointer"
          >
            <span
              className={`block font-display italic text-sm mb-2.5 transition-colors duration-200 ease-[var(--ease-out)] ${
                i === active ? 'text-brand-orange' : 'text-brand-cream/30 group-hover:text-brand-cream/55'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="block h-[2px] bg-white/10 overflow-hidden rounded-full">
              {i === active && (
                <span
                  className="block h-full bg-brand-orange"
                  style={{ width: `${reducedMotion ? 100 : progress}%` }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className="grid">
        {SERVICES.map((service, i) => (
          <p
            key={service}
            id={`service-panel-${i}`}
            role="tabpanel"
            aria-hidden={i !== active}
            className="[grid-area:1/1] transition-[opacity,filter] duration-300 ease-[var(--ease-out)]"
            style={{
              opacity: i === active ? 1 : 0,
              filter: i === active ? 'blur(0px)' : 'blur(6px)',
              pointerEvents: i === active ? 'auto' : 'none',
            }}
          >
            <span className="font-display italic text-lg text-brand-orange/60 mr-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[17px] sm:text-lg text-brand-cream/90 leading-relaxed">{service}</span>
          </p>
        ))}
      </div>
    </div>
  )
}
