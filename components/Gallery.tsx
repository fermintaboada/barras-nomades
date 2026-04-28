import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'

export default function Gallery() {
  return (
    <section className="bg-brand-dark py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn from="up" className="text-center mb-12">
          <p className="text-brand-blue text-xs tracking-[0.25em] uppercase font-body mb-4">
            Galería
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream leading-tight">
            Así trabajamos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <FadeIn
              key={src}
              from="fade"
              delay={i * 80}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Barras Nómades — foto ${i + 1}`}
                fill
                className="object-cover brightness-[0.88] contrast-[1.05] saturate-[0.9] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
