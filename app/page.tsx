import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import MoonParallax from "@/components/moon-parallax"

export default function Home() {
  return (
    <div className="relative">
      <MoonParallax />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  )
}
