import glob from 'fast-glob'
import * as path from 'path'

async function importPortfolio(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/portfolio/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}


export async function getAllPortfolio() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/portfolio'),
  })

  let portfolios = await Promise.all(articleFilenames.map(importPortfolio))

  return portfolios.sort((a, z) => new Date(z.date) - new Date(a.date))
}
