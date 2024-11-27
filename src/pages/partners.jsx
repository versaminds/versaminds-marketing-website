import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import StartItLogo from '@/images/start-it-kbc.png'


export default function Partners() {

  return (
    <>
      <Head>
        <title>VersaMinds - Partners</title>
        <meta name="description" content="Online collaboration can be " />
      </Head>
      <Header />
      <Container className={'my-40'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
            Onze partners
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <Image
                className="mx-auto"
                src={StartItLogo}
                alt="Start it Accelerator | @KBC"
              />
          </div>
        </div>
      </div>
      </Container>
      <Footer />
    </>
  )
}
