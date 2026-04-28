import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'

export default function About() {
  return (
    <section className="bg-brand-dark py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn from="left">
          <p className="text-brand-blue text-xs tracking-[0.25em] uppercase font-body mb-4">
            Quiénes somos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-6 leading-tight">
            Un proyecto familiar con 20 años de historia
          </h2>
          <div className="w-10 h-px bg-brand-orange mb-8" />
          <p className="font-body text-brand-cream/70 text-base sm:text-lg leading-relaxed">
            Barras Nómades nació hace 20 años de la mano de Félix Taboada, y hoy
            es un proyecto familiar que comparte con sus dos hijos. Lo que empezó
            como una pasión por la coctelería se convirtió en una empresa con
            historia, oficio y el sello de quien pone el nombre propio en cada
            evento.
          </p>
        </FadeIn>

        <FadeIn from="right" delay={100} className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="/genteGold.jpeg"
            alt="Félix Taboada y equipo — Barras Nómades"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover brightness-[0.88] contrast-[1.05] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </FadeIn>
      </div>
    </section>
  )
}
