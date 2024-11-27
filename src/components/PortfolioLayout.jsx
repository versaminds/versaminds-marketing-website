import Head from 'next/head'
import { useRouter } from 'next/router'
import { PageIntro } from '@/components/PageIntro'
import { Container } from '@/components/Container'
import { TagList, TagListItem } from '@/components/TagList'
import { StatList, StatListItem } from '@/components/StatList'
import { Testimonial } from '@/components/Testimonial'
import Image from 'next/image'
import { Header } from './Header'
import { Footer } from './Footer'
import { Prose } from './Prose'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PortfolioLayout({ children, meta, isRssFeed = false }) {
  let router = useRouter()
  const previousPathname = '/portfolio'

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Ons werk`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Header />
      <Container className="my-10 lg:mt-24">
        <div className="xl:relative">
          <div className="mx-auto max-w-7xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article className="mt-24 sm:mt-32 lg:mt-40">
              <header>
                <PageIntro eyebrow="Project" title={meta.title} centered>
                  <p>{meta.description}</p>
                </PageIntro>

                <div>
                  <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                    <Container>
                      <div className="mx-auto max-w-5xl">
                        <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                          <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-semibold">Client</dt>
                            <dd>{meta.client}</dd>
                          </div>
                          <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-semibold">Year</dt>
                            <dd>
                              <time dateTime={meta.date.split('-')[0]}>
                                {meta.date.split('-')[0]}
                              </time>
                            </dd>
                          </div>
                          <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-semibold">Service</dt>
                            <dd>{meta.service}</dd>
                          </div>
                        </dl>
                      </div>
                    </Container>
                  </div>

                  {/* <div className="border-y border-neutral-200 bg-neutral-100">
                    <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                      <Image
                        {...meta.image}
                        quality={90}
                        className="w-full"
                        sizes="(min-width: 1216px) 76rem, 100vw"
                        priority
                      />
                    </div>
                  </div> */}
                </div>
              </header>

              <Prose className="mt-8">
                {children}

                {meta.testimonial && (
                  <Testimonial
                    className="mt-24 sm:mt-32 lg:mt-40"
                    client={meta.testimonial.client}
                  >
                    {meta.testimonial.content}
                  </Testimonial>
                )}

                <TagList>
                  {meta.tags.map((tag, index) => (
                    <TagListItem key={index}>{tag}</TagListItem>
                  ))}
                </TagList>

                <StatList>
                  {meta.stats.map((stat, index) => (
                    <StatListItem key={index} {...stat} />
                  ))}
                </StatList>
              </Prose>
            </article>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
