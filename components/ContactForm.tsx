'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle } from 'lucide-react'
import { SEMINARS } from './Seminars'

const WA_NUMBER = '5493512125261'

interface ContactFormProps {
  selectedSeminarId: number | null
  onSeminarChange: (id: number | null) => void
}

export default function ContactForm({ selectedSeminarId, onSeminarChange }: ContactFormProps) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    seminario: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  // Sincronizar seminario seleccionado desde las cards
  useEffect(() => {
    if (selectedSeminarId !== null) {
      const s = SEMINARS.find(x => x.id === selectedSeminarId)
      if (s) {
        const label = s.subtitle ? `${s.title} — ${s.subtitle}` : s.title
        setForm(prev => ({ ...prev, seminario: label }))
      }
    }
  }, [selectedSeminarId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))

    // Si cambia el seminario desde el select, resetear selección de cards
    if (name === 'seminario') onSeminarChange(null)
  }

  const validate = (): boolean => {
    const next: Record<string, string> = {}
    if (!form.nombre.trim()) next.nombre = 'Por favor ingresá tu nombre.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Ingresá un email válido.'
    }
    if (!form.telefono.trim() || !/^\+?[\d\s\-()]{8,}$/.test(form.telefono)) {
      next.telefono = 'Ingresá un teléfono válido.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const seminarioTexto = form.seminario || 'No especificado'
    const mensaje = [
      `¡Hola! Quiero consultar sobre All Ask Comunidad Educativa.`,
      ``,
      `*Nombre:* ${form.nombre}`,
      `*Email:* ${form.email}`,
      `*Teléfono:* ${form.telefono}`,
      `*Seminario de interés:* ${seminarioTexto}`,
    ].join('\n')

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  if (sent) {
    return (
      <section id="contacto" className="py-24 bg-brand-50" aria-labelledby="contact-heading">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-12 shadow-xl border border-brand-100"
          >
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-brand-600" size={32} aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ¡Listo! Te esperamos en WhatsApp
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Se abrió WhatsApp con tu consulta. Si no se abrió automáticamente,
              podés escribirnos directamente.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-sm font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
            >
              Hacer otra consulta
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-24 bg-brand-50" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-brand-600 text-sm font-semibold tracking-wide uppercase">
              Hablemos
            </span>
            <h2
              id="contact-heading"
              className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              ¿Listo para dar
              <br />
              <span className="text-brand-600">el próximo paso?</span>
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Completá el formulario y te contactamos por WhatsApp para darte
              toda la información sobre el seminario que elegiste.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Respuesta rápida por WhatsApp',
                'Sin compromiso',
                'Te orientamos si no sabés por dónde empezar',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="white" className="w-3 h-3">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.463-6.695a.75.75 0 0 1 1.07-.252Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100"
              aria-label="Formulario de contacto"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-7">Consultá ahora</h3>

              {/* Nombre */}
              <div className="mb-5">
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Nombre completo <span className="text-red-500" aria-label="campo requerido">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre y apellido"
                  aria-required="true"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-brand-300 ${
                    errors.nombre
                      ? 'border-red-400 bg-red-50 focus:ring-red-200'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-brand-400 focus:bg-white'
                  }`}
                />
                {errors.nombre && (
                  <p id="nombre-error" role="alert" className="mt-1.5 text-xs text-red-600">
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email <span className="text-red-500" aria-label="campo requerido">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-brand-300 ${
                    errors.email
                      ? 'border-red-400 bg-red-50 focus:ring-red-200'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-brand-400 focus:bg-white'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div className="mb-5">
                <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Teléfono <span className="text-red-500" aria-label="campo requerido">*</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de WhatsApp"
                  aria-required="true"
                  aria-invalid={!!errors.telefono}
                  aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-brand-300 ${
                    errors.telefono
                      ? 'border-red-400 bg-red-50 focus:ring-red-200'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-brand-400 focus:bg-white'
                  }`}
                />
                {errors.telefono && (
                  <p id="telefono-error" role="alert" className="mt-1.5 text-xs text-red-600">
                    {errors.telefono}
                  </p>
                )}
              </div>

              {/* Seminario */}
              <div className="mb-7">
                <label htmlFor="seminario" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Seminario de interés
                </label>
                <select
                  id="seminario"
                  name="seminario"
                  value={form.seminario}
                  onChange={handleChange}
                  aria-describedby="seminario-hint"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 hover:border-gray-300 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-300 outline-none transition-colors cursor-pointer"
                >
                  <option value="">Elegir seminario (opcional)</option>
                  {SEMINARS.map(s => (
                    <option key={s.id} value={s.subtitle ? `${s.title} — ${s.subtitle}` : s.title}>
                      {s.subtitle ? `${s.title} — ${s.subtitle}` : s.title}
                    </option>
                  ))}
                  <option value="No sé cuál elegir">No sé cuál elegir, quiero orientación</option>
                </select>
                <p id="seminario-hint" className="mt-1.5 text-xs text-gray-400">
                  También podés seleccionarlo directamente en las cards de arriba.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-brand-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 text-base"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Consultar por WhatsApp
              </button>

              <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed">
                Al enviar, se abrirá WhatsApp con tu consulta lista para enviar.
                No te vamos a mandar spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
