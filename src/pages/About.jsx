import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageFounder from '@/images/team/leslie-alexander.jpg'
import { loadArticles } from '@/lib/mdx'

const team = [
  {
    title: 'Founder',
    people: [
      {
        name: 'Robin da Silva Laires',
        role: 'Founder',
        image: { src: imageFounder },
      },
    ],
  },
]

function Approach() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our approach"
        title="Systems over effort. Compounding over campaigns."
        invert
      >
        <p>
          We don't believe in one-off tactics or short-term bursts. We build
          infrastructure that works while you sleep.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="AI-native" invert>
            Every system we build is designed from the ground up to leverage AI
            — not bolt it on as an afterthought.
          </GridListItem>
          <GridListItem title="Fully managed" invert>
            We don't hand you a tool and walk away. We run the system, monitor
            performance, and optimise continuously.
          </GridListItem>
          <GridListItem title="Transparent" invert>
            You always know exactly what we're doing and why. Clear reporting,
            plain English — no agency jargon.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <img
                            alt=""
                            src={person.image.src}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export default function About() {
  let blogArticles = loadArticles().slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Built for small businesses. Powered by AI.">
        <p>
          Agent Studyo exists because small businesses deserve the same
          sophisticated growth systems that enterprise brands take for granted.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I spent a decade building growth systems for companies across the
            UK — watching small business owners struggle to compete online, not
            because they lacked a great product, but because they lacked the
            infrastructure to be found.
          </p>
          <p>
            Agent Studyo is the answer to that problem. We deploy custom AI
            agents that do the research, create the content, and build the
            organic presence your business deserves — completely managed, so you
            can focus on what you do best.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3x" label="Average traffic increase in 90 days" />
          <StatListItem value="£0" label="Ad spend required" />
          <StatListItem value="24/7" label="AI systems running for you" />
        </StatList>
      </Container>

      <Approach />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Insights on AI, organic growth, and what's actually working for UK small businesses right now."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
