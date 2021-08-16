export interface Article {
  title: string
  summary: string
  author: string
  tags: string[]
  language: string
  published: Date
  draft: boolean
}

export interface Book {
  title: string
  authors: string[]
  language: string
  published: Date
  publisher: string
  isbn: string
  url: string
  cover: string
}
