'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Seminars from '@/components/Seminars'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export default function Home() {
  const [selectedSeminarId, setSelectedSeminarId] = useState<number | null>(null)

  const handleSelectSeminar = (id: number) => {
    setSelectedSeminarId(prev => (prev === id ? null : id))
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Seminars selectedId={selectedSeminarId} onSelect={handleSelectSeminar} />
      <ContactForm
        selectedSeminarId={selectedSeminarId}
        onSeminarChange={id => setSelectedSeminarId(id)}
      />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
