import path from 'path'
import { Module } from '@nuxt/types'
import { Content } from '~/content'

declare module '@nuxt/types' {
  interface Context {
    $content: Content
  }
}

interface Options {
  content: Content
}

const defaultOptions: Options = {
  content: {},
}

const contentModule: Module<Options> = function (moduleOptions) {
  const options: Options = Object.assign(
    {},
    defaultOptions,
    moduleOptions,
    this.options.content
  )

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template'),
    options,
  })
}

export default contentModule
