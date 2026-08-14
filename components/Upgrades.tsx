import { UPGRADES, WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Upgrades() {
  return (
    <section className="bg-surface-1 px-6 lg:px-[60px] py-16 lg:py-[150px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[56px_1fr_1fr] gap-10 lg:gap-x-20">
        <SectionLabel>A tu medida</SectionLabel>

        <FadeIn from="up" className="self-center">
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-7 leading-[1.12]">
            La carta que quieras
          </h2>
          <div className="flex gap-6 mb-11">
            <div className="w-px bg-brand-orange flex-shrink-0" />
            <p className="text-lg text-brand-cream/60 leading-[1.8] max-w-[420px]">
              Todo es personalizable: la carta de tragos, las marcas y las
              cantidades. Armamos el servicio según tu evento y tu presupuesto.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-sm font-medium px-6 py-3.5 rounded-[3px] transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]"
          >
            <WhatsAppIcon size={15} />
            Consultanos por tu carta
          </a>
        </FadeIn>

        <FadeIn from="up" delay={120} className="self-center">
          <p className="font-display italic text-[15px] text-brand-cream/40 mb-6">
            Algunos ejemplos de upgrade
          </p>
          <div className="flex flex-col gap-5">
            {UPGRADES.map((item) => (
              <div key={item} className="border-l-2 border-brand-orange pl-5 py-1">
                <span className="text-lg text-brand-cream/85">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
