import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import { Context } from '@nuxt/types'
import Buefy from 'buefy'
import flushPromises from 'flush-promises'
import Articles from '~/pages/articles/index.vue'
import {
  ArticleContent,
  NuxtContentStub,
  generateArticles,
  mockNuxtContent,
} from '~/test/utils'

function createData(articles: ArticleContent[]) {
  const art = articles.map((a) => {
    a.published = new Date(a.published)
    return a
  })

  const tags = art.reduce((obj, a) => {
    a.tags.forEach((t) => {
      obj.add(t)
    })
    return obj
  }, new Set<string>())

  return () => ({
    articles: art,
    tags: Array.from(tags),
    shortlistTags: Array.from(tags),
  })
}

function createWrapper(
  component: Vue.VueConstructor<Vue>,
  optionalData?: () => object
) {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const mocks = {
    $t: (msg: string) => msg,
    $d: (msg: Date) => msg,
    localePath: (path: string) => path,
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
    NuxtContent: NuxtContentStub,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
    data: optionalData,
  })
}

describe('pages/articles', () => {
  test('is empty if no articles', () => {
    const articles = generateArticles(0)
    const wrapperData = createData(articles)
    const wrapper = createWrapper(Articles, wrapperData)
    expect(() => wrapper.get('article')).toThrow()
  })

  test('can display some articles', () => {
    const articles = generateArticles(3)
    const wrapperData = createData(articles)
    const wrapper = createWrapper(Articles, wrapperData)

    articles.forEach((article) => {
      const articleComp = wrapper.get(`article[data-slug="${article.slug}"]`)

      const title = articleComp.get('.content > p > strong > a')
      expect(title.text()).toBe(article.title)

      const published = articleComp.get('.content > p > small')
      expect(published.text()).toBe(article.published.toString())

      const summary = articleComp.get('.content > p + p')
      expect(summary.text()).toBe(article.summary)

      const tags = articleComp.findAll('.content > .tags > .tag > span')
      article.tags.forEach((tag: string, idx: number) => {
        expect(tags.at(idx).text()).toBe(tag)
      })
    })
  })

  test('can hide draft articles', () => {
    const articles = generateArticles(3)
    articles[0].draft = true
    const wrapperData = createData(articles)
    const wrapper = createWrapper(Articles, wrapperData)

    articles.forEach((article) => {
      if (article.draft) {
        expect(() =>
          wrapper.get(`article[data-slug="${article.slug}"]`)
        ).toThrow()
      } else {
        expect(wrapper.get(`article[data-slug="${article.slug}"]`))
      }
    })
  })

  test('can filter articles with tags', async () => {
    const tags = ['tag1', 'tag2', 'tag3']
    const articles = generateArticles(3)
    articles[0].tags = [tags[0], tags[1], tags[2]]
    articles[1].tags = [tags[0], tags[1]]
    articles[2].tags = [tags[0]]
    const wrapperData = createData(articles)
    const wrapper = createWrapper(Articles, wrapperData)

    articles.forEach((article) => {
      expect(wrapper.get(`article[data-slug="${article.slug}"]`))
    })

    const tagInput = wrapper.get('input')

    tagInput.setValue(tags[0])
    await flushPromises()
    tagInput.trigger('keydown', { key: 'Enter' })
    await flushPromises()

    expect(wrapper.get(`article[data-slug="${articles[0].slug}"]`))
    expect(wrapper.get(`article[data-slug="${articles[1].slug}"]`))
    expect(wrapper.get(`article[data-slug="${articles[2].slug}"]`))

    tagInput.setValue(tags[1])
    await flushPromises()
    tagInput.trigger('keydown', { key: 'Enter' })
    await flushPromises()

    expect(wrapper.get(`article[data-slug="${articles[0].slug}"]`))
    expect(wrapper.get(`article[data-slug="${articles[1].slug}"]`))
    expect(() =>
      wrapper.get(`article[data-slug="${articles[2].slug}"]`)
    ).toThrow()

    tagInput.setValue(tags[2])
    await flushPromises()
    tagInput.trigger('keydown', { key: 'Enter' })
    await flushPromises()

    expect(wrapper.get(`article[data-slug="${articles[0].slug}"]`))
    expect(() =>
      wrapper.get(`article[data-slug="${articles[1].slug}"]`)
    ).toThrow()
    expect(() =>
      wrapper.get(`article[data-slug="${articles[2].slug}"]`)
    ).toThrow()
  })

  test('can get some articles from asyncdata', async () => {
    const articles = generateArticles(3)
    const wrapperData = createData([])
    const wrapper = createWrapper(Articles, wrapperData)

    if (wrapper.vm.$options.asyncData) {
      const context = {} as Context
      context.$content = mockNuxtContent(articles)

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeDefined()

      const dataObj = data as {
        articles: object[]
        tags: string[]
        shortlistTags: string[]
      }
      expect(dataObj.articles.length).toBe(articles.length)

      articles.forEach((article) => {
        article.tags.forEach((tag) => {
          expect(dataObj.tags.includes(tag))
          expect(dataObj.shortlistTags.includes(tag))
        })
      })
    }
  })
})
