import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export default function About() {
  return (
    <section id="nosotros" className="bg-brand-dark px-6 lg:px-[60px] pt-16 pb-20 lg:pt-16 lg:pb-[170px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[56px_1.1fr_0.9fr] gap-10 lg:gap-x-[70px]">
        <SectionLabel>Nosotros</SectionLabel>

        <FadeIn from="left" className="self-center">
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-8 leading-[1.12] max-w-[520px]">
            Un proyecto familiar con 20 años de historia
          </h2>
          <div className="flex gap-6">
            <div className="w-px bg-brand-orange flex-shrink-0" />
            <p className="text-lg text-brand-cream/70 leading-[1.8] max-w-[440px]">
              Barras Nómades nació hace 20 años de la mano de Félix Taboada, y hoy
              es un proyecto familiar que comparte con sus dos hijos. Lo que empezó
              como una pasión por la coctelería se convirtió en una empresa con
              historia, oficio y el sello de quien pone el nombre propio en cada
              evento.
            </p>
          </div>
        </FadeIn>

        <FadeIn from="right" delay={100} className="self-center relative">
          <div className="relative w-full lg:w-[112%] aspect-[4/3] rotate-[-1.5deg] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.45)]">
            <Image
              src="/genteGold.jpeg"
              alt="Félix Taboada y equipo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_35%] [filter:sepia(0.15)_saturate(1.1)_brightness(0.85)_contrast(1.05)]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
