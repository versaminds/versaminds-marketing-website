import { RocketLaunchIcon, CodeBracketIcon, AcademicCapIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

export default function WebDevelopment() {
  const services = [
    {
      name: 'Web development & E-commerce',
      description:
        'Met een team van experts ontwikkelen wij uw website of webshop op maat. Wij zorgen voor een unieke en professionele uitstraling.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Advies, Consultancy & Project Management',
      description:
        'Wij begeleiden u van A tot Z bij uw project. Wij zorgen voor een duidelijke planning en communicatie.',
      icon: PresentationChartLineIcon,
    },
    {
      name: 'Automatisatie',
      description:
        'Wij automatiseren uw bedrijfsprocessen en zorgen voor een efficiëntere werking van uw bedrijf.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Training & Workshops',
      description:
        'Wij bieden trainingen en workshops aan op maat van uw bedrijf. Wij zorgen voor een heldere en praktische aanpak.',
      icon: AcademicCapIcon,
    },
  ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Laat ons samenwerken
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Onze diensten op maat van u of uw bedrijf
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wij bieden een breed scala aan diensten aan, van webontwikkeling tot
            totaalbegeleiding. Laat u ontzorgen door onze experts. Plan vrijblijvend een gesprek in en ontdek wat wij voor u kunnen betekenen.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <service.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
