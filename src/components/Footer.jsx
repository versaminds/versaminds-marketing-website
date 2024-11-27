import Link from 'next/link'
import { Container } from './Container'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useRef, useState } from 'react'

const navigation = {
  services: [
    { name: 'Web development & E-commerce', href: '/services#web-development' },
    { name: 'Advies, Consultancy & Project Management', href: '/services#consultancy' },
    { name: 'Automatisatie', href: '/services#automation' },
    { name: 'Training & Workshops', href: '/services#training' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    // { name: 'Documentation', href: '#' },
  ],
  company: [
    { name: 'Over', href: '/about' },
    { name: 'Partners', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/codecloud.live/',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/codecloud-live',
      icon: FaLinkedin,
    },
  ],
}

export function Footer() {
  const inputEl = useRef(null)
  const [message, setMessage] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: inputEl.current.value,
        tags: ['newsletter']
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error)
      return
    }

    inputEl.current.value = ''
    setMessage('You are now subscribed to the newsletter.')
  }
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Diensten
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-white hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Bedrijf
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-white hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-white hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="mt-10 xl:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Inschrijven voor nieuwsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Het laatste nieuws, artikelen en updates rechtstreeks in uw inbox.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md" onSubmit={subscribe}>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  ref={inputEl}
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-gray-800 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Uw mailadres"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Schrijf in
                  </button>
                </div>
              </form>
            </div> */}
          </div>
          <div className="mt-16 border-t border-gray-100/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-white md:order-1 md:mt-0">
              Copyright &copy; {new Date().getFullYear()} VersaMinds. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
