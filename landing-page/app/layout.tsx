import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import StructuredData from './components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Salud Mental Accesible para Todos - Incluso Sin Internet',
  description: 'La primera plataforma de salud mental diseñada para Latinoamérica. Telemedicina offline, respuesta a crisis en menos de 2 minutos, y seguimiento continuo.',
  keywords: 'salud mental, telemedicina, terapia online, Latinoamérica, salud mental digital',
  authors: [{ name: 'SaludMental' }],
  openGraph: {
    title: 'Salud Mental Accesible para Todos',
    description: 'La primera plataforma de salud mental diseñada para Latinoamérica',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['pt_BR'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salud Mental Accesible para Todos',
    description: 'La primera plataforma de salud mental diseñada para Latinoamérica',
  },
  alternates: {
    canonical: 'https://saludmental.com',
    languages: {
      'es-ES': 'https://saludmental.com',
      'pt-BR': 'https://saludmental.com/pt',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

