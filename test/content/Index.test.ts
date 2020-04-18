import { findContent } from '~/content'

describe('content/index', () => {
  it('can find all the non-draft articles', () => {
    const content = findContent(true)
    content.articles.forEach((a) => {
      expect(a.filepath).toBeTruthy()
      expect(a.filename).toContain('.md')
      expect(a.slug).toBeTruthy()
      expect(a.readingTime).toBeGreaterThan(0)
      expect(a.meta).toBeTruthy()
      expect(a.meta.title).toBeTruthy()
      expect(a.meta.summary).toBeTruthy()
      expect(a.meta.author).toBeTruthy()
      expect(a.meta.tags.length).toBeGreaterThan(0)
      expect(a.meta.language).toBeTruthy()
      expect(a.meta.published).toBeInstanceOf(Date)
      expect(a.meta.draft).toBeDefined()
      expect(a.content).toBeTruthy()
    })
  })
})
