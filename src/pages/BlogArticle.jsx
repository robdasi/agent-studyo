import { useParams } from 'react-router-dom'
import BlogArticleWrapper from './blog/wrapper'

const blogModules = import.meta.glob('./blog/*/page.mdx', { eager: true })

export default function BlogArticle() {
  let { slug } = useParams()
  let module = blogModules[`./blog/${slug}/page.mdx`]

  if (!module) {
    return (
      <div className="mt-24 text-center sm:mt-32 lg:mt-40">
        <p className="text-neutral-600">Article not found.</p>
      </div>
    )
  }

  let Content = module.default
  let { article } = module

  return (
    <BlogArticleWrapper article={article} slug={slug}>
      <Content />
    </BlogArticleWrapper>
  )
}
