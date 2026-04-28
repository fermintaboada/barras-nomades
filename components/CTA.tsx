import { WHATSAPP_LINK, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import FadeIn from '@/components/ui/FadeIn'

export default function CTA() {
  return (
    <section className="bg-surface-1 border-t border-white/5 py-16 sm:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn from="up">
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream leading-tight mb-6">
            ¿Tenés un evento?
          </h2>
          <p className="font-body text-brand-cream/60 text-base sm:text-lg mb-10 leading-relaxed">
            Escribinos y te armamos una propuesta a medida.
          </p>
        </FadeIn>

        <FadeIn from="up" delay={180}>
          <div className="flex flex-col items-center gap-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-body font-medium text-base px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon />
              Escribinos por WhatsApp
            </a>

            <div className="flex flex-col items-center gap-2 pt-8 border-t border-white/5 w-full">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-brand-cream/60 hover:text-brand-blue transition-colors"
              >
                {INSTAGRAM_HANDLE}
              </a>
              <span className="font-body text-xs text-brand-cream/40">
                Félix Taboada
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
