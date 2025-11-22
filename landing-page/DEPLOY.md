# Guía de Deploy en Vercel

## Opción 1: Deploy desde GitHub (Recomendado)

1. **Crear repositorio en GitHub:**
   ```bash
   cd landing-page
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/landing-page.git
   git push -u origin main
   ```

2. **Conectar a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Click en "New Project"
   - Importa el repositorio `landing-page`
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

3. **Configurar dominio (opcional):**
   - En el dashboard de Vercel, ve a Settings > Domains
   - Agrega tu dominio personalizado

## Opción 2: Deploy con Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd landing-page
   vercel
   ```

4. **Deploy de producción:**
   ```bash
   vercel --prod
   ```

## Variables de Entorno

Si necesitas configurar variables de entorno:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings > Environment Variables
3. Agrega las variables necesarias:
   - `NEXT_PUBLIC_SITE_URL` (opcional)

## Post-Deploy

Después del deploy:

1. Verifica que el sitio carga correctamente
2. Revisa los logs en Vercel Dashboard
3. Configura analytics (Vercel Analytics ya está incluido)
4. Verifica SEO con herramientas como Google Search Console

## Troubleshooting

### Error: Module not found
- Asegúrate de que todas las dependencias estén en `package.json`
- Ejecuta `npm install` localmente para verificar

### Error: Build failed
- Revisa los logs en Vercel Dashboard
- Verifica que TypeScript compile sin errores: `npx tsc --noEmit`

### Imágenes no cargan
- Asegúrate de que las imágenes estén en `/public/images`
- Usa rutas relativas: `/images/nombre-imagen.png`

## Optimizaciones Post-Deploy

1. **Performance:**
   - Verifica Lighthouse score
   - Optimiza imágenes si es necesario
   - Revisa Core Web Vitals

2. **SEO:**
   - Envía sitemap a Google Search Console
   - Verifica metadata con herramientas SEO

3. **Analytics:**
   - Configura eventos de conversión
   - Monitorea métricas clave

