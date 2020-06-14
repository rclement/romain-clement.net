import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import Credits from '~/components/Credits.vue'

function createWrapper(component: Vue.VueConstructor<Vue>) {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const mocks = {
    $t: (msg: string) => msg,
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
  })
}

describe('components/credits', () => {
  it('contains all columns', () => {
    const wrapper = createWrapper(Credits)
    expect(wrapper.findAll('div.column').length).toBe(3)
  })
})
