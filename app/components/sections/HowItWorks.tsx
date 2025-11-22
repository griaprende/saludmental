import { HOW_IT_WORKS } from '@/app/lib/constants'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-background-alternate">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Acceso a ayuda profesional en 3 pasos simples
          </h2>
        </div>
        <div className="space-y-12">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={index} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

