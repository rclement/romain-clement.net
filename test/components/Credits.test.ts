import Vue from 'vue'
import { RouterLinkStub, Wrapper, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import Credits from '~/components/Credits.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('components/credits', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(Credits, {
      localVue,
      mocks: {
        $t: (msg: string) => msg,
        $i18n: { locales: [] },
        localePath: (path: string) => path,
        switchLocalePath: (code: string) => code,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
        i18n: true,
      },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
