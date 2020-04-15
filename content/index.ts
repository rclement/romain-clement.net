import fs from 'fs'
import path from 'path'
import glob from 'glob'
import Markdownit from 'markdown-it'
import frontmatter from 'gray-matter'
import readingTime from 'reading-time'

export interface ContentItemMeta {
  title: string
  summary: string
  author: string
  tags: string[]
  language: string
  published: Date
  draft: boolean
}

export interface ContentItem {
  filepath: string
  filename: string
  slug: string
  readingTime: number
  meta: ContentItemMeta
  content: string
}

export interface Content {
  [key: string]: ContentItem[]
}

function loadContentItem(absfilepath: string): ContentItem {
  const filepath = path.relative(path.resolve(__dirname, '..'), absfilepath)
  const filename = path.basename(absfilepath)
  const slug = path.basename(absfilepath, path.extname(absfilepath))

  const fileContent = fs.readFileSync(absfilepath, 'utf-8')
  const matter = frontmatter(fileContent)
  const meta = matter.data

  const md = new Markdownit()
  const content = md.render(matter.content)

  const rt = Math.ceil(readingTime(matter.content).minutes)

  return {
    filepath,
    filename,
    slug,
    readingTime: rt,
    meta: {
      title: meta.title || '',
      summary: meta.summary || '',
      author: meta.author || '',
      tags: meta.tags || [],
      language: meta.language || '',
      published: meta.published || '',
      draft: meta.draft || false,
    },
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
    .sort((a, b) => +b.meta.published - +a.meta.published)
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
