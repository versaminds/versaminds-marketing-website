import Head from 'next/head'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllPortfolio } from '@/lib/getAllPortfolio'
import Image from 'next/image'
import Link from 'next/link'

function Portfolio({ article }) {
  return (
    <div key={article.client}>
      <article>
        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
          <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
            <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
              {article.logo && (
                <Image
                  src={article.logo}
                  alt=""
                  className="w-1/2 flex-none"
                  unoptimized
                />
              )}
              <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                {article.client}
              </h3>
            </div>
            <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
              <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                {article.service}
              </p>
              <p className="text-sm text-neutral-950 lg:mt-2">
                <time dateTime={article.date}>{article.date}</time>
              </p>
            </div>
          </div>
          <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
            <p className="font-display text-4xl font-medium text-neutral-950">
              <Link href={`/portfolio/${article.slug}`}>{article.title}</Link>
            </p>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              {article.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex">
              <Button
                color="main"
                href={`/portfolio/${article.slug}`}
                aria-label={`Read case study: ${article.client}`}
              >
                Lees meer
              </Button>
            </div>
            {article.testimonial && (
              <Blockquote author={article.testimonial.author} className="mt-12">
                {article.testimonial.content}
              </Blockquote>
            )}
          </div>
        </Border>
      </article>
    </div>
  )
}

export default function PortfoliosIndex({ portfolios }) {
  return (
    <>
      <Head>
        <title>VersaMinds - Portfolio</title>
        <meta
          name="description"
          content="Ontdek onze projecten en verwezenlijkingen."
        />
      </Head>
      <Header />
      <SimpleLayout
        title="Ontdek onze projecten en verwezenlijkingen"
        intro="Een overzicht van onze realisaties."
      >
        <div className="mb-20 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {portfolios.map((article) => (
              <Portfolio key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
      <Footer className="mt-8"></Footer>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      portfolios: (await getAllPortfolio()).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}
