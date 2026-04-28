import FadeIn from '@/components/ui/FadeIn'

const stats = [
  { value: '20', unit: 'años', label: 'de experiencia' },
  { value: 'Llave', unit: 'en mano', label: 'todo incluido' },
  { value: 'Staff', unit: 'propio', label: 'profesional incluido' },
]

export default function ValueProp() {
  return (
    <section className="bg-surface-1 border-y border-white/5 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              from="up"
              delay={i * 130}
              className="flex flex-col items-center gap-1 py-8 sm:py-6 text-center"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl text-brand-orange leading-none">
                  {stat.value}
                </span>
                <span className="font-display text-lg sm:text-xl text-brand-orange/70 leading-none">
                  {stat.unit}
                </span>
              </div>
              <span className="font-body text-xs tracking-widest text-brand-cream/60 uppercase mt-1">
                {stat.label}
              </span>
            </FadeIn>
          ))}
        </div>

        <FadeIn from="fade" delay={100} className="mt-12 mb-8 flex justify-center">
          <div className="w-12 h-px bg-brand-blue" />
        </FadeIn>

        <FadeIn from="up" delay={200}>
          <p className="font-body text-base sm:text-lg text-brand-cream/60 text-center max-w-2xl mx-auto leading-relaxed">
            Nos encargamos de todo: la barra, el staff, los insumos y la logística.
            Vos disfrutás el evento, nosotros hacemos el resto.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
