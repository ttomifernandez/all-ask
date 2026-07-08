'use client'
import { motion } from 'framer-motion'
import {
  Sparkles,
  BookOpen,
  Briefcase,
  TrendingUp,
  Globe,
  Heart,
  Leaf,
} from 'lucide-react'

export const SEMINARS = [
  {
    id: 1,
    title: 'Know How para crear tu propio centro de estética',
    subtitle: '',
    icon: Sparkles,
    bg: 'bg-rose-500',
    text: 'light',
    description: 'Todo lo que necesitás saber para emprender o crecer en el mundo de la estética profesional.',
  },
  {
    id: 2,
    title: 'Know How para crear tu propio instituto de idiomas',
    subtitle: '',
    icon: BookOpen,
    bg: 'bg-blue-600',
    text: 'light',
    description: 'Cómo crear y escalar un instituto de idiomas desde la experiencia de quien ya lo hizo.',
  },
  {
    id: 3,
    title: 'Estrategias para lograr tu primer empleo',
    subtitle: 'CV · entrevistas · dónde buscar',
    icon: Briefcase,
    bg: 'bg-amber-400',
    text: 'dark',
    description: 'El camino real hacia tu primer trabajo: cómo armar un CV que funcione, prepararte para entrevistas y dónde buscar.',
  },
  {
    id: 4,
    title: '¿Qué son las ventas?',
    subtitle: '¿Es para mí?',
    icon: TrendingUp,
    bg: 'bg-violet-600',
    text: 'light',
    description: 'Descubrí si el mundo de las ventas es tu lugar y qué habilidades necesitás para empezar.',
  },
  {
    id: 5,
    title: 'Claves para viajar y trabajar por el mundo',
    subtitle: 'Turismo · trabajo remoto · experiencias',
    icon: Globe,
    bg: 'bg-emerald-500',
    text: 'light',
    description: 'Estrategias reales para financiar viajes, trabajar desde cualquier lugar y vivir experiencias únicas.',
  },
  {
    id: 6,
    title: 'Salud mental y consumos',
    subtitle: 'Señales, recursos y pasos a seguir',
    icon: Heart,
    bg: 'bg-orange-500',
    text: 'light',
    description: 'Cómo identificar señales de alerta en salud mental y consumos, cuándo buscar ayuda y qué recursos existen.',
  },
  {
    id: 7,
    title: 'Quiero comer bien',
    subtitle: 'Nutrición según tus gustos',
    icon: Leaf,
    bg: 'bg-cyan-500',
    text: 'dark',
    description: 'Alimentación saludable sin dietas imposibles. Aprendé a comer bien respetando tus gustos y tu estilo de vida.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.07 },
  }),
}

export default function Seminars() {
  return (
    <section
      id="seminarios"
      className="py-24 bg-gray-50"
      aria-labelledby="seminars-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-brand-600 text-sm font-semibold tracking-wide uppercase">
            Lo que podés aprender
          </span>
          <h2
            id="seminars-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            Nuestros seminarios
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Estas son algunas de las temáticas que tenemos, porque luego se agregarán más
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEMINARS.map((seminar, i) => {
            const Icon = seminar.icon
            const isLight = seminar.text === 'light'
            const total = SEMINARS.length
            const remainder = total % 3
            const isOrphan = remainder === 1 && i === total - 1

            return (
              <motion.div
                key={seminar.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl p-6 ${seminar.bg} ${isOrphan ? 'lg:col-span-2' : ''}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-white/20"
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    className={isLight ? 'text-white' : 'text-gray-800'}
                  />
                </div>

                <h3
                  className={`font-bold text-sm mb-1 leading-snug ${
                    isLight ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {seminar.title}
                </h3>

                {seminar.subtitle && (
                  <p className={`text-xs font-medium mb-3 ${
                    isLight ? 'text-white/70' : 'text-gray-700'
                  }`}>
                    {seminar.subtitle}
                  </p>
                )}

                <p className={`text-xs leading-relaxed mt-2 ${
                  isLight ? 'text-white/80' : 'text-gray-800'
                }`}>
                  {seminar.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            ¿No encontrás lo que buscás? Consultanos igual — podemos orientarte.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200 active:scale-95"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
