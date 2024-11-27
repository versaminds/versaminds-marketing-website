import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { Container } from '@/components/Container'
import analyse from '@/images/analyse.jpg'
import development from '@/images/development.jpg'
import Support from '@/images/support.jpg'
import { ArrowTrendingUpIcon, MagnifyingGlassIcon, UsersIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Analyse',
    summary: 'Inzicht in uw behoeften, doelen en uitdagingen.',
    description:
      'Samen analyseren we uw project en bepalen we de beste aanpak. We zorgen voor een duidelijk plan en een heldere communicatie. Samen kiezen we de beste strategie en de weg vooruit.',
    image: analyse,
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Ontwikkeling',
    summary: 'Samen bouwen we aan uw project. Met continue feedback.',
    description:
      'Wij ontwikkelen uw project op maat. We zorgen voor een professionele en authentieke uitstraling. We werken met de nieuwste technologieën en zorgen voor een efficiënte werking van uw project.',
    image: development,
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Ondersteuning',
    summary: 'We blijven u ondersteunen, ook na de oplevering.',
    description:
      'Ook na de oplevering van uw project kunt u op ons rekenen. We zorgen voor een duidelijke en praktische aanpak. We bieden trainingen, workshops en support op lange termijn. Wij ontzorgen u van uw ICT.',
    image: Support,
    icon: UsersIcon,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-70 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <div className="h-9 w-9 p-1 text-white">
          <feature.icon />
        </div>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function ProcessMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          {/* <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}

function ProcessDesktop() {
  return (
    // <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
    //   {({ selectedIndex }) => (
    //     <>
    //       <Tab.List className="grid grid-cols-3 gap-x-8">
    //         {features.map((feature, featureIndex) => (
    //           <Feature
    //             key={feature.name}
    //             feature={{
    //               ...feature,
    //               name: (
    //                 <Tab className="[&:not(:focus-visible)]:focus:outline-none">
    //                   <span className="absolute inset-0" />
    //                   {feature.name}
    //                 </Tab>
    //               ),
    //             }}
    //             isActive={featureIndex === selectedIndex}
    //             className="relative"
    //           />
    //         ))}
    //       </Tab.List>
    //     </>
    //   )}
    // </Tab.Group>
    <div className="hidden lg:mt-20 lg:block">
      <>
        <div className="grid grid-cols-3 gap-x-8">
          {features.map((feature, featureIndex) => (
            <Feature
              key={feature.name}
              isActive={ArrowTrendingUpIcon}
              feature={{
                ...feature,
                name: (
                  <div className="[&:not(:focus-visible)]:focus:outline-none">
                    <span className="absolute inset-0" />
                    {feature.name}
                  </div>
                ),
              }}
              className="relative"
            />
          ))}
        </div>
      </>
  </div>
  )
}

export function OurProcess() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Hoe gaan we te werk?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Bij VersaMinds begrijpen we dat elk project uniek is. Daarom werken we met u samen om een oplossing te vinden die bij u past. Onze aanpak is gebaseerd op drie pijlers: analyse, ontwikkeling en ondersteuning.
          </p>
        </div>
        <ProcessMobile />
        <ProcessDesktop />
      </Container>
    </section>
  )
}
