import Vue from 'vue'
import { RouterLinkStub, Wrapper, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import Navbar from '~/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('components/navbar', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(Navbar, {
      localVue,
      mocks: {
        $t: (msg: string) => msg,
        $i18n: { locales: [] },
        localePath: (path: string) => path,
        switchLocalePath: (code: string) => code,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
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
