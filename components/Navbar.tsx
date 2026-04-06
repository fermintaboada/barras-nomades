import { WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-2xl tracking-wide">
          <span className="text-brand-cream">Barras </span>
          <span className="text-brand-orange">Nómades</span>
        </span>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          <WhatsAppIcon size={16} />
          Consultanos
        </a>
      </div>
    </header>
  )
}
