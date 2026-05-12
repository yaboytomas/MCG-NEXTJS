import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ResourceStrip from '@/components/ResourceStrip'
import Marquee from '@/components/Marquee'
import Philosophy from '@/components/Philosophy'
import FeatureQuote from '@/components/FeatureQuote'
import Stats from '@/components/Stats'
import Ecosystem from '@/components/Ecosystem'
import Services from '@/components/Services'
import CapitalCta from '@/components/CapitalCta'
import HispanicFeature from '@/components/HispanicFeature'
import Results from '@/components/Results'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CtaBand from '@/components/CtaBand'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import Loader from '@/components/Loader'
import DynamicBackground from '@/components/DynamicBackground'

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <DynamicBackground />
      <Nav />
      <Hero />
      <ResourceStrip />
      <Marquee />
      <Philosophy />
      <FeatureQuote />
      <Stats />
      <Ecosystem />
      <Services />
      <CapitalCta />
      <HispanicFeature />
      <Results />
      <About />
      <Testimonials />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  )
}
