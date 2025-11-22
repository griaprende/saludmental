import Button from '../ui/Button'
import { CTA_FINAL } from '@/app/lib/constants'

export default function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {CTA_FINAL.headline}
        </h2>
        <p className="text-lg text-white/90 mb-8">
          {CTA_FINAL.subheadline}
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
          {CTA_FINAL.cta}
        </Button>
      </div>
    </section>
  )
}

