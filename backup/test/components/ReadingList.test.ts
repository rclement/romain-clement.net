import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import ReadingList from '~/components/ReadingList.vue'
import { BookContent, generateBooks } from '~/test/utils'

function createProps(books: BookContent[], snippet: boolean = false) {
  const bks = books.map((b) => {
    b.published = new Date(b.published)
    return b
  })

  return {
    books: bks,
    snippet,
  }
}

function createWrapper(
  component: Vue.VueConstructor<Vue>,
  optionalProps?: object
) {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const mocks = {
    $t: (msg: string) => msg,
    localePath: (path: string) => path,
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
    propsData: optionalProps,
  })
}

describe('components/HomeReading', () => {
  test('is empty if no books', () => {
    const books = generateBooks(0)
    const props = createProps(books)
    const wrapper = createWrapper(ReadingList, props)
    expect(() => wrapper.get('div[data-slug]')).toThrow()
  })

  test('can display some books', () => {
    const books = generateBooks(3)
    const props = createProps(books)
    const wrapper = createWrapper(ReadingList, props)

    books.forEach((book) => {
      const bookComp = wrapper.get(`div[data-slug="${book.slug}"]`)

      const url = bookComp.get('figure > a')
      expect(url.attributes('href')).toBe(book.url)
      expect(url.attributes('title')).toBe(book.title)
      expect(url.attributes('alt')).toBe(book.title)

      const cover = bookComp.get('figure > a > img')
      expect(cover.attributes('src')).toBe(book.cover)

      expect(() => wrapper.getComponent(RouterLinkStub)).toThrow()
    })
  })

  test('can display link to reading page in snippet mode', () => {
    const books = generateBooks(3)
    const props = createProps(books, true)
    const wrapper = createWrapper(ReadingList, props)

    const link = wrapper.getComponent(RouterLinkStub)
    expect(link.props().to).toBe('reading')
  })
})
