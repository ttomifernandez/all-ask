'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ExecPhoto() {
  return (
    <section className="py-8 bg-gray-50" aria-label="Foto ejecutivo">
      <div className="max-w-xs mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative rounded-xl overflow-hidden border-[3px] border-brand-400 shadow-md shadow-brand-100"
        >
          <Image
            src="/images/exec.webp"
            alt="Ejecutivo All Ask Comunidad Educativa"
            width={1576}
            height={678}
            className="w-full object-cover max-h-[160px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
