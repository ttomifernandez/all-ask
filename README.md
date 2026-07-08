# All Ask Comunidad Educativa

Plataforma de seminarios online con expertos reales.

**"Un experto te enseña el camino"**

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Configuración

El número de WhatsApp se configura en `components/ContactForm.tsx`, `components/Footer.tsx` y `components/WhatsAppFAB.tsx`:

```typescript
const WA_NUMBER = '5493512125261' // +54 9 351 212-5261
```

## Estructura

```
app/
  layout.tsx          ← Metadata, fuente Inter
  page.tsx            ← Página principal (one-pager)
  globals.css         ← Estilos base Tailwind

components/
  Header.tsx          ← Navbar sticky responsive
  Hero.tsx            ← Sección hero con logo y CTA
  About.tsx           ← "¿Qué es All Ask?"
  Seminars.tsx        ← Grid de 7 seminarios (seleccionables)
  ContactForm.tsx     ← Formulario → WhatsApp
  Footer.tsx          ← Pie de página
  WhatsAppFAB.tsx     ← Botón flotante WhatsApp

public/images/
  hero.webp           ← Imagen del hero
  about.webp          ← Imagen de la sección nosotros
```
