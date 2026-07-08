'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, BookOpen, Zap } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expertos reales',
    description: 'Aprendés de personas que ya lo vivieron, no de docentes teóricos.',
  },
  {
    icon: BookOpen,
    title: '7 temáticas',
    description: 'Desde nutrición y empleo hasta salud mental, viajes y ventas.',
  },
  {
    icon: Zap,
    title: '100% online',
    description: 'Desde donde estés, a tu ritmo, con seguimiento personalizado.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.12 },
  }),
}

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-gray-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
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
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            All Ask Comunidad Educativa conecta a personas con expertos que comparten su experiencia real en
            seminarios online. Sin relleno, sin teoría vacía — solo el conocimiento que
            necesitás para dar el próximo paso.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="text-brand-600" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image + copy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.webp"
                alt="Seminario online con experto en All Ask Comunidad Educativa"
                width={600}
                height={420}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={1}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              El conocimiento que nadie
              <span className="text-brand-600"> te enseñó</span> en la escuela
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Hay decisiones importantes — sobre salud, trabajo, dinero, bienestar — que
              nadie nos explica. All Ask existe para cerrar esa brecha, conectándote con
              alguien que ya tomó ese camino y puede guiarte.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Cada seminario está diseñado para darte herramientas concretas, no teoría.
              Podés elegir el tema que más te interese y consultar directamente.
            </p>
            <a
              href="#seminarios"
              className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
              aria-label="Ver todos los seminarios disponibles"
            >
              Ver todos los seminarios
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
