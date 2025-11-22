import { STATS } from '@/app/lib/constants'

export default function Stats() {
  return (
    <section className="bg-background-alternate py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            74.7% de personas en Latinoamérica no reciben tratamiento de salud mental
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Barreras geográficas, económicas y de disponibilidad impiden que millones accedan a la ayuda que necesitan.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-7xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-base font-medium text-text-secondary mb-2">
                {stat.label}
              </div>
              <div className="text-lg text-text-primary">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

