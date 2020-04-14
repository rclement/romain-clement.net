import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import { Context } from '@nuxt/types'
import Buefy from 'buefy'
import Articles from '~/pages/articles/index.vue'
import { generateArticles } from '~/test/utils'

function createWrapper(
  component: Vue.VueConstructor<Vue>,
  optionalMocks?: object
) {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const mocks = {
    $t: (msg: string) => msg,
    $d: (msg: Date) => msg,
    localePath: (path: string) => path,
    ...optionalMocks,
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
  })
}

describe('pages/articles', () => {
  test('is a Vue instance', () => {
    const articles = generateArticles(0)
    const wrapper = createWrapper(Articles, { articles })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('can display some articles', () => {
    const articles = generateArticles(3)
    const wrapper = createWrapper(Articles, { articles })

    Object.values(articles).forEach((article) => {
      const articleComp = wrapper.find(`article[data-slug=${article.slug}]`)

      const title = articleComp.find('.content > p > strong > a')
      expect(title.text()).toBe(article.meta.title)

      const published = articleComp.find('.content > p > small')
      expect(published.text()).toBe(new Date(article.meta.published).toString())

      const summary = articleComp.find('.content > p + p')
      expect(summary.text()).toBe(article.meta.summary)

      const tags = articleComp.findAll('.content > .tags > .tag > span')
      article.meta.tags.forEach((tag: string, idx: number) => {
        expect(tags.at(idx).text()).toBe(tag)
      })
    })
  })

  test('can get some articles from asyncdata', async () => {
    const articles = generateArticles(3)
    const wrapper = createWrapper(Articles, { articles })

    if (wrapper.vm.$options.asyncData) {
      const context = {} as Context
      context.$content = { articles }

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeDefined()

      const dataObj = data as { articles: { [key: string]: any }[] }
      expect(dataObj.articles.length).toBe(Object.values(articles).length)
    }
  })
})
