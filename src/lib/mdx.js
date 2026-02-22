const articleModules = import.meta.glob('../pages/blog/*/page.mdx', {
  eager: true,
})

const caseStudyModules = import.meta.glob('../pages/work/*/page.mdx', {
  eager: true,
})

export function loadArticles() {
  return Object.entries(articleModules)
    .map(([path, mod]) => ({
      ...mod.article,
      href: '/blog/' + path.match(/blog\/(.+)\/page\.mdx/)[1],
    }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function loadCaseStudies() {
  return Object.entries(caseStudyModules)
    .map(([path, mod]) => ({
      ...mod.caseStudy,
      href: '/work/' + path.match(/work\/(.+)\/page\.mdx/)[1],
    }))
    .sort((a, b) => b.date.localeCompare(a.date))
}
