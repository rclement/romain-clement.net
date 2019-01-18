const path = require('path')
const fs = require('fs')
const glob = require('glob')

function findContent(basepath) {
  const extension = '.json'
  const searchPattern = `{${basepath}/*/,${basepath}/*${extension}}`

  return glob
    .sync(searchPattern)
    .map(filepath => {
      const isdir = fs.lstatSync(filepath).isDirectory()
      const name = isdir
        ? path.basename(filepath)
        : path.basename(filepath, extension)
      const content = isdir
        ? findContent(filepath)
        : require(path.resolve(__dirname, filepath))

      return {
        name: name,
        content: content
      }
    })
    .reduce((obj, item) => {
      obj[item.name] = item.content
      return obj
    }, {})
}

function findLocaleContent(locale) {
  const commonPath = path.resolve(__dirname, 'common')
  const localePath = path.resolve(__dirname, locale)

  return {
    common: findContent(commonPath),
    ...findContent(localePath)
  }
}

const locales = [
  {
    name: 'English',
    code: 'en',
    iso: 'en-US'
  },
  {
    name: 'Français',
    code: 'fr',
    iso: 'fr-FR'
  }
]

const messages = locales.reduce((obj, item) => {
  obj[item.code] = findLocaleContent(item.code)
  return obj
}, {})

console.log(locales)
console.log(messages)

export default {
  locales: locales,
  defaultLocale: locales[0].code,
  messages: messages
}
