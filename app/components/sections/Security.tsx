import Link from 'next/link'

export default function Security() {
  return (
    <section className="py-16 bg-background-alternate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            100% Privado y Seguro
          </h2>
          <p className="text-base text-text-secondary mb-6">
            Encriptación end-to-end • Cumplimiento con regulaciones de salud • Profesionales certificados y verificados
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacidad" className="text-text-secondary hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-text-tertiary">•</span>
            <Link href="/terminos" className="text-text-secondary hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
            <span className="text-text-tertiary">•</span>
            <Link href="/cookies" className="text-text-secondary hover:text-primary transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

