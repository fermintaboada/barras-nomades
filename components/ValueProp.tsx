import FadeIn from '@/components/ui/FadeIn'

const stats = [
  { value: '20 años', label: 'de experiencia' },
  { value: 'Todo incluido', label: 'barra, insumos y logística' },
  { value: 'Equipo profesional', label: 'bartenders y runner' },
]

export default function ValueProp() {
  return (
    <section className="bg-brand-dark px-6 lg:px-[60px] pb-16 lg:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 max-w-3xl mx-auto border-t border-white/[0.08]">
          {stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              from="up"
              delay={i * 130}
              className="flex flex-col items-center text-center gap-1 pt-7 sm:px-12 sm:border-r sm:border-white/[0.08] last:border-none"
            >
              <span className="font-display text-2xl sm:text-[30px] text-brand-orange">
                {stat.value}
              </span>
              <span className="text-[13px] text-brand-cream/50">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
