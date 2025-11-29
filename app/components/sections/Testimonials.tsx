import { TESTIMONIALS } from '@/app/lib/constants'

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <p className="text-base italic text-text-secondary mb-4">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="text-sm font-bold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

