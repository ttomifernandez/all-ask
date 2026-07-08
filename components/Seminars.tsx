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
    bg: 'bg-green-50 border-green-100',
    description: 'Todo lo que necesitás saber para emprender o crecer en el mundo de la estética profesional.',
  },
  {
    id: 2,
    title: 'Know How para crear tu propio instituto de idiomas',
    subtitle: '',
    icon: BookOpen,
    bg: 'bg-emerald-50 border-emerald-100',
    description: 'Cómo crear y escalar un instituto de idiomas desde la experiencia de quien ya lo hizo.',
  },
  {
    id: 3,
    title: 'Estrategias para lograr tu primer empleo',
    subtitle: 'CV · entrevistas · dónde buscar',
    icon: Briefcase,
    bg: 'bg-slate-50 border-slate-100',
    description: 'El camino real hacia tu primer trabajo: cómo armar un CV que funcione, prepararte para entrevistas y dónde buscar.',
  },
  {
    id: 4,
    title: '¿Qué son las ventas?',
    subtitle: '¿Es para mí?',
    icon: TrendingUp,
    bg: 'bg-teal-50 border-teal-100',
    description: 'Descubrí si el mundo de las ventas es tu lugar y qué habilidades necesitás para empezar.',
  },
  {
    id: 5,
    title: 'Claves para viajar y trabajar por el mundo',
    subtitle: 'Turismo · trabajo remoto · experiencias',
    icon: Globe,
    bg: 'bg-gray-50 border-gray-100',
    description: 'Estrategias reales para financiar viajes, trabajar desde cualquier lugar y vivir experiencias únicas.',
  },
  {
    id: 6,
    title: 'Salud mental y consumos',
    subtitle: 'Señales, recursos y pasos a seguir',
    icon: Heart,
    bg: 'bg-lime-50 border-lime-100',
    description: 'Cómo identificar señales de alerta en salud mental y consumos, cuándo buscar ayuda y qué recursos existen.',
  },
  {
    id: 7,
    title: 'Quiero comer bien',
    subtitle: 'Nutrición según tus gustos',
    icon: Leaf,
    bg: 'bg-green-50 border-green-100',
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

interface SeminarsProps {
  selectedId: number | null
  onSelect: (id: number) => void
}

export default function Seminars({ selectedId, onSelect }: SeminarsProps) {
  return (
    <section
      id="seminarios"
      className="py-24 bg-white"
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
            Elegí el tema que más te interesa y consultá directo con nosotros.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEMINARS.map((seminar, i) => {
            const Icon = seminar.icon
            const isSelected = selectedId === seminar.id
            return (
              <motion.button
                key={seminar.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i}
                onClick={() => onSelect(seminar.id)}
                aria-pressed={isSelected}
                aria-label={`Seleccionar seminario: ${seminar.title}${seminar.subtitle ? ` — ${seminar.subtitle}` : ''}`}
                className={`group text-left rounded-2xl p-6 border-2 transition-all duration-200 w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 shadow-lg shadow-brand-100'
                    : `${seminar.bg} hover:border-brand-300 hover:shadow-md hover:shadow-gray-100`
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? 'bg-brand-600' : 'bg-white/70 group-hover:bg-white'
                  }`}
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    className={isSelected ? 'text-white' : 'text-brand-600'}
                  />
                </div>
                <h3
                  className={`font-bold text-sm mb-1 leading-snug transition-colors ${
                    isSelected ? 'text-brand-700' : 'text-gray-900 group-hover:text-brand-700'
                  }`}
                >
                  {seminar.title}
                </h3>
                {seminar.subtitle && (
                  <p className="text-xs text-gray-400 font-medium mb-3">{seminar.subtitle}</p>
                )}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {seminar.description}
                </p>
                {isSelected && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.463-6.695a.75.75 0 0 1 1.07-.252Z" clipRule="evenodd" />
                    </svg>
                    Seleccionado
                  </div>
                )}
              </motion.button>
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
