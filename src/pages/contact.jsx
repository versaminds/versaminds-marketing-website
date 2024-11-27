import Head from 'next/head'

import ContactPage from '@/components/ContactPage'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Contact() {
  return (
    <>
      <Head>
        <title>VersaMinds - Contact</title>
        <meta name="description" content="VersaMinds contactformulier." />
      </Head>
      <Header />
      <ContactPage />
      <Footer />
    </>
  )
}
