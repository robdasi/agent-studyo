import { useParams } from 'react-router-dom'
import WorkArticleWrapper from './work/wrapper'

const workModules = import.meta.glob('./work/*/page.mdx', { eager: true })

export default function WorkArticle() {
  let { slug } = useParams()
  let module = workModules[`./work/${slug}/page.mdx`]

  if (!module) {
    return (
      <div className="mt-24 text-center sm:mt-32 lg:mt-40">
        <p className="text-neutral-600">Case study not found.</p>
      </div>
    )
  }

  let Content = module.default
  let { caseStudy } = module

  return (
    <WorkArticleWrapper caseStudy={caseStudy} slug={slug}>
      <Content />
    </WorkArticleWrapper>
  )
}
