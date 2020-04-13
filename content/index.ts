import fs from 'fs'
import path from 'path'
import glob from 'glob'
import Markdownit from 'markdown-it'
import frontmatter from 'gray-matter'

export interface ContentItem {
  filepath: string
  filename: string
  slug: string
  meta: { [key: string]: any }
  content: string
}

export interface ContentCategory {
  [key: string]: ContentItem
}

export interface Content {
  [key: string]: ContentCategory
}

function loadContentItem(filepath: string): ContentItem {
  const filename = path.basename(filepath, path.extname(filepath))

  const fileContent = fs.readFileSync(filepath, 'utf-8')
  const matter = frontmatter(fileContent)
  const meta = matter.data

  const md = new Markdownit()
  const content = md.render(matter.content)

  // const published = new Date(meta.published)
  // const year = published.getUTCFullYear().toString()
  // const month = (published.getUTCMonth() + 1).toString().padStart(2, '0')
  // const slug = `${year}/${month}/${filename}`
  const slug = `${filename}`

  return {
    filepath,
    filename,
    slug,
    meta,
    content,
  }
}

function findContentItems(basepath: string): ContentCategory {
  const searchPattern = `${basepath}/**/*.md`

  return glob
    .sync(searchPattern)
    .reduce((obj: ContentCategory, filepath: string) => {
      const item = loadContentItem(filepath)
      obj[item.slug] = item
      return obj
    }, {})
}

export function findContent(): Content {
  const basepath = path.resolve(__dirname)
  return fs.readdirSync(basepath).reduce((obj: Content, dir: string) => {
    const itemsPath = path.resolve(__dirname, dir)
    if (fs.lstatSync(itemsPath).isDirectory()) {
      const items = findContentItems(itemsPath)
      obj[dir] = items
    }
    return obj
  }, {})
}
