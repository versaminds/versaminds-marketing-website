import Head from 'next/head'

import CallToActionServices from '@/components/CallToActionServices'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import WebDevelopment from '@/components/Services/WebDevelopment'

export default function Services() {
  return (
    <>
      <Head>
        <title>VersaMinds - Diensten</title>
        <meta
          name="description"
          content="Leer meer over de diensten van VersaMinds."
        />
        <meta name="keywords" content="VersaMinds, Product Overview, Community, Teams, Student, Free, Subscription, Collaboration, Team, Teamwork, Innovation" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VersaMinds" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.codecloud.live/services" />
        <meta property="og:title" content="VersaMinds - Product Overview" />
        <meta property="og:description" content="Learn about VersaMinds's Product offerings." />
        {/* <meta property="og:image" content="https://www.codecloud.live/images/og-image.jpg" /> */}
        <meta property="og:url" content="https://www.codecloud.live/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VersaMinds" />
      </Head>
      <Header />
      <main>
        <WebDevelopment />
        <CallToActionServices />
      </main>
      <Footer />
    </>
  )
}
