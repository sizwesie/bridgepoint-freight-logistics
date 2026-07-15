import { useState, useEffect } from 'react'
import Header from '@components/Header'
import Hero from '@sections/Hero'
import Statistics from '@sections/Statistics'
import Services from '@sections/Services'
import About from '@sections/About'
import HowItWorks from '@sections/HowItWorks'
import WhyChoose from '@sections/WhyChoose'
import Industries from '@sections/Industries'
import SafetyQuality from '@sections/SafetyQuality'
import FleetExpertise from '@sections/FleetExpertise'
import QuoteRequest from '@sections/QuoteRequest'
import FAQ from '@sections/FAQ'
import Testimonials from '@sections/Testimonials'
import CTA from '@sections/CTA'
import Footer from '@components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="animate-pulse">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <About />
      <HowItWorks />
      <WhyChoose />
      <Industries />
      <SafetyQuality />
      <FleetExpertise />
      <QuoteRequest />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
