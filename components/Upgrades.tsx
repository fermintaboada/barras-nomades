import { UPGRADES, WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import FadeIn from '@/components/ui/FadeIn'

export default function Upgrades() {
  return (
    <section className="bg-surface-1 py-16 sm:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn from="up">
          <p className="text-brand-blue text-xs tracking-[0.25em] uppercase font-body mb-4">
            A tu medida
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream leading-tight mb-6">
            La carta que quieras
          </h2>
          <div className="w-10 h-px bg-brand-orange mx-auto mb-8" />
          <p className="font-body text-brand-cream/60 text-base sm:text-lg leading-relaxed mb-10">
            Todo es personalizable: la carta de tragos, las marcas y las cantidades.
            Armamos el servicio según tu evento y tu presupuesto.
          </p>
        </FadeIn>

        <FadeIn from="up" delay={150}>
          <p className="font-body text-brand-cream/35 text-xs tracking-widest uppercase mb-4">
            Algunos ejemplos de upgrade
          </p>
          <ul className="space-y-3 mb-10">
            {UPGRADES.map((item) => (
              <li
                key={item}
                className="font-body text-base text-brand-cream/70 py-3 border-b border-white/5 last:border-none"
              >
                {item}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-body font-medium text-sm px-6 py-3 rounded-full transition-all"
          >
            <WhatsAppIcon size={15} />
            Consultanos por tu carta
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
