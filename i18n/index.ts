import common from './common'
import en from './en'
import fr from './fr'
import hacker from './hacker'

const locales = [
  {
    name: 'English',
    code: 'en',
    iso: 'en-US',
  },
  {
    name: 'Français',
    code: 'fr',
    iso: 'fr-FR',
  },
  {
    name: 'Hacker',
    code: 'hk',
    iso: 'hk-HK',
  },
]

const defaultLocale = locales[0].code

const messages = {
  en: {
    common,
    ...en,
  },
  fr: {
    common,
    ...fr,
  },
  hk: {
    common,
    ...hacker,
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
  fr: {
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
      hour12: false,
    },
  },
  hk: {
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
