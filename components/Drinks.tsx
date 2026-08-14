import Image from 'next/image'
import { DRINKS, BRANDS } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Drinks() {
  return (
    <section id="carta" className="bg-brand-dark px-6 lg:px-[60px] py-16 lg:py-[170px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[56px_1fr] gap-10">
        <SectionLabel>La carta</SectionLabel>

        <div>
          <FadeIn from="up">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-14 lg:mb-[72px] leading-[1.08] max-w-xl">
              Tragos y marcas
            </h2>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <FadeIn from="up" delay={100} className="lg:flex-[1.35] w-full">
              <h3 className="font-display italic text-xl text-brand-orange mb-7">Tragos</h3>
              <ul className="flex flex-col">
                {DRINKS.map((drink) => (
                  <li
                    key={drink}
                    className="text-[15px] text-brand-cream/70 py-[11px] border-b border-white/[0.06] last:border-none"
                  >
                    {drink}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn from="up" delay={220} className="lg:flex-1 w-full lg:mt-[52px]">
              <h3 className="font-display italic text-xl text-brand-orange mb-7">Marcas estándar</h3>
              <ul className="flex flex-col">
                {BRANDS.map((brand) => (
                  <li
                    key={brand}
                    className="text-[15px] text-brand-cream/70 py-[11px] border-b border-white/[0.06] last:border-none"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn
              from="up"
              delay={340}
              className="lg:flex-1 w-full max-w-[280px] mx-auto lg:mx-0 lg:mt-[110px] relative aspect-[3/4] rotate-[1.5deg] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
            >
              <Image
                src="/ingredientes.jpeg"
                alt="Ingredientes — Barras Nómades"
                fill
                sizes="(min-width: 1024px) 280px, 60vw"
                className="object-cover [filter:sepia(0.15)_saturate(1.1)_brightness(0.85)_contrast(1.05)]"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
