'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ExecPhoto() {
  return (
    <section className="py-10 bg-gray-50" aria-label="Espacio de aprendizaje">
      <div className="max-w-sm mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative rounded-2xl overflow-hidden border-[3px] border-brand-400 shadow-lg shadow-brand-100"
        >
          <Image
            src="/images/about.webp"
            alt="Aprendé con quien ya lo vivió — All Ask Comunidad Educativa"
            width={600}
            height={360}
            className="w-full object-cover max-h-[200px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
            <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
              All Ask
            </p>
            <p className="text-white font-bold text-sm leading-snug">
              Aprendé con quien ya lo vivió
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
