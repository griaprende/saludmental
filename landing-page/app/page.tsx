import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Solution from './components/sections/Solution'
import HowItWorks from './components/sections/HowItWorks'
import Benefits from './components/sections/Benefits'
import Testimonials from './components/sections/Testimonials'
import Security from './components/sections/Security'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}

