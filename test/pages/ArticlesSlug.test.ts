import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import { Context } from '@nuxt/types'
import Buefy from 'buefy'
import faker from 'faker'
import ArticlesSlug from '~/pages/articles/_slug.vue'
import { generateArticles } from '~/test/utils'

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
  localVue.use(Buefy)

  const mocks = {
    $t: (msg: string) => msg,
    $d: (msg: Date) => msg,
    localePath: (path: string) => path,
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
    data: optionalData,
  })
}

describe('pages/articles/slug', () => {
  test('is a Vue instance', () => {
    const articles = generateArticles(1)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('can display an article', () => {
    const articles = generateArticles(1)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)

    const title = wrapper.find('p.title')
    expect(title.text()).toBe(article.meta.title)

    const published = wrapper.find('p.subtitle > small')
    expect(published.text()).toBe(new Date(article.meta.published).toString())

    const tags = wrapper.findAll('.tag > span')
    article.meta.tags.forEach((tag: string, idx: number) => {
      expect(tags.at(idx).text()).toBe(tag)
    })

    const content = wrapper.find('div.content > span')
    expect(content.html()).toBe(`<span>${article.content}</span>`)
  })

  test('can get a valid article from asyncdata', async () => {
    const articles = generateArticles(2)
    const article = Object.values(articles)[0]
    const wrapperData = createData(article)
    const wrapper = createWrapper(ArticlesSlug, wrapperData)

    if (wrapper.vm.$options.asyncData) {
      const context = {} as Context
      context.$content = { articles }
      context.params = { slug: article.slug }

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeDefined()

      const dataObj = data as { article: { [key: string]: any }[] }
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
      context.$content = { articles }
      context.params = { slug: faker.lorem.slug() }
      context.error = jest.fn()

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeUndefined()

      expect(context.error).toHaveBeenCalledTimes(1)
    }
  })
})
