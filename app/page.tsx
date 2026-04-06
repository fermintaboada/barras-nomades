import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ValueProp from '@/components/ValueProp'
import About from '@/components/About'
import Services from '@/components/Services'
import Drinks from '@/components/Drinks'
import Upgrades from '@/components/Upgrades'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <About />
        <Services />
        <Drinks />
        <Upgrades />
        <Gallery />
        <CTA />
      </main>
    </>
  )
}
