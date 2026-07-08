'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-12 sm:pt-24 sm:pb-16"
      aria-label="Inicio"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" aria-hidden="true" />
          Seminarios online con expertos reales
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-600 leading-none">
              ALL
            </span>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-800 leading-none">
              ASK
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight"
        >
          Un experto te enseña el camino
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.22 }}
          className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Aprendé de personas que ya recorrieron el camino que vos querés transitar.
          Sin teoría vacía, solo experiencia real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#seminarios"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200 active:scale-95 text-sm sm:text-base"
          >
            Ver seminarios
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold px-7 py-3.5 rounded-xl border-2 border-brand-200 hover:border-brand-400 hover:bg-brand-50 transition-all active:scale-95 text-sm sm:text-base"
          >
            Consultar ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
