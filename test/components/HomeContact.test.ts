import Vue from 'vue'
import { Wrapper, createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import faker from 'faker'
import flushPromises from 'flush-promises'
import HomeContact from '~/components/HomeContact.vue'

faker.seed(1234)

function mockAxios(success: boolean = true) {
  return {
    $axios: {
      $post: jest.fn(
        (_: string, data: object): Promise<any> => {
          return new Promise((resolve, reject) => {
            if (success) {
              resolve(data)
            } else {
              reject(Error('failed post request'))
            }
          })
        }
      ),
    },
  }
}

function createWrapper(
  component: Vue.VueConstructor<Vue>,
  optionalMocks?: object
) {
  const localVue = createLocalVue()
  localVue.use(Buefy)
  localVue.use(Vuelidate)

  const mocks = {
    $t: (msg: string) => msg,
    ...optionalMocks,
  }

  const stubs = {
    i18n: true,
  }

  return mount(component, {
    localVue,
    mocks,
    stubs,
  })
}

async function fillInputs(
  wrapper: Wrapper<Vue>,
  nameValue: string,
  emailValue: string,
  subjectValue: string,
  messageValue: string,
  publicKeyValue: string,
  honeypotValue: string
): Promise<void> {
  const nameInput = wrapper.find('[data-name]')
  nameInput.setValue(nameValue)

  const emailInput = wrapper.find('[data-email]')
  emailInput.setValue(emailValue)

  const subjectInput = wrapper.find('[data-subject]')
  subjectInput.setValue(subjectValue)

  const messageInput = wrapper.find('[data-message]')
  messageInput.setValue(messageValue)

  const publicKeyInput = wrapper.find('[data-publickey]')
  publicKeyInput.setValue(publicKeyValue)

  const honeypotInput = wrapper.find('[data-honeypot]')
  honeypotInput.setValue(honeypotValue)

  const button = wrapper.find('button')
  expect(button.attributes('disabled')).toBe('disabled')

  await flushPromises()
}

async function checkCanSendWithSuccess(wrapper: Wrapper<Vue>): Promise<void> {
  const button = wrapper.find('button')
  expect(button.attributes('disabled')).toBeUndefined()

  button.trigger('click')
  await flushPromises()
  expect(wrapper.emitted('success')).toBeTruthy()
}

async function checkCanSendWithFailure(wrapper: Wrapper<Vue>): Promise<void> {
  const button = wrapper.find('button')
  expect(button.attributes('disabled')).toBeUndefined()

  button.trigger('click')
  await flushPromises()
  expect(wrapper.emitted('failure')).toBeTruthy()
}

async function checkCannotSend(wrapper: Wrapper<Vue>): Promise<void> {
  const button = wrapper.find('button')
  expect(button.attributes('disabled')).toBe('disabled')

  button.trigger('click')
  await flushPromises()
  expect(button.attributes('disabled')).toBe('disabled')
}

describe('components/HomeContact', () => {
  HTMLElement.prototype.insertAdjacentElement = jest.fn()

  test('is a Vue instance', () => {
    const wrapper = createWrapper(HomeContact)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('can send a message and show success', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCanSendWithSuccess(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(1)
  })

  it('can send a message and show failure', async () => {
    const mockedAxios = mockAxios(false)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCanSendWithFailure(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(1)
  })

  it('cannot send a message with an empty name', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = ''
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with a too long name', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.lorem.sentence(50)
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with an empty e-mail', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = ''
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with a bad e-mail', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.name.lastName()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with an empty subject', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.internet.email()
    const subjectValue = ''
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with a too-long subject', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(100)
    const messageValue = faker.lorem.paragraph(3)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with an empty message', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = ''
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  it('cannot send a message with a too-long message', async () => {
    const mockedAxios = mockAxios(true)
    const wrapper = createWrapper(HomeContact, mockedAxios)

    const nameValue = faker.name.firstName()
    const emailValue = faker.internet.email()
    const subjectValue = faker.lorem.sentence(1)
    const messageValue = faker.lorem.paragraph(1000)
    const publicKeyValue = ''
    const honeypotValue = ''

    await fillInputs(
      wrapper,
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
      publicKeyValue,
      honeypotValue
    )
    await checkCannotSend(wrapper)

    expect(mockedAxios.$axios.$post).toHaveBeenCalledTimes(0)
  })

  // it('can set the public key from the file input', async () => {
  //   // Cannot make it work with jsdom for now
  //   // https://github.com/jsdom/jsdom/issues/1272
  //   // https://github.com/jsdom/jsdom/issues/1568

  //   const wrapper = createWrapper(HomeContact)

  //   const publicKeyFileValue = faker.lorem.lines(10)
  //   const publicKeyFile = new File([publicKeyFileValue], 'test.pub.asc', { type: 'text/plain' })
  //   const publicKeyFileList = new DataTransfer()
  //   publicKeyFileList.items.add(publicKeyFile)

  //   const publicKeyFileInput = wrapper.find('[data-publickeyfile]')
  //   const publicKeyFileInputElement = publicKeyFileInput.element as HTMLInputElement
  //   publicKeyFileInputElement.files = publicKeyFileList.files
  //   publicKeyFileInput.trigger('change')

  //   const publicKeyInput = wrapper.find('[data-publickey]')

  //   await flushPromises()
  //   expect(publicKeyInput.text()).toEqual(publicKeyFileValue)
  // })
})
