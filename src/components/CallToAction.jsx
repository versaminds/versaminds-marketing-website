import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="py-18 relative overflow-hidden bg-gray-900 rounded-br-full"
    >
      <Container className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Waar wacht u nog op?
            <br />
            Plan gesprek in.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button href="/contact" color="white">
              Inplannen
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contacteer ons <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
