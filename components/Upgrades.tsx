import { UPGRADES, WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Upgrades() {
  return (
    <section className="bg-surface-1 py-16 sm:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-brand-blue text-xs tracking-[0.25em] uppercase font-body mb-4">
          Opciones premium
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-cream leading-tight mb-6">
          Upgrades disponibles
        </h2>
        <div className="w-10 h-px bg-brand-orange mx-auto mb-10" />

        <ul className="space-y-3 mb-10">
          {UPGRADES.map((item) => (
            <li
              key={item}
              className="font-body text-base text-brand-cream/80 py-3 border-b border-white/5 last:border-none"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="font-body text-brand-cream/40 text-sm mb-8">
          Consultanos por upgrades de marcas premium
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-body font-medium text-sm px-6 py-3 rounded-full transition-all"
        >
          <WhatsAppIcon size={15} />
          Consultar upgrades
        </a>
      </div>
    </section>
  )
}
