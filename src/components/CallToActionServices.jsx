import Image from "next/image";
import community from '@/images/screenshots/community.png'
import Link from "next/link";

export default function CallToActionServices() {
  return (
    <>
      <div className="relative my-12">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-gradient-to-r from-cc-orange-300 to-blue-400 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Klaar om samen te werken?</span>
                  <span className="block text-black">Contacteer ons vandaag.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-orange-50">
                  Benieuwd naar wat we voor u kunnen betekenen? Neem vrijblijvend contact op en ontdek hoe we u kunnen helpen.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-md border border-transparent py-3 px-6 text-base font-medium text-gray-900 bg-white hover:bg-gray-100 shadow"
                >
                  Contacteer ons
                </Link>
              </div>
            </div>
            <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <Image
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={community}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}