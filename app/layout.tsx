import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'All Ask Comunidad Educativa — Un experto te enseña el camino',
  description:
    'Seminarios online con expertos reales. Aprendé de quienes ya lograron lo que vos querés lograr. Nutrición, empleo, ventas, viajes, salud mental y más.',
  keywords: 'seminarios online, expertos, aprendizaje, nutrición, empleo, ventas, viajes, psicología, estética, idiomas',
  openGraph: {
    title: 'All Ask Comunidad Educativa — Un experto te enseña el camino',
    description: 'Aprendé de quienes ya lo lograron. Seminarios online con expertos reales.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
