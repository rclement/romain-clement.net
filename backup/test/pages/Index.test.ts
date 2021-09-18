import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import { Context } from '@nuxt/types'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import Index from '~/pages/index.vue'
import { BookContent, generateBooks, mockNuxtContent } from '~/test/utils'

function createData(books: BookContent[]) {
  const bks = books.map((b) => {
    b.published = new Date(b.published)
    return b
  })

  return () => ({
    books: bks,
  })
}

function createWrapper(
  component: Vue.VueConstructor<Vue>,
  optionalData?: () => object
) {
  const localVue = createLocalVue()
  localVue.use(Buefy)
  localVue.use(Vuelidate)

  const mocks = {
    $t: (msg: string) => msg,
    $d: (msg: Date) => msg,
    $i18n: { locales: [] },
    localePath: (path: string) => path,
    switchLocalePath: (code: string) => code,
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
    i18n: true,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
    data: optionalData,
  })
}

describe('pages/index', () => {
  test('contains all sections', () => {
    const wrapper = createWrapper(Index)

    expect(wrapper.get('#freelancing')).toBeTruthy()
    expect(wrapper.get('#certifications')).toBeTruthy()
    expect(wrapper.get('#open-source')).toBeTruthy()
    expect(wrapper.get('#talks')).toBeTruthy()
    expect(wrapper.get('#music')).toBeTruthy()
    expect(wrapper.get('#reading')).toBeTruthy()
    expect(wrapper.get('#contact')).toBeTruthy()
  })

  test('can get some books from asyncdata', async () => {
    const books = generateBooks(3)
    const wrapperData = createData([])
    const wrapper = createWrapper(Index, wrapperData)

    if (wrapper.vm.$options.asyncData) {
      const context = {} as Context
      context.$content = mockNuxtContent(books)

      const data = await wrapper.vm.$options.asyncData(context as Context)
      expect(data).toBeDefined()

      const dataObj = data as {
        books: object[]
      }
      expect(dataObj.books.length).toBe(books.length)
    }
  })
})
