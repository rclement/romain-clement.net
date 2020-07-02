import Vue from 'vue'
import faker from 'faker'
import { Article } from '~/content'

faker.seed(1234)

export type ArticleContent = Article & {
  slug: string
  readingTime: number
  body: object[] | string
}

export function generateArticles(num: number = 1): ArticleContent[] {
  const articles: ArticleContent[] = []

  for (let i = 0; i < num; ++i) {
    articles.push({
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      summary: faker.lorem.sentence(),
      author: faker.internet.userName(),
      tags: [
        faker.company.bsBuzz(),
        faker.company.bsBuzz(),
        faker.company.bsBuzz(),
      ],
      language: 'en',
      published: faker.date.past(),
      draft: false,
      readingTime: faker.random.number(10),
      body: `<p>${faker.lorem.paragraph()}</p>
      <h2>${faker.lorem.sentence()}</h2>
      <p>${faker.lorem.paragraph()}</p>`,
    })
  }

  return articles
}

export function mockNuxtContent(articles: any[]) {
  type Obj = {
    only: any
    sortBy: any
    where: any
    search: any
    surround: any
    limit: any
    skip: any
    without: any
    fetch: any
  }

  return jest.fn((...args: string[]) => {
    let fetched = articles

    if (args.length === 2) {
      const slug = args[1]
      const found = articles.filter((a) => a.slug === slug)
      if (found.length === 0) {
        throw new Error(`${slug} not found`)
      } else if (found.length === 1) {
        fetched = found[0]
      } else {
        fetched = found
      }
    }

    const generateObj = (): Obj => ({
      only: jest.fn(() => generateObj()),
      sortBy: jest.fn(() => generateObj()),
      where: jest.fn(() => generateObj()),
      search: jest.fn(() => generateObj()),
      surround: jest.fn(() => generateObj()),
      limit: jest.fn(() => generateObj()),
      skip: jest.fn(() => generateObj()),
      without: jest.fn(() => generateObj()),
      fetch: jest.fn(() => fetched),
    })

    return generateObj()
  })
}

export const NuxtContentStub = Vue.extend({
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  template: '<span v-html="document.body"></span>',
})
