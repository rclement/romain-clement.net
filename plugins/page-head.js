import Vue from 'vue'

Vue.prototype.$pageHead = function(i18nPageTag) {
  const baseUrl = process.env.baseUrl
  const commonTitle = this.$t('title')
  const commonKeywords = this.$t('keywords')
  const pageTitle = this.$t(`${i18nPageTag}.title`)
  const pageUrl = `${baseUrl}${this.switchLocalePath(this.$i18n.locale)}`
  const title = `${commonTitle} | ${pageTitle}`

  return {
    title: title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: pageTitle
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: commonKeywords
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: require('@/assets/img/logo.png')
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: pageTitle
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: pageUrl
      }
    ]
  }
}
