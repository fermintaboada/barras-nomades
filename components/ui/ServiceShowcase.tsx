'use client'
import { useEffect, useState } from 'react'
import { SERVICES } from '@/lib/constants'
import { usePrefersReducedMotion } from '@/components/ui/usePrefersReducedMotion'

const TYPE_MS = 42
const TYPE_JITTER_MS = 22
const DELETE_MS = 24
const PAUSE_MS = 1400
const NEXT_BEAT_MS = 300

type Phase = 'typing' | 'deleting'

export default function ServiceShowcase() {
  const [active, setActive] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const [hovered, setHovered] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  const paused = hovered || tabHidden
  const currentText = SERVICES[active]

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (reducedMotion || paused) return

    if (phase === 'typing') {
      if (charCount < currentText.length) {
        const delay = TYPE_MS + Math.random() * TYPE_JITTER_MS
        const id = setTimeout(() => setCharCount((c) => c + 1), delay)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => setPhase('deleting'), PAUSE_MS)
      return () => clearTimeout(id)
    }

    if (charCount > 0) {
      const id = setTimeout(() => setCharCount((c) => c - 1), DELETE_MS)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % SERVICES.length)
      setPhase('typing')
    }, NEXT_BEAT_MS)
    return () => clearTimeout(id)
  }, [phase, charCount, paused, reducedMotion, currentText])

  const selectTab = (i: number) => {
    setActive(i)
    setCharCount(0)
    setPhase('typing')
  }

  const displayed = reducedMotion ? currentText : currentText.slice(0, charCount)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="lg:h-full lg:flex lg:flex-col"
    >
      <div role="tablist" aria-label="Qué incluye el servicio" className="flex gap-1.5 sm:gap-2 mb-10 lg:flex-shrink-0">
        {SERVICES.map((service, i) => (
          <button
            key={service}
            type="button"
            role="tab"
            aria-selected={i === active}
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
            <span
              className={`block h-[2px] rounded-full transition-colors duration-200 ease-[var(--ease-out)] ${
                i === active ? 'bg-brand-orange' : 'bg-white/10'
              }`}
            />
          </button>
        ))}
      </div>

      <div className="relative lg:flex-1 lg:flex lg:items-center lg:min-h-0" aria-hidden="true">
        <div className="w-full">
          <span className="block font-display italic text-brand-orange/25 text-6xl sm:text-7xl lg:text-8xl leading-none mb-4 lg:mb-6 select-none">
            {String(active + 1).padStart(2, '0')}
          </span>
          <p className="font-mono text-xl sm:text-2xl lg:text-3xl text-brand-cream leading-[1.35] max-w-xl min-h-[4.5em]">
            {displayed}
            {!reducedMotion && (
              <span className="inline-block w-[0.5em] h-[0.85em] bg-brand-orange ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
            )}
          </p>
        </div>
      </div>

      <ul className="sr-only">
        {SERVICES.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  )
}
