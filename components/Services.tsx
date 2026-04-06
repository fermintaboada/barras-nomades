import Image from 'next/image'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <section className="bg-surface-1 py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden order-last lg:order-first">
          <Image
            src="/casamiento.jpeg"
            alt="Barras Nómades — servicio en evento"
            fill
            className="object-cover brightness-[0.88] contrast-[1.05] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div>
          <p className="text-brand-blue text-xs tracking-[0.25em] uppercase font-body mb-4">
            ¿Qué incluye?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-6 leading-tight">
            Todo lo que necesitás, incluido
          </h2>
          <div className="w-10 h-px bg-brand-orange mb-8" />
          <ul className="space-y-4">
            {SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    className="text-brand-blue"
                  >
                    <path
                      d="M1 4l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-body text-brand-cream/80 text-sm sm:text-base leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
