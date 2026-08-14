import { WHATSAPP_LINK, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export default function CTA() {
  return (
    <section className="bg-surface-1 border-t border-white/5 px-6 lg:px-[60px] py-16 lg:py-[150px] lg:pb-[120px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[56px_1fr] gap-10">
        <SectionLabel>Contacto</SectionLabel>

        <FadeIn from="up" className="max-w-xl">
          <h2 className="font-display text-5xl sm:text-6xl text-brand-cream mb-7 leading-[1.05]">
            ¿Tenés un evento?
          </h2>
          <p className="text-lg text-brand-cream/60 mb-12 leading-relaxed">
            Escribinos y te armamos una propuesta a medida.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white text-base font-medium px-8 py-[18px] rounded-[3px] whitespace-nowrap transition-all hover:scale-[1.02] active:scale-95"
          >
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>

          <div className="flex items-center gap-4 mt-14 pt-8 border-t border-white/[0.06]">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-cream/60 hover:text-brand-orange transition-colors"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <span className="w-1 h-1 rounded-full bg-brand-cream/30" />
            <span className="text-[13px] text-brand-cream/40">Félix Taboada</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
