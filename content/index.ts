import fs from 'fs'
import path from 'path'
import glob from 'glob'
import Markdownit from 'markdown-it'
import frontmatter from 'gray-matter'
import readingTime from 'reading-time'

export interface ContentItem {
  filename: string
  slug: string
  readingTime: number
  meta: { [key: string]: any }
  content: string
}

export interface Content {
  [key: string]: ContentItem[]
}

function loadContentItem(filepath: string): ContentItem {
  const filename = path.basename(filepath)
  const slug = path.basename(filepath, path.extname(filepath))

  const fileContent = fs.readFileSync(filepath, 'utf-8')
  const matter = frontmatter(fileContent)
  const meta = matter.data

  const md = new Markdownit()
  const content = md.render(matter.content)

  const rt = Math.ceil(readingTime(matter.content).minutes)

  return {
    filename,
    slug,
    readingTime: rt,
    meta,
    content,
  }
}

function findContentItems(basepath: string): ContentItem[] {
  const searchPattern = `${basepath}/**/*.md`

  return glob
    .sync(searchPattern)
    .reduce((obj: ContentItem[], filepath: string) => {
      const item = loadContentItem(filepath)
      if (!item.meta.draft) {
        obj.push(item)
      }
      return obj
    }, [])
    .sort((a, b) => +new Date(b.meta.published) - +new Date(a.meta.published))
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
