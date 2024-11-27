import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Team from '@/components/Team'
import Company from '@/components/Company'

export default function About() {
  return (
    <>
      <Head>
        <title>VersaMinds - About</title>
        <meta name="description" content="Online collaboration can be " />
      </Head>
      <Header />
      <main>
        <Company></Company>
      </main>
      <Footer />
    </>
  )
}
