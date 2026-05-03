import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Performance from '../components/sections/Performance'
import BeforeAfter from '../components/sections/BeforeAfter'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import Location from '../components/sections/Location'
import Simulator from '../components/sections/Simulator'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Performance />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Location />
      <Simulator />
      <CTA />
    </>
  )
}
