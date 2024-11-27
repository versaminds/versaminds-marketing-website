import { Container } from '@/components/Container'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const faqs = [
  {
    question: 'Wie kan er bij VersaMinds terecht?',
    answer:
      'VersaMinds services is een dienstverlener voor iedereen die op zoek is naar een professionele en betrouwbare partner voor web development, e-commerce, advies, consultancy, project management, automatisatie, training en workshops. Daarnaast bieden wij ook services aan om u te begeleiden bij het opzetten van een robuuste productieomgeving. Met onze ervaring in IT infrastructuur en DevOps kunnen wij u helpen met het opzetten van een veilige en schaalbare omgeving.',
  },
  {
    question: "Wat gaat dat kosten?",
    answer:
      '"IT is duur" is een veelgehoorde uitspraak. Bij VersaMinds services geloven we dat IT betaalbaar moet zijn voor iedereen. Daarom bieden wij verschillende formules aan, van een uurtarief tot een vaste prijs per project. Wij geloven in transparantie en duidelijkheid. Daarom maken wij graag een offerte op maat voor u.',
  },
  {
    question: 'Kunnen jullie ons ook adviseren bij het inrichten van onze IT-omgeving?',
    answer:
      'Absoluut! Wij hebben ervaring met het opzetten van IT-infrastructuren. Wij kunnen u adviseren bij het opzetten van een veilige en schaalbare omgeving. Wij werken samen met vertrouwde partners om u de beste hardware en software aan te bieden. Wij zorgen voor de installatie en configuratie van de hardware en software. Daarnaast kunnen wij u ook helpen bij het inrichten van een ergonomische werkplek.',
  },
  {
    question: 'Kunnen jullie ook hardware aanleveren?',
    answer:
      "Omdat wij u als klant volledig willen ontzorgen bieden wij ook hardware aan. Wij werken samen met vertrouwde partners om u de beste hardware aan te bieden. Wij zorgen voor de installatie en configuratie van de hardware zodat u zich kan focussen op uw core business.",
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-20"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Veelgestelde vragen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Nog andere vragen, aarzel dan niet om ons te{' '}
            <Link href="/contact">
              <span className="text-blue-500 hover:underline">
                contacteren
              </span>
            </Link>{' '}
            wij zullen u met veel plezier verder helpen.
          </p>
        </div>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </Container>
    </section>
  )
}
