import faker from 'faker'

faker.seed(1234)

export function generateArticles(num: number = 1) {
  const articles: { [key: string]: any } = {}

  for (let i = 0; i < num; ++i) {
    const slug = faker.lorem.slug()
    const filename = faker.system.commonFileName('md')
    const art = {
      filepath: filename,
      filename,
      slug,
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
    articles[slug] = art
  }

  return articles
}
