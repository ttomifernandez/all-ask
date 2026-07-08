import { MessageCircle } from 'lucide-react'

const WA_NUMBER = '5493512125261'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white" aria-label="Pie de página">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="text-2xl font-black tracking-tight text-brand-400">ALL</span>
              <span className="text-2xl font-black tracking-tight text-brand-300">ASK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Comunidad Educativa. Un experto te enseña el camino.
              Seminarios online con quienes ya lo lograron.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
              Seminarios
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['Estética', 'Idiomas', 'Primer empleo', 'Ventas', 'Viajes', 'Salud mental', 'Nutrición'].map(item => (
                <li key={item}>
                  <a href="#seminarios" className="hover:text-brand-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
              Contacto
            </h3>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle size={18} className="shrink-0" aria-hidden="true" />
                Escribirnos por WhatsApp
              </a>
              <p className="text-gray-500 text-xs">
                Respondemos en menos de 24 horas en días hábiles.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year} All Ask Comunidad Educativa. Todos los derechos reservados.
          </p>
          <nav aria-label="Links secundarios">
            <ul className="flex gap-6 text-sm text-gray-500">
              <li><a href="#inicio" className="hover:text-brand-400 transition-colors">Inicio</a></li>
              <li><a href="#seminarios" className="hover:text-brand-400 transition-colors">Seminarios</a></li>
              <li><a href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
