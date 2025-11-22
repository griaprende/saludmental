import Button from '../ui/Button'
import { HERO } from '@/app/lib/constants'

export default function Hero() {
  return (
    <section id="inicio" className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl">
              {HERO.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                {HERO.ctaPrimary}
              </Button>
              <Button variant="secondary" size="lg">
                {HERO.ctaSecondary}
              </Button>
            </div>
            <p className="mt-6 text-sm text-text-tertiary">
              Sin tarjeta de crédito • 100% privado • Registro en menos de 2 minutos
            </p>
          </div>

          {/* Image/Mockup */}
          <div className="relative">
            <div className="mx-auto max-w-md">
              <div className="aspect-[9/16] w-full rounded-2xl bg-gradient-to-br from-primary-light to-primary p-8 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6">
                  <div className="h-12 w-12 rounded-full bg-primary"></div>
                  <div className="space-y-2 text-center">
                    <div className="h-4 w-32 rounded bg-gray-200 mx-auto"></div>
                    <div className="h-4 w-24 rounded bg-gray-200 mx-auto"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-full rounded bg-gray-100"></div>
                    <div className="h-2 w-3/4 rounded bg-gray-100"></div>
                    <div className="h-2 w-5/6 rounded bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

