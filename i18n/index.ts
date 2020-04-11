import common from './common'
import en from './en'
import term from './term'

const locales = [
  {
    name: 'English',
    code: 'en',
    iso: 'en-US',
  },
  {
    name: 'Terminal',
    code: 'und',
    iso: 'und',
  },
]

const defaultLocale = locales[0].code

const messages = {
  en: {
    common,
    ...en,
  },
  und: {
    common,
    ...term,
  },
}

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
  und: {
    short: {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    },
    long: {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      hour12: false,
    },
  },
}

export default {
  locales,
  defaultLocale,
  messages,
  dateTimeFormats,
}
