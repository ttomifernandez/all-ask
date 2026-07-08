import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Seminars from '@/components/Seminars'
import ExecPhoto from '@/components/ExecPhoto'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Seminars />
      <ExecPhoto />
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
