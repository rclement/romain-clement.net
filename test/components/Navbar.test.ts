import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import flushPromises from 'flush-promises'
import Navbar from '~/components/Navbar.vue'

const defaultLocale = 'en'

function createWrapper(component: Vue.VueConstructor<Vue>) {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  localVue.use(Buefy)

  const router = new VueRouter({ mode: 'abstract' })

  const mocks = {
    $t: (msg: string) => msg,
    $i18n: {
      defaultLocale,
      locales: [],
    },
    localePath: (path: string) => path,
    switchLocalePath: (code: string) => (code === defaultLocale ? '/' : code),
  }

  const stubs = {
    NuxtLink: RouterLinkStub,
  }

  return mount(component, {
    localVue,
    router,
    mocks,
    stubs,
  })
}

describe('components/navbar', () => {
  it('contains all items', () => {
    const wrapper = createWrapper(Navbar)

    expect(wrapper.findAll('div.navbar-brand > a.navbar-item').length).toBe(1)
    expect(wrapper.findAll('div.navbar-start > a.navbar-item').length).toBe(7)
    expect(wrapper.findAll('div.navbar-end > a.navbar-item').length).toBe(1)
  })

  it('can switch to terminal mode', async () => {
    const wrapper = createWrapper(Navbar)

    const switchInput = wrapper.find('[data-switch-terminal] input')
    expect(switchInput.attributes('value')).toBe('false')

    switchInput.trigger('click')
    await flushPromises()
    expect(wrapper.vm.$route.path).toBe('/und')

    switchInput.trigger('click')
    await flushPromises()
    expect(wrapper.vm.$route.path).toBe('/')
  })
})
