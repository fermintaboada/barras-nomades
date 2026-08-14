import { WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto h-20 lg:h-[88px] flex items-center justify-between px-6 lg:px-[60px]">
        <span className="font-display text-xl tracking-wide">
          <span className="text-brand-cream">Barras </span>
          <span className="text-brand-orange italic">Nómades</span>
        </span>

        <nav className="hidden md:flex items-center gap-9">
          <a href="#nosotros" className="text-brand-cream/70 hover:text-brand-orange text-sm transition-colors duration-200 ease-[var(--ease-out)]">
            Nosotros
          </a>
          <a href="#servicios" className="text-brand-cream/70 hover:text-brand-orange text-sm transition-colors duration-200 ease-[var(--ease-out)]">
            Servicios
          </a>
          <a href="#carta" className="text-brand-cream/70 hover:text-brand-orange text-sm transition-colors duration-200 ease-[var(--ease-out)]">
            Carta
          </a>
          <a href="#galeria" className="text-brand-cream/70 hover:text-brand-orange text-sm transition-colors duration-200 ease-[var(--ease-out)]">
            Galería
          </a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-medium px-5 py-[11px] rounded-[3px] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]"
        >
          <WhatsAppIcon size={14} />
          Consultanos
        </a>
      </div>
    </header>
  )
}
