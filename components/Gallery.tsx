import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

const placement = [
  'col-span-2 row-span-2 lg:[grid-column:1/3] lg:[grid-row:1/3]',
  'lg:[grid-column:3/4] lg:[grid-row:1/2]',
  'lg:[grid-column:4/5] lg:[grid-row:1/2]',
  'lg:[grid-column:1/2] lg:[grid-row:2/3]',
  'col-span-2 lg:[grid-column:2/4] lg:[grid-row:2/3]',
  'lg:[grid-column:4/5] lg:[grid-row:2/3]',
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-brand-dark px-6 lg:px-[60px] py-16 lg:py-[150px] lg:pb-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[56px_1fr] gap-10">
        <SectionLabel>Galería</SectionLabel>

        <div>
          <FadeIn from="up">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mb-12 lg:mb-16 leading-[1.08]">
              Así trabajamos
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px] gap-3.5">
            {GALLERY_IMAGES.map((src, i) => (
              <FadeIn
                key={src}
                from="fade"
                delay={i * 80}
                className={`relative aspect-square lg:aspect-auto overflow-hidden ${placement[i] ?? ''}`}
              >
                <Image
                  src={src}
                  alt={`Barras Nómades — foto ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover [filter:sepia(0.12)_saturate(1.1)_brightness(0.85)_contrast(1.05)]"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
