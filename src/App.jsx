import React from 'react'
import Hero from './components/Hero'
import ProfessionalsCarousel from './components/ProfessionalsCarousel'
import ServicesGrid from './components/ServicesGrid'
import WhyChoose from './components/WhyChoose'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App(){
  return (
    <div className="text-gray-800">
      <Hero />
      <main className="px-4 sm:px-6 lg:px-8 -mt-6">
        <section id="professionals" className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Conheça nossa equipe</h2>
          <ProfessionalsCarousel />
        </section>

        <section id="services" className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Especialidades</h2>
          <ServicesGrid />
        </section>

        <section id="why" className="mt-10">
          <WhyChoose />
        </section>

        <section id="experience" className="mt-10">
          <Gallery />
        </section>

        <section id="testimonials" className="mt-10">
          <Testimonials />
        </section>

        <section id="faq" className="mt-10 mb-12">
          <FAQ />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
