import faker from 'faker'
import { ContentItem } from '~/content'

faker.seed(1234)

export function generateArticles(num: number = 1) {
  const articles: ContentItem[] = []

  for (let i = 0; i < num; ++i) {
    const slug = faker.lorem.slug()
    const art = {
      filename: faker.system.commonFileName('md'),
      slug,
      readingTime: faker.random.number(10),
      meta: {
        title: faker.lorem.sentence(),
        summary: faker.lorem.sentence(),
        tags: [
          faker.company.bsBuzz(),
          faker.company.bsBuzz(),
          faker.company.bsBuzz(),
        ],
        language: 'en',
        published: faker.date.past().toISOString(),
        draft: false,
      },
      content: `<p>${faker.lorem.paragraph()}</p>
      <h2>${faker.lorem.sentence()}</h2>
      <p>${faker.lorem.paragraph()}</p>`,
    }
    articles.push(art)
  }

  return articles
}
