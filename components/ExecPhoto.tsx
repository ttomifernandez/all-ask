'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ExecPhoto() {
  return (
    <section className="py-14 bg-white" aria-label="Espacio de aprendizaje">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about.webp"
            alt="Aprendé con quien ya lo vivió — All Ask Comunidad Educativa"
            width={600}
            height={360}
            className="w-full object-cover max-h-[260px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mb-1">
              All Ask Comunidad Educativa
            </p>
            <p className="text-white font-bold text-base leading-snug">
              Aprendé con quien ya lo vivió
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
