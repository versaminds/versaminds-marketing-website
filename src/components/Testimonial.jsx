import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'

export function Testimonial({
  children,
  client,
  className,
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-8 rounded-xl',
        className,
      )}
    >
      <Container>
        <div>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            {client.logo && (
            <figcaption className="mt-10">
              <Image src={client.logo} alt={client.name} unoptimized />
            </figcaption>)}
            {client.author && (
              <div className='mt-10'>
                <p className="font-display text-neutral-950 font-semibold">
                  {client.name}
                </p>
                <p className="text-neutral-600">{client.author}</p>
              </div>
            )}
          </figure>
        </div>
      </Container>
    </div>
  )
}
