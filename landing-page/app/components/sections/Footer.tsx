import Link from 'next/link'
import { FOOTER_LINKS } from '@/app/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-background-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SaludMental</h3>
            <p className="text-sm text-gray-400">
              Plataforma de salud mental digital diseñada para Latinoamérica. Accesible, continua y siempre disponible.
            </p>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.producto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SaludMental. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {/* Redes sociales mínimas - placeholder */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

