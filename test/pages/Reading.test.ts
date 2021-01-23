import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import { Context } from '@nuxt/types'
import Buefy from 'buefy'
import Reading from '~/pages/reading.vue'
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

  const mocks = {
    $t: (msg: string) => msg,
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

describe('pages/books', () => {
  test('is empty if no books', () => {
    const books = generateBooks(0)
    const wrapperData = createData(books)
    const wrapper = createWrapper(Reading, wrapperData)
    expect(() => wrapper.get('div[data-slug]')).toThrow()
  })

  test('can display some books', () => {
    const books = generateBooks(3)
    const wrapperData = createData(books)
    const wrapper = createWrapper(Reading, wrapperData)

    books.forEach((book) => {
      const bookComp = wrapper.get(`div[data-slug=${book.slug}]`)

      const url = bookComp.get('figure > a')
      expect(url.attributes('href')).toBe(book.url)
      expect(url.attributes('title')).toBe(book.title)
      expect(url.attributes('alt')).toBe(book.title)

      const cover = bookComp.get('figure > a > img')
      expect(cover.attributes('src')).toBe(book.cover)
    })
  })

  test('can get some books from asyncdata', async () => {
    const books = generateBooks(3)
    const wrapperData = createData([])
    const wrapper = createWrapper(Reading, wrapperData)

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
