import { BENEFITS } from '@/app/lib/constants'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Benefits() {
  return (
    <section className="py-16 bg-background-alternate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Todo lo que necesitas para tu bienestar mental
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-lg text-text-primary">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

