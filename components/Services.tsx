import Image from 'next/image'
import { SERVICES } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Services() {
  return (
    <section id="servicios" className="bg-surface-1 px-6 lg:px-[60px] py-16 lg:py-[60px] lg:pb-40 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[56px_1fr_420px] gap-10">
        <SectionLabel>El servicio</SectionLabel>

        <div className="lg:pr-14">
          <FadeIn from="up">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-12 lg:mb-16 leading-[1.08] max-w-[520px]">
              Todo lo que necesitás,
              <br />
              incluido
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {SERVICES.map((service, i) => (
              <FadeIn
                key={service}
                from="up"
                delay={i * 90}
                className="grid grid-cols-[48px_1fr] items-baseline py-5 border-t border-white/[0.08] last:border-b"
              >
                <span className="font-display italic text-lg text-brand-orange/55">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[17px] sm:text-lg text-brand-cream/90 max-w-[420px] leading-relaxed">
                  {service}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn from="right" delay={150} className="relative pt-2 lg:pt-10">
          <div className="relative w-[280px] sm:w-[340px] mx-auto lg:mr-0 lg:ml-auto rotate-[2deg] bg-brand-dark p-2.5 pb-7 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/casamiento.jpeg"
                alt="Barras Nómades — servicio en evento"
                fill
                sizes="340px"
                className="object-cover [filter:sepia(0.12)_saturate(1.1)_brightness(0.92)_contrast(1.05)]"
              />
            </div>
            <span className="block text-center font-display italic text-[13px] text-brand-cream/40 mt-3.5">
              en cada evento, 3 bartenders y 1 runner
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
