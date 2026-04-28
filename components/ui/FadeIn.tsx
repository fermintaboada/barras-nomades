'use client'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  from?: 'up' | 'left' | 'right' | 'fade'
  delay?: number
}

const transforms: Record<NonNullable<Props['from']>, string> = {
  up:    'translateY(32px)',
  left:  'translateX(-32px)',
  right: 'translateX(32px)',
  fade:  'none',
}

export default function FadeIn({ children, className = '', from = 'up', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: transforms[from ?? 'up'],
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
