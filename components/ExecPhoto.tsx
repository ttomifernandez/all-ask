'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ExecPhoto() {
  return (
    <section className="py-10 bg-gray-50" aria-label="Imagen destacada">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/hero.webp"
            alt="All Ask Comunidad Educativa"
            width={1280}
            height={714}
            className="w-full object-cover max-h-[240px] sm:max-h-[280px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
