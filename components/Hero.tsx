'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white"
      aria-label="Inicio"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" aria-hidden="true" />
            Seminarios online con expertos reales
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.07 }}
            className="flex items-baseline gap-1.5 justify-center mb-5"
          >
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-600 leading-none">ALL</span>
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-800 leading-none">ASK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.13 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Un experto te enseña el camino
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.19 }}
            className="text-lg text-gray-500 mb-9 leading-relaxed max-w-xl mx-auto"
          >
            Aprendé de personas que ya recorrieron el camino que vos querés transitar.
            Sin teoría vacía, solo experiencia real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a href="#seminarios" className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200 active:scale-95">
              Ver seminarios
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold px-8 py-3.5 rounded-xl border-2 border-brand-200 hover:border-brand-400 hover:bg-brand-50 transition-all active:scale-95">
              Consultar ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
