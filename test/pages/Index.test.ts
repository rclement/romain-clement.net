import Vue from 'vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import Index from '~/pages/index.vue'

function createWrapper(component: Vue.VueConstructor<Vue>) {
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
    expect(wrapper.get('#contact')).toBeTruthy()
  })
})
