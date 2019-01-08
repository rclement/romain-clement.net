import localeCommon from './common'
import localeEn from './en'
import localeFr from './fr'

export default {
  en: { ...localeCommon, ...localeEn },
  fr: { ...localeCommon, ...localeFr }
}
