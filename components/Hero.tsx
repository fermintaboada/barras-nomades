import Image from 'next/image'
import { WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/nuevoHero.jpeg"
          alt="Barras Nómades — bar de noche"
          fill
          className="object-cover brightness-[0.6] contrast-[1.05] saturate-[0.85]"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient fade to brand-dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-dark" />
        {/* Radial dark stage behind text */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
        <p className="text-brand-blue text-xs font-body tracking-[0.3em] uppercase mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]">
          Servicio profesional de barra
        </p>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.9)]">
          Barras Nómades
        </h1>

        <div className="w-16 h-px bg-brand-orange mx-auto mb-8" />

        <p className="font-body text-lg sm:text-xl text-brand-cream max-w-lg mx-auto mb-12 [text-shadow:0_1px_16px_rgba(0,0,0,0.9)]">
          20 años llevando el bar perfecto a tu evento
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-body font-medium text-base px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
        >
          <WhatsAppIcon />
          Consultanos por WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-body text-xs tracking-widest uppercase text-brand-cream">
          Scroll
        </span>
        <div className="w-px h-8 bg-brand-cream animate-pulse" />
      </div>
    </section>
  )
}
