import Image from 'next/image'
import { WHATSAPP_LINK } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Hero() {
  return (
    <section className="relative h-[86svh] lg:h-[960px] overflow-hidden">
      <Image
        src="/nuevoHero.jpeg"
        alt="Barras Nómades — bar de noche"
        fill
        sizes="100vw"
        className="object-cover object-[60%_40%] [filter:sepia(0.18)_saturate(1.15)_brightness(0.72)_contrast(1.08)]"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,10,6,0.88)_0%,rgba(20,12,6,0.55)_32%,rgba(20,12,6,0.15)_55%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0F0F0F_0%,rgba(15,15,15,0.05)_30%,transparent_55%)]" />

      <div className="hero-anim absolute top-6 right-6 lg:top-20 lg:right-24 rotate-[-4deg] text-center z-[3]" style={{ animationDelay: '850ms' }}>
        <div className="border border-brand-cream/35 rounded-sm px-4 py-3 lg:px-5 lg:py-3.5 font-display italic text-xs lg:text-sm text-brand-cream/75 leading-relaxed">
          20 años<br />de oficio familiar
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[3]">
        <div className="px-6 lg:px-[60px] pb-14 lg:pb-20 max-w-[980px]">
          <h1
            className="hero-anim font-display font-semibold text-[15vw] leading-[0.86] sm:text-8xl lg:text-9xl xl:text-[150px] 2xl:text-[186px] text-white tracking-tight [text-shadow:0_4px_50px_rgba(0,0,0,0.65)]"
            style={{ animationDelay: '150ms' }}
          >
            Barras<br />Nómades
          </h1>

          <div
            className="hero-anim flex items-center gap-6 mt-9 pl-1.5"
            style={{ animationDelay: '400ms' }}
          >
            <div className="w-px h-14 bg-brand-orange flex-shrink-0" />
            <p className="text-lg text-brand-cream/90 max-w-[360px] leading-relaxed">
              20 años llevando el bar perfecto a tu evento
            </p>
          </div>

          <div className="hero-anim mt-11 lg:ml-[30px]" style={{ animationDelay: '650ms' }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white text-[15px] font-medium px-7 py-4 rounded-[3px] whitespace-nowrap transition-[background-color,transform] duration-150 ease-[var(--ease-out)] pointer-fine:hover:scale-[1.02] active:scale-[0.97]"
            >
              <WhatsAppIcon size={17} />
              Consultanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
