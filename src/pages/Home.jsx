import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Retail & E-commerce', logoPhobiaLight],
  ['Professional Services', logoFamilyFund],
  ['Trades & Construction', logoUnseal],
  ['Health & Wellness', logoMailSmirk],
  ['Hospitality', logoHomeWork],
  ['Education', logoGreenLife],
  ['Legal & Finance', logoBrightPath],
  ['Tech Startups', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Driving growth across every sector
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <img src={logo} alt={client} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Real results for real businesses"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We've helped UK small businesses compound their organic reach month
          after month — without hiring a single extra person.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link to={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Pricing() {
  const deliverables = [
    'Website audit',
    'Competitor research',
    'Programmatic SEO',
    'Content strategy & writing',
    'Backlink outreach',
    'Google Search Console & Analytics',
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-y-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-display text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                  Pricing
                </p>
                <p className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
                  £1,750
                  <span className="text-2xl font-normal text-neutral-400">
                    /month
                  </span>
                </p>
                <p className="mt-4 text-base text-neutral-400">
                  One flat fee. No setup costs. Cancel anytime.
                </p>
                <div className="mt-8">
                  <Button href="https://cal.com/robin-laires" invert>
                    Book a call
                  </Button>
                </div>
              </div>
              <ul className="space-y-4 sm:pl-16">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-x-3 text-base text-white">
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="h-4 w-4 flex-none fill-neutral-400"
                    >
                      <path d="M6.5 11.5 3 8l1-1 2.5 2.5 5-5 1 1z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

const competitors = [
  {
    name: 'Hire in-house',
    cost: '£4,000+/mo',
    points: [
      'One person covering everything',
      'Months to hire and onboard',
      'Knowledge walks out when they do',
      'No AI infrastructure',
    ],
    highlight: false,
  },
  {
    name: 'Agency',
    cost: '£2,000–5,000/mo',
    points: [
      'Juniors doing the work',
      'Templates, not strategy',
      'Their tools, their process',
      'You own nothing when you leave',
    ],
    highlight: false,
  },
  {
    name: 'Agent Studyo',
    cost: '£1,750/mo',
    points: [
      'AI pipeline built for your business',
      'Running in weeks, not months',
      'Your content, your rankings, your channel',
      'Founded and operated by a developer',
    ],
    highlight: true,
  },
]

function Competitors() {
  return (
    <>
      <SectionIntro
        title="Most agencies sell you the same thing."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Junior writers. Recycled templates. Monthly reports that don't move
          the needle. There's a better option.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {competitors.map((col) => (
            <FadeIn key={col.name}>
              <div
                className={`rounded-3xl p-8 ring-1 ${
                  col.highlight
                    ? 'bg-neutral-950 ring-neutral-950'
                    : 'bg-white ring-neutral-950/5'
                }`}
              >
                <p
                  className={`font-display text-sm font-semibold tracking-wider uppercase ${
                    col.highlight ? 'text-neutral-400' : 'text-neutral-400'
                  }`}
                >
                  {col.name}
                </p>
                <p
                  className={`mt-3 font-display text-3xl font-semibold ${
                    col.highlight ? 'text-white' : 'text-neutral-950'
                  }`}
                >
                  {col.cost}
                </p>
                <ul className="mt-8 space-y-3">
                  {col.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-x-3 text-sm ${
                        col.highlight ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className={`mt-0.5 h-4 w-4 flex-none ${
                          col.highlight ? 'fill-neutral-400' : 'fill-neutral-300'
                        }`}
                      >
                        <path d="M6.5 11.5 3 8l1-1 2.5 2.5 5-5 1 1z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="What's included"
        title="Everything to get your organic channel running."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Built on Nest Content — an AI pipeline for competitive research,
          content strategy, writing and SEO. Operated for you, end to end.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Website audit">
              We start by finding exactly what's holding your site back —
              technical issues, missing keywords, thin content, and gaps
              competitors are already exploiting.
            </ListItem>
            <ListItem title="Competitor research">
              We map exactly what your competitors rank for, where their traffic
              comes from, and what's working for them — so we can beat them at
              it.
            </ListItem>
            <ListItem title="Programmatic SEO">
              AI-generated pages targeting the specific searches your customers
              make. Built at scale, ranked on Google.
            </ListItem>
            <ListItem title="Content strategy & writing">
              A rolling programme of articles written to rank and convert —
              researched, written and published directly to your site.
            </ListItem>
            <ListItem title="Backlink outreach">
              We build links from relevant sites in your industry to increase
              your domain authority and accelerate rankings.
            </ListItem>
            <ListItem title="Google Search Console & Analytics">
              Full visibility on what's ranking, what's driving traffic, and
              what's converting. Monthly reporting, no jargon.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default function Home() {
  let caseStudies = loadCaseStudies().slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            AI-powered growth. Fully managed.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We run your organic channel — competitor research, SEO, content and
            backlinks. Every month, compounding.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Southfield Solicitors', logo: logoPhobiaDark }}
      >
        Within three months, Agent Studyo had us ranking for terms we'd been
        chasing for years. The leads started coming in on their own — I didn't
        have to do a thing.
      </Testimonial>

      <Competitors />

      <Services />

      <Pricing />

      <ContactSection />
    </>
  )
}
