'use client'
import { motion } from 'framer-motion'
import { Sparkles, BookOpen, Briefcase, TrendingUp, Globe, Heart, Leaf } from 'lucide-react'

const highlights = [
  { icon: Sparkles, label: 'Centro de estética' },
  { icon: BookOpen, label: 'Instituto de idiomas' },
  { icon: Briefcase, label: 'Primer empleo' },
  { icon: TrendingUp, label: 'Ventas' },
  { icon: Globe, label: 'Viajar y trabajar' },
  { icon: Heart, label: 'Salud mental' },
  { icon: Leaf, label: 'Nutrición' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white"
      aria-label="Inicio"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" aria-hidden="true" />
              Seminarios online con expertos reales
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.07 }}
              className="flex items-baseline gap-1 justify-center lg:justify-start mb-4"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-600 leading-none">ALL</span>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-800 leading-none">ASK</span>
            </motion.div>

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.13 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight"
            >
              Un experto te enseña el camino
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.19 }}
              className="text-base text-gray-500 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Aprendé de personas que ya recorrieron el camino que vos querés transitar.
              Sin teoría vacía, solo experiencia real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#seminarios"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200 active:scale-95"
              >
                Ver seminarios
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold px-7 py-3.5 rounded-xl border-2 border-brand-200 hover:border-brand-400 hover:bg-brand-50 transition-all active:scale-95"
              >
                Consultar ahora
              </a>
            </motion.div>
          </div>

          {/* ── Columna derecha: panel de temáticas ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="bg-brand-600 rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-200"
          >
            <p className="text-brand-100 text-xs font-semibold uppercase tracking-widest mb-5">
              7 seminarios disponibles
            </p>
            <div className="grid grid-cols-1 gap-3">
              {highlights.map((item, i) => (
                <motion.a
                  key={item.label}
                  href="#seminarios"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: 0.28 + i * 0.05 }}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-2.5 transition-colors group"
                >
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors" aria-hidden="true">
                    <item.icon size={14} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
