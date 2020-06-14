import Vue from 'vue'
import VueMeta from 'vue-meta'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import { Context } from '@nuxt/types'
import Buefy from 'buefy'
import faker from 'faker'
import ArticlesSlug from '~/pages/articles/_slug.vue'
import {
  NuxtContentStub,
  generateArticles,
  mockNuxtContent,
} from '~/test/utils'

function createData(article: object) {
  return () => ({
    article,
  })
}

function createWrapper(
  component: Vue.VueConstructor<Vue>,
  optionalData?: () => object
) {
  const localVue = createLocalVue()
  localVue.use(VueMeta, { keyName: 'head' })
  localVue.use(Buefy)

  const mocks = {
    $t: (msg: string) => msg,
    $d: (msg: Date) => msg,
    localePath: (path: string) => path,
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
    NuxtContent: NuxtContentStub,
    i18n: true,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
    data: optionalData,
  })
}

describe('pages/articles/slug', () => {
  test('can display an article', () => {
    const articles = generateArticles(1)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)

    const title = wrapper.find('p.title')
    expect(title.text()).toBe(article.title)

    const tags = wrapper.findAll('.tag > span')
    article.tags.forEach((tag: string, idx: number) => {
      expect(tags.at(idx).text()).toBe(tag)
    })

    const content = wrapper.find('div.content > span')
    expect(content.html()).toBe(`<span>${article.body}</span>`)
  })

  test('can get a valid article from asyncdata', async () => {
    const articles = generateArticles(2)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)

    if (wrapper.vm.$options.asyncData) {
      const context = {} as Context
      context.$content = mockNuxtContent(articles)
      context.params = { slug: article.slug }

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeDefined()

      const dataObj = data as { article: object }
      expect(dataObj.article).toBe(article)
    }
  })

  test('return an error with an invalid slug', async () => {
    const articles = generateArticles(2)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)

    if (wrapper.vm.$options.asyncData) {
      const context = {} as Context
      context.$content = mockNuxtContent(articles)
      context.params = { slug: faker.lorem.slug() }
      context.error = jest.fn()

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeUndefined()

      expect(context.error).toHaveBeenCalledTimes(1)
    }
  })

  test('return proper meta tags', () => {
    const articles = generateArticles(1)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)

    const head = wrapper.vm.$meta().refresh().metaInfo
    expect(head.title).toBe(article.title)
    expect(head.meta).toBeDefined()
    expect(head.meta?.find((v) => v.name === 'description')?.content).toBe(
      article.summary
    )
    expect(head.meta?.find((v) => v.name === 'keywords')?.content).toBe(
      article.tags.join(',')
    )
    expect(head.meta?.find((v) => v.name === 'og:title')?.content).toBe(
      article.title
    )
    expect(head.meta?.find((v) => v.name === 'og:description')?.content).toBe(
      article.summary
    )
    expect(head.meta?.find((v) => v.name === 'og:type')?.content).toBe(
      'article'
    )
    expect(
      head.meta?.find((v) => v.name === 'article:published_time')?.content
    ).toBe(article.published.toISOString().split('T')[0])
    expect(head.meta?.find((v) => v.name === 'article:author')?.content).toBe(
      `common.feeds.authors.${article.author}.name`
    )
    expect(
      head.meta?.filter((v) => v.name === 'article:tag').map((t) => t.content)
    ).toEqual(expect.arrayContaining(article.tags))
  })
})
