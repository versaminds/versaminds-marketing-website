import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Script from 'next/script'
import { Technologies } from '@/components/Technologies'
import { OurProcess } from '@/components/OurProcess'
import Quote from '@/components/Quote'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EQJ9LTX363"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EQJ9LTX363');
        `}
      </Script>
      <Head>
        <title>VersaMinds Services - Uw IT partner</title>
        <meta name="VersaMinds" content="Uw IT partner." />
      </Head>
      <main>
        <Header />
        <Hero />
        <Technologies />
        <OurProcess />
        <Quote />
        <Stats />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
