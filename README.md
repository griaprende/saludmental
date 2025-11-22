# Landing Page - Plataforma de Salud Mental Digital

Landing page minimalista para plataforma de salud mental digital en Latinoamérica, diseñada para desplegarse en Vercel.

## Características

- ✅ Next.js 14+ con App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Diseño minimalista y responsive
- ✅ SEO optimizado
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Performance optimizado
- ✅ Listo para Vercel

## Setup

### Instalación

```bash
cd landing-page
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build

```bash
npm run build
npm run start
```

## Estructura del Proyecto

```
/app
  layout.tsx              # Layout principal con metadata
  page.tsx                # Página principal
  globals.css             # Estilos globales
  sitemap.ts              # Sitemap generado
  robots.ts               # Robots.txt
  /components
    /sections             # Componentes de secciones
    /ui                   # Componentes UI reutilizables
    /forms                # Formularios
  /lib                    # Utilidades y constantes
  /api                    # API routes
```

## Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El deploy se realizará automáticamente en cada push

O usando Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Variables de Entorno

Configura en Vercel Dashboard:
- `NEXT_PUBLIC_SITE_URL` - URL del sitio (opcional)

## Características Implementadas

- ✅ Header sticky con navegación
- ✅ Hero section con CTAs
- ✅ Estadísticas impactantes
- ✅ 3 pilares de solución
- ✅ Cómo funciona (pasos)
- ✅ Lista de beneficios
- ✅ Testimonios
- ✅ Seguridad y privacidad
- ✅ CTA final
- ✅ Footer completo
- ✅ SEO y metadata
- ✅ Structured data (JSON-LD)
- ✅ Sitemap y robots.txt
- ✅ Formulario de leads
- ✅ API route para formularios

## Próximos Pasos

1. Agregar imágenes reales en `/public/images`
2. Configurar integración real para formularios (SendGrid, Mailchimp, etc.)
3. Agregar analytics (Google Analytics, etc.)
4. Personalizar colores y branding
5. Agregar más contenido según necesidades

## Notas

- El diseño es minimalista según el design brief
- Todos los componentes son responsive
- Optimizado para performance
- Accesible por defecto

