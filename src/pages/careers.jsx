import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  // const inputEl = useRef(null)
  // const [message, setMessage] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
  //   const res = await fetch(`/api/subscribe`, {
  //     body: JSON.stringify({
  //       email: inputEl.current.value,
  //       tags: ['careers']
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //   })

  //   const { error } = await res.json()

  //   if (error) {
  //     setMessage(error)
  //     return
  //   }

  //   inputEl.current.value = ''
  //   setMessage('You are now subscribed to the newsletter.')
  }
  return (
    <>
      <Head>
        <title>VersaMinds - Careers</title>
        <meta name="description" content="Online collaboration can be " />
      </Head>
      <Header />
      <Container className={'my-24'}>
        <div className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 className="inline sm:block">
            Wil je op de hoogte blijven van nieuwe vacatures?
          </h2>{' '}
          <p className="inline font-display font-normal sm:block">
            Abbonneer nu
          </p>
        </div>
        <form className="mt-10 max-w-md" onSubmit={subscribe}>
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              // ref={inputEl}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Uw mailadres"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schrijf in
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            Wij vinden uw privacy belangrijk. Lees onze{' '}
            <Link
              href="/privacy"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              privacy&nbsp;policy
            </Link>
            .
          </p>
        </form>
      </Container>
      <Footer />
    </>
  )
}
