'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ExecPhoto() {
  return (
    <section className="py-20 bg-white" aria-label="Ambiente de aprendizaje">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            Aprendé donde estés, a tu ritmo
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200"
        >
          <Image
            src="/images/about.webp"
            alt="Ambiente de aprendizaje online — All Ask Comunidad Educativa"
            width={1200}
            height={700}
            className="w-full object-cover max-h-[420px] sm:max-h-[520px]"
          />
          {/* Overlay con copy */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">
                All Ask Comunidad Educativa
              </p>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-xl">
                El conocimiento que nadie<br />te enseñó en la escuela
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
