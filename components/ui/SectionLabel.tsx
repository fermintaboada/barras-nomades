export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="lg:hidden font-display italic text-brand-cream/35 text-xs mb-6">
        {children}
      </p>
      <div className="hidden lg:block relative h-full">
        <span className="absolute top-0 left-0 origin-top-left -rotate-90 -translate-x-full whitespace-nowrap font-display italic text-[15px] text-brand-cream/35">
          {children}
        </span>
      </div>
    </>
  )
}
