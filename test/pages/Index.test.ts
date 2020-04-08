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
  test('is a Vue instance', () => {
    const wrapper = createWrapper(Index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
