import Image from 'next/image'
import { DRINKS, BRANDS } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'

export default function Drinks() {
  return (
    <section className="bg-brand-dark py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn from="up" className="text-center mb-16">
          <p className="text-brand-blue text-xs tracking-[0.25em] uppercase font-body mb-4">
            La carta
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream leading-tight">
            Tragos y marcas
          </h2>
          <div className="w-10 h-px bg-brand-orange mx-auto mt-6" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <FadeIn from="up" delay={100}>
            <h3 className="font-display text-xl text-brand-orange mb-6">
              Tragos
            </h3>
            <ul className="space-y-2">
              {DRINKS.map((drink) => (
                <li
                  key={drink}
                  className="font-body text-sm text-brand-cream/70 border-b border-white/5 pb-2 last:border-none"
                >
                  {drink}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn from="up" delay={220}>
            <h3 className="font-display text-xl text-brand-orange mb-6">
              Marcas estándar
            </h3>
            <ul className="space-y-2">
              {BRANDS.map((brand) => (
                <li
                  key={brand}
                  className="font-body text-sm text-brand-cream/70 border-b border-white/5 pb-2 last:border-none"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn from="up" delay={340} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/ingredientes.jpeg"
              alt="Ingredientes — Barras Nómades"
              fill
              className="object-cover brightness-[0.88] contrast-[1.05] saturate-[0.9]"
            />
            <div className="absolute inset-0 bg-black/20" />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
