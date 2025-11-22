# Plan de Implementación - Landing Page en Vercel

**Proyecto:** Landing Page - Plataforma de Salud Mental Digital  
**Plataforma:** Vercel  
**Framework:** Next.js 14+ (App Router)  
**Estilos:** Tailwind CSS  
**Referencia:** design-brief-landing.md

---

## Fase 1: Setup Inicial del Proyecto

### 1.1 Inicialización del Proyecto Next.js

**Comandos:**
```bash
npx create-next-app@latest landing-page --typescript --tailwind --app --no-src-dir
cd landing-page
```

**Configuración inicial:**
- TypeScript habilitado
- Tailwind CSS incluido
- App Router (no Pages Router)
- Sin carpeta `src/` (estructura plana)

**Archivos base a crear:**
- `package.json` - Dependencias
- `tsconfig.json` - Configuración TypeScript
- `next.config.js` - Configuración Next.js
- `.eslintrc.json` - Linting rules
- `.prettierrc` - Code formatting

### 1.2 Configuración de Tailwind CSS

**Instalación (si no está incluido):**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configuración `tailwind.config.js`:**
```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
          light: '#DBEAFE',
        },
        success: '#10B981',
        danger: '#EF4444',
        text: {
          primary: '#111827',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
        },
        border: '#E5E7EB',
        background: {
          DEFAULT: '#FFFFFF',
          alternate: '#F8F9FA',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Sistema 8px
      },
    },
  },
  plugins: [],
}
```

**Configuración `postcss.config.js`:**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 1.3 Configuración de Fuentes

**En `app/layout.tsx`:**
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### 1.4 Estructura de Directorios

**Crear estructura:**
```
/app
  layout.tsx
  page.tsx
  /components
    /sections
      Header.tsx
      Hero.tsx
      Stats.tsx
      Solution.tsx
      HowItWorks.tsx
      Benefits.tsx
      Testimonials.tsx
      Security.tsx
      CTA.tsx
      Footer.tsx
    /ui
      Button.tsx
      Input.tsx
      Card.tsx
  /lib
    utils.ts
    constants.ts
  /public
    /images
    /icons
```

---

## Fase 2: Componentes Base y UI

### 2.1 Componente Button (`app/components/ui/Button.tsx`)

**Props:**
- `variant`: 'primary' | 'secondary'
- `size`: 'lg' | 'md' | 'sm'
- `children`: ReactNode
- `onClick`: function
- `disabled`: boolean
- `className`: string (opcional)

**Implementación:**
- Estilos según design brief
- Primary: 56px altura, fondo #2563EB
- Secondary: 48px altura, borde, transparente
- Estados hover, active, disabled
- Transiciones suaves

### 2.2 Componente Input (`app/components/ui/Input.tsx`)

**Props:**
- `type`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `error`: boolean
- `className`: string

**Implementación:**
- 48px altura
- Border radius 8px
- Estados focus y error
- Estilos minimalistas

### 2.3 Utilidades (`app/lib/utils.ts`)

**Funciones:**
- `cn()`: Merge de classNames (usando clsx o tailwind-merge)
- Helpers de formateo
- Utilidades de validación

### 2.4 Constantes (`app/lib/constants.ts`)

**Contenido:**
- Paleta de colores completa
- Copy de todas las secciones (headlines, subheadlines, CTAs)
- Datos de estadísticas (74.7%, 80%, etc.)
- Links de navegación
- Datos de beneficios
- Testimonios (si aplica)
- Información de contacto

---

## Fase 3: Implementación de Secciones

### 3.1 Header Component (`app/components/sections/Header.tsx`)

**Características:**
- Client Component (necesita interactividad)
- Logo a la izquierda
- Navegación: Inicio | Cómo Funciona | Para Empresas
- CTA "Comenzar Gratis" a la derecha
- Link "Iniciar Sesión"
- Sticky con `position: sticky`
- Borde sutil en scroll (usar `useEffect` + `useState`)
- Menú hamburger para mobile
- Altura: 64px (h-16)

**Implementación:**
```typescript
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'border-b border-gray-200' : ''}`}>
      {/* Implementación */}
    </header>
  )
}
```

### 3.2 Hero Section (`app/components/sections/Hero.tsx`)

**Características:**
- Server Component (si no necesita interactividad)
- Headline: 48-64px desktop, 32-40px mobile
- Subheadline: 20-24px
- Dos CTAs usando componente Button
- Mockup de app (Next.js Image component)
- Layout centrado, max-width 1200px
- Padding: py-30 desktop, py-12 mobile

**Layout:**
- Grid o flex para distribución
- Texto a la izquierda, imagen a la derecha (desktop)
- Stack vertical en mobile

### 3.3 Stats Section (`app/components/sections/Stats.tsx`)

**Características:**
- Server Component
- 3 estadísticas en grid (3 columnas desktop, 1 mobile)
- Número grande: text-7xl (72px), font-bold, color primario
- Etiqueta: text-base (16px), text-gray-600
- Descripción: text-lg (18px)
- Fondo: bg-gray-50 (#F8F9FA)
- Padding: py-20 (80px)

**Datos:**
- 74.7% - No reciben tratamiento
- 80% - En áreas rurales
- <2 min - Tiempo de respuesta a crisis

### 3.4 Solution Section (`app/components/sections/Solution.tsx`)

**Características:**
- Server Component
- 3 columnas iguales (grid-cols-3 desktop, grid-cols-1 mobile)
- Icono SVG (48px, color primario) - usar Heroicons
- Título: text-2xl (24px), font-bold
- Descripción: text-base (16px)
- Fondo blanco
- Padding: py-20

**Pilares:**
1. Acceso Universal - Icono: GlobeAltIcon
2. Respuesta Inmediata - Icono: ClockIcon
3. Continuidad de Cuidado - Icono: ChartBarIcon

### 3.5 HowItWorks Section (`app/components/sections/HowItWorks.tsx`)

**Características:**
- Server Component
- Layout vertical centrado
- 3-4 pasos numerados
- Número: text-5xl (48px), font-bold, color primario
- Título: text-xl (20px), font-bold
- Descripción: text-base (16px)
- Max-width: 800px (mx-auto)
- Espaciado entre pasos: mb-12 (48px)

**Pasos:**
1. Descarga la app
2. Completa el triage inicial
3. Conecta con un profesional
4. Mantén tu progreso

### 3.6 Benefits Section (`app/components/sections/Benefits.tsx`)

**Características:**
- Server Component
- Grid 2 columnas (desktop), 1 (mobile)
- Check icon SVG (24px, color primario) - CheckCircleIcon
- Texto: text-lg (18px)
- Fondo: bg-gray-50
- Padding: py-15 (60px)

**Beneficios:**
- Funciona sin internet constante
- Respuesta a crisis en menos de 2 minutos
- Seguimiento continuo entre sesiones
- Profesionales certificados
- 100% privado y seguro
- Desde $0/mes
- Disponible 24/7
- Adaptado culturalmente

### 3.7 Testimonials Section (`app/components/sections/Testimonials.tsx`)

**Características:**
- Opcional
- Server Component
- Grid 3 columnas o carousel
- Texto itálico: text-base (16px), italic
- Nombre: text-sm (14px), font-bold
- Ubicación: text-sm (14px), text-gray-600
- Fondo blanco

### 3.8 Security Section (`app/components/sections/Security.tsx`)

**Características:**
- Server Component
- Badges de certificación en fila (flex)
- Texto: text-xl (20px)
- Link a políticas: text-sm (14px), text-gray-600
- Fondo: bg-gray-50
- Padding: py-15
- Centrado

### 3.9 CTA Final Section (`app/components/sections/CTA.tsx`)

**Características:**
- Server Component
- Headline: text-4xl (36px), font-bold
- Subheadline: text-lg (18px)
- CTA grande usando Button component
- Texto de apoyo: text-sm (14px)
- Fondo: bg-primary o gradiente sutil
- Texto blanco
- Max-width: 600px, centrado
- Padding: py-25 (100px)

### 3.10 Footer Component (`app/components/sections/Footer.tsx`)

**Características:**
- Server Component
- Grid 4 columnas (desktop), stack (mobile)
- Columna 1: Logo + descripción
- Columna 2: Links de Producto
- Columna 3: Links de Empresa
- Columna 4: Links Legales
- Línea inferior: Copyright + redes sociales
- Fondo: bg-gray-900 (#1A1A1A)
- Texto: text-gray-300
- Padding: py-15

---

## Fase 4: Página Principal

### 4.1 app/page.tsx

**Implementación:**
```typescript
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Solution from './components/sections/Solution'
import HowItWorks from './components/sections/HowItWorks'
import Benefits from './components/sections/Benefits'
import Testimonials from './components/sections/Testimonials'
import Security from './components/sections/Security'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
```

### 4.2 app/layout.tsx

**Implementación:**
```typescript
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Salud Mental Accesible para Todos - Incluso Sin Internet',
  description: 'La primera plataforma de salud mental diseñada para Latinoamérica. Telemedicina offline, respuesta a crisis en menos de 2 minutos, y seguimiento continuo.',
  keywords: 'salud mental, telemedicina, terapia online, Latinoamérica',
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    title: 'Salud Mental Accesible para Todos',
    description: 'La primera plataforma de salud mental diseñada para Latinoamérica',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salud Mental Accesible para Todos',
    description: 'La primera plataforma de salud mental diseñada para Latinoamérica',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
```

### 4.3 app/globals.css

**Contenido:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply text-text-primary bg-background;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Fase 5: SEO y Metadata

### 5.1 Metadata Completa en layout.tsx

**Incluir:**
- Title optimizado
- Description meta tag
- Keywords
- Authors
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Language alternates (es, pt)

### 5.2 Structured Data (JSON-LD)

**Crear componente `app/components/StructuredData.tsx`:**
```typescript
export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nombre de la Plataforma',
    url: 'https://tudominio.com',
    logo: 'https://tudominio.com/logo.png',
    description: 'Plataforma de salud mental digital para Latinoamérica',
  }
  
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nombre de la Plataforma',
    url: 'https://tudominio.com',
  }
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Nombre de la Plataforma',
    description: 'Servicios de salud mental digital',
    areaServed: 'Latin America',
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
```

**Incluir en `app/layout.tsx`**

### 5.3 Sitemap y Robots

**Crear `app/sitemap.ts`:**
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tudominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

**Crear `app/robots.ts`:**
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tudominio.com/sitemap.xml',
  }
}
```

---

## Fase 6: Optimizaciones de Performance

### 6.1 Imágenes

**Usar Next.js Image component:**
```typescript
import Image from 'next/image'

<Image
  src="/images/hero-mockup.png"
  alt="Mockup de la aplicación"
  width={600}
  height={400}
  priority // Para imágenes above fold
  placeholder="blur" // Si tienes blurDataURL
/>
```

**Optimizaciones:**
- Todas las imágenes <200KB
- Formato WebP donde sea posible
- Lazy loading para imágenes below fold
- Alt text descriptivo

### 6.2 Code Splitting

**Lazy load componentes pesados:**
```typescript
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('./components/sections/Testimonials'), {
  loading: () => <p>Loading...</p>,
})
```

### 6.3 Fonts

**Ya configurado en layout.tsx con next/font**
- Optimización automática
- Preload de fuentes críticas
- Fallback a system fonts

### 6.4 Caching

**En `next.config.js`:**
```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Configuración de headers de cache
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## Fase 7: Interactividad y Animaciones

### 7.1 Smooth Scroll

**Implementar en Header:**
```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
```

### 7.2 Animaciones Sutiles

**Instalar framer-motion (opcional):**
```bash
npm install framer-motion
```

**Usar en componentes:**
```typescript
'use client'

import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  {/* Contenido */}
</motion.div>
```

**O usar CSS puro:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}
```

### 7.3 Formularios

**Crear `app/components/forms/LeadForm.tsx`:**
```typescript
'use client'

import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function LeadForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    // Lógica de submit
    // Integrar con API route o servicio externo
    
    setLoading(false)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs y validación */}
    </form>
  )
}
```

**Crear API route `app/api/leads/route.ts`:**
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Validar datos
  // Guardar en base de datos o servicio externo
  // Enviar email de confirmación
  
  return NextResponse.json({ success: true })
}
```

### 7.4 Navegación Mobile

**Implementar menú hamburger:**
```typescript
'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {/* Icono hamburger */}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Menú drawer */}
        </div>
      )}
    </>
  )
}
```

---

## Fase 8: Configuración para Vercel

### 8.1 Configuración de Deploy

**Crear `vercel.json` (si necesario):**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### 8.2 Environment Variables

**Configurar en Vercel Dashboard:**
- `NEXT_PUBLIC_SITE_URL` - URL del sitio
- `NEXT_PUBLIC_ANALYTICS_ID` - ID de analytics (si aplica)
- Variables de API keys (si aplica)

### 8.3 Analytics

**Instalar Vercel Analytics:**
```bash
npm install @vercel/analytics
```

**En `app/layout.tsx`:**
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Google Analytics (opcional):**
```typescript
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### 8.4 Edge Functions (Opcional)

**Para form submissions:**
```typescript
// app/api/leads/route.ts
export const runtime = 'edge'

export async function POST(request: Request) {
  // Lógica de edge function
}
```

---

## Fase 9: Accesibilidad

### 9.1 Contraste de Colores

**Verificar:**
- Texto normal: ratio mínimo 4.5:1
- Texto grande: ratio mínimo 3:1
- CTAs: ratio mínimo 4.5:1

**Herramientas:**
- WebAIM Contrast Checker
- axe DevTools

### 9.2 Navegación por Teclado

**Implementar:**
- Skip to content link
- Focus states visibles
- Navegación por teclado funcional
- Tab order lógico

**Skip to content:**
```typescript
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
>
  Saltar al contenido
</a>
```

### 9.3 Semántica HTML

**Verificar:**
- Un solo H1 por página
- Headings en orden (H1 → H2 → H3)
- Landmarks (header, main, footer, nav)
- Alt text en todas las imágenes
- Labels en todos los inputs

### 9.4 ARIA Labels

**Donde sea necesario:**
```typescript
<button
  aria-label="Abrir menú de navegación"
  aria-expanded={isOpen}
>
  {/* Icono */}
</button>
```

---

## Fase 10: Testing y Validación

### 10.1 Testing Funcional

**Checklist:**
- [ ] Todos los CTAs funcionan
- [ ] Formularios validan correctamente
- [ ] Navegación funciona (smooth scroll)
- [ ] Menú mobile funciona
- [ ] Links externos abren correctamente
- [ ] Formularios envían datos correctamente

### 10.2 Performance Testing

**Herramientas:**
- Lighthouse (Chrome DevTools)
- WebPageTest
- Vercel Analytics

**Objetivos:**
- Performance score >90
- LCP <2.5s
- FID <100ms
- CLS <0.1
- FCP <1.8s

### 10.3 Cross-Browser Testing

**Navegadores a probar:**
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Android)

### 10.4 Device Testing

**Dispositivos:**
- iPhone (varios modelos, iOS 15+)
- Android (varios modelos, Android 10+)
- Tablets (iPad, Android tablets)
- Desktop (varios tamaños de pantalla)

---

## Fase 11: Pre-Launch Checklist

### 11.1 Contenido
- [ ] Todos los copy finalizados y revisados
- [ ] Imágenes optimizadas (<200KB cada una)
- [ ] Alt text en todas las imágenes
- [ ] Links verificados (todos funcionan)
- [ ] Formularios funcionando y conectados
- [ ] Testimonios verificados (si aplica)

### 11.2 Técnico
- [ ] SEO metadata completo
- [ ] Structured data implementado
- [ ] Sitemap generado
- [ ] Robots.txt configurado
- [ ] Analytics configurado
- [ ] Error tracking configurado (Sentry opcional)
- [ ] Performance optimizado (Lighthouse >90)
- [ ] Accesibilidad verificada (WCAG 2.1 AA)
- [ ] Cross-browser testing completado
- [ ] Mobile testing exhaustivo

### 11.3 Legal
- [ ] Política de privacidad creada y enlazada
- [ ] Términos de servicio creados y enlazados
- [ ] Cookies policy (si aplica)
- [ ] Consentimiento de cookies (si aplica)

### 11.4 Vercel
- [ ] Proyecto conectado a repositorio Git
- [ ] Environment variables configuradas
- [ ] Dominio configurado
- [ ] SSL/HTTPS activado
- [ ] Deploy de producción exitoso

---

## Fase 12: Post-Launch

### 12.1 Monitoreo

**Configurar:**
- Error tracking (Sentry o similar)
- Analytics (Vercel Analytics + Google Analytics)
- Uptime monitoring
- Performance monitoring

### 12.2 Optimización Continua

**Actividades:**
- A/B testing de headlines y CTAs
- Análisis de heatmaps (Hotjar o similar)
- Recolección de feedback de usuarios
- Análisis de métricas de conversión
- Iteración basada en datos

**Métricas a monitorear:**
- Tasa de conversión
- Tiempo en página
- Scroll depth
- Bounce rate
- Clicks en CTAs
- Formularios completados

---

## Dependencias Principales

### Core
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0"
}
```

### Estilos
```json
{
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

### Iconos
```json
{
  "@heroicons/react": "^2.0.0"
}
```

### Utilidades
```json
{
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

### Animaciones (Opcional)
```json
{
  "framer-motion": "^10.16.0"
}
```

### Analytics
```json
{
  "@vercel/analytics": "^1.0.0"
}
```

---

## Comandos de Desarrollo

### Setup inicial
```bash
npx create-next-app@latest landing-page --typescript --tailwind --app
cd landing-page
npm install @heroicons/react clsx tailwind-merge @vercel/analytics
```

### Desarrollo
```bash
npm run dev
# Abre http://localhost:3000
```

### Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

### Type checking
```bash
npx tsc --noEmit
```

---

## Estructura de Archivos Final

```
/app
  layout.tsx                    # Layout principal con metadata
  page.tsx                      # Página principal
  globals.css                   # Estilos globales
  sitemap.ts                    # Sitemap generado
  robots.ts                     # Robots.txt
  /api
    /leads
      route.ts                  # API route para formularios
  /components
    /sections
      Header.tsx                # Header sticky
      Hero.tsx                  # Sección hero
      Stats.tsx                 # Estadísticas
      Solution.tsx              # 3 pilares
      HowItWorks.tsx            # Cómo funciona
      Benefits.tsx              # Beneficios
      Testimonials.tsx          # Testimonios (opcional)
      Security.tsx              # Seguridad/Privacidad
      CTA.tsx                   # CTA final
      Footer.tsx                # Footer
    /ui
      Button.tsx                # Componente botón
      Input.tsx                 # Componente input
      Card.tsx                  # Componente card (opcional)
    /forms
      LeadForm.tsx              # Formulario de leads
    StructuredData.tsx          # JSON-LD schemas
  /lib
    utils.ts                    # Utilidades
    constants.ts                # Constantes y copy
  /public
    /images
      hero-mockup.png
      app-screenshot.png
    /icons
      logo.svg
next.config.js                  # Configuración Next.js
tailwind.config.js              # Configuración Tailwind
tsconfig.json                   # Configuración TypeScript
package.json                    # Dependencias
vercel.json                     # Configuración Vercel (opcional)
```

---

## Notas de Implementación

### Principios a Seguir

1. **Server Components por defecto**: Usar Server Components siempre que sea posible, Client Components solo cuando se necesite interactividad
2. **Mobile-first**: Diseñar primero para mobile, luego agregar complejidad para desktop
3. **Minimalismo estricto**: Seguir el design brief al pie de la letra - menos es más
4. **Performance primero**: Optimizar desde el inicio, no después
5. **Accesibilidad desde el día 1**: No es opcional, es requisito
6. **Sistema 8px**: Usar múltiplos de 8 para espaciado
7. **Colores exactos**: Usar los colores exactos del design brief
8. **Tipografía Inter**: Usar Inter como fuente principal

### Consideraciones Especiales

- **Offline-first messaging**: Asegurar que el copy comunique claramente la funcionalidad offline
- **Crisis messaging**: El botón de crisis debe ser prominente pero no alarmante
- **Confianza**: Todos los elementos deben construir confianza (certificaciones, privacidad, seguridad)
- **Reducción de fricción**: Minimizar barreras de entrada (sin tarjeta de crédito, registro simple)

### Iteración

Este plan es un punto de partida. La implementación debe iterarse basándose en:
- Feedback del equipo
- Testing de usuarios
- Métricas de analytics
- Performance data

---

**Próximos Pasos:**

1. Ejecutar comandos de setup inicial
2. Crear estructura de directorios
3. Implementar componentes base (Button, Input)
4. Implementar secciones una por una
5. Configurar SEO y metadata
6. Optimizar performance
7. Testing exhaustivo
8. Deploy a Vercel
9. Monitoreo y optimización continua

---

*Plan creado: Noviembre 2024*  
*Basado en: design-brief-landing.md*  
*Plataforma: Vercel*  
*Framework: Next.js 14+ (App Router)*

