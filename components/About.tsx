'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, BookOpen, Zap, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Users,
    color: 'bg-brand-50 text-brand-600',
    title: 'Expertos reales',
    body: 'Aprendés de personas que ya lo vivieron, no de docentes teóricos.',
  },
  {
    icon: BookOpen,
    color: 'bg-brand-50 text-brand-600',
    title: 'Variadas temáticas',
    body: 'Desde nutrición y empleo hasta salud mental, viajes y ventas.',
  },
  {
    icon: Zap,
    color: 'bg-brand-50 text-brand-600',
    title: '¡En vivo!',
    body: 'Desde donde estés, a tu ritmo, con seguimiento personalizado.',
  },
  {
    icon: Lightbulb,
    color: 'bg-amber-50 text-amber-600',
    title: 'El conocimiento que nadie te enseñó',
    body: 'Hay decisiones importantes — sobre salud, trabajo, dinero, bienestar — que nadie nos explica. All Ask existe para cerrar esa brecha.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-brand-50 text-brand-600',
    title: 'Guía de alguien que ya lo recorrió',
    body: 'Conectamos con personas que tomaron ese camino antes que vos y pueden guiarte con experiencia real, no con teoría.',
  },
  {
    icon: ArrowRight,
    color: 'bg-violet-50 text-violet-600',
    title: 'Herramientas concretas, no relleno',
    body: 'Cada seminario está diseñado para darte pasos accionables. Elegís el tema que más te interesa y consultás directamente.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-12 lg:py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 lg:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-brand-600 text-sm font-semibold tracking-wide uppercase">
              ¿Qué es All Ask?
            </span>
            <h2
              id="about-heading"
              className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              Aprendé directamente de quienes
              <br className="hidden sm:block" />
              <span className="text-brand-600"> ya lo lograron</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              All Ask Comunidad Educativa conecta a personas con expertos que comparten su experiencia real en
              seminarios online. Sin relleno, sin teoría vacía — solo el conocimiento que
              necesitás para dar el próximo paso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/exec.webp"
              alt="Ejecutivo All Ask Comunidad Educativa"
              width={1576}
              height={678}
              className="w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white rounded-2xl p-5 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${c.color}`}>
                <c.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 leading-snug">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
