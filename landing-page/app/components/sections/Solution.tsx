import { SOLUTION_PILARS } from '@/app/lib/constants'
import { GlobeAltIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const iconMap = {
  GlobeAltIcon,
  ClockIcon,
  ChartBarIcon,
}

export default function Solution() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Tres formas en que cambiamos eso
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Una plataforma que funciona donde otros no pueden llegar.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {SOLUTION_PILARS.map((pilar, index) => {
            const IconComponent = iconMap[pilar.icon as keyof typeof iconMap]
            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                  {IconComponent && (
                    <IconComponent className="h-12 w-12 text-primary" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {pilar.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {pilar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

