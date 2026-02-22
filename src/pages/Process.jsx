import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Audit() {
  return (
    <Section title="Audit" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start by getting under the skin of your business. We analyse your
          current online presence, identify the{' '}
          <strong className="font-semibold text-neutral-950">keywords</strong>{' '}
          your customers are actually searching for, and map out the competitive
          landscape.
        </p>
        <p>
          Our AI tools scan thousands of search results, competitor sites, and
          industry topics to build a complete picture of your{' '}
          <strong className="font-semibold text-neutral-950">
            organic opportunity
          </strong>
          . No guesswork — just data.
        </p>
        <p>
          You'll receive a clear brief outlining what we'll build, what we'll
          target, and what results you can reasonably expect in the first 90
          days.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What we analyse
      </h3>
      <TagList className="mt-4">
        <TagListItem>Keyword research</TagListItem>
        <TagListItem>Competitor mapping</TagListItem>
        <TagListItem>Content gaps</TagListItem>
        <TagListItem>Technical SEO health</TagListItem>
        <TagListItem>Local search presence</TagListItem>
        <TagListItem>Audience intent analysis</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the audit, we deploy your custom AI growth system. This
          includes the content pipelines, automation workflows, and AI agents
          tailored specifically to your business and{' '}
          <strong className="font-semibold text-neutral-950">industry</strong>.
        </p>
        <p>
          We connect your systems, configure the tools, and test everything
          before it goes live. Our AI agents are trained on your brand voice, your
          target customers, and your{' '}
          <strong className="font-semibold text-neutral-950">
            competitive landscape
          </strong>
          .
        </p>
        <p>
          This phase typically takes two weeks. At the end of it, you have a
          fully operational growth engine running in the background — and you
          haven't had to write a word.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Sarah T.', role: 'Owner, Peak Trades Ltd' }}
        className="mt-12"
      >
        I was sceptical anything automated could sound like us. Agent Studyo
        proved me wrong — the content is genuinely better than what we were
        producing ourselves.
      </Blockquote>
    </Section>
  )
}

function Grow() {
  return (
    <Section title="Grow" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the system is live, it runs{' '}
          <strong className="font-semibold text-neutral-950">24/7</strong>.
          Content is published on schedule. Keywords are tracked. Rankings
          improve. Traffic compounds.
        </p>
        <p>
          We monitor everything and refine the system each month based on what's
          performing. As your rankings improve, we expand into new keyword
          clusters and{' '}
          <strong className="font-semibold text-neutral-950">
            content formats
          </strong>{' '}
          to accelerate growth.
        </p>
        <p>
          You receive a clear monthly report showing what changed, what's
          ranking, and what's coming next. No surprises, no agency fluff — just
          results you can see.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ongoing deliverables
      </h3>
      <List className="mt-8">
        <ListItem title="Continuous publishing">
          Fresh content targeting your most valuable keywords, published
          consistently every week.
        </ListItem>
        <ListItem title="Rank tracking">
          Live dashboard showing your keyword positions, traffic trends, and
          month-on-month growth.
        </ListItem>
        <ListItem title="Monthly strategy call">
          A short call each month to review results and align on what we focus
          on next.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our principles"
        title="We measure in results, not activity"
      >
        <p>
          Organic growth takes time. But with the right systems, it compounds
          exponentially. These are the principles we apply to every engagement.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Systems thinking">
            We don't chase quick wins. We build infrastructure that grows
            stronger the longer it runs.
          </GridListItem>
          <GridListItem title="Radical transparency">
            You see everything — what we publish, what we're targeting, what's
            ranking. No black boxes.
          </GridListItem>
          <GridListItem title="Brand-first AI">
            Our AI is trained on your voice and your market. The content sounds
            like you, not a robot.
          </GridListItem>
          <GridListItem title="Data-driven">
            Every decision is backed by search data, competitive analysis, and
            real performance metrics.
          </GridListItem>
          <GridListItem title="Compounding focus">
            We prioritise strategies that build on each other over time, creating
            exponential rather than linear growth.
          </GridListItem>
          <GridListItem title="Small business expertise">
            We only work with SMEs. We understand your constraints, your
            customers, and your competitive landscape.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we turn AI into growth">
        <p>
          Three phases. Fully managed. Compounding results every month.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Audit />
        <Build />
        <Grow />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
