import Vue from 'vue'

Vue.prototype.$pageHead = function(i18nPageTag) {
  const baseUrl = process.env.baseUrl
  const canonicalUrl = `${baseUrl}${this.$route.path}`
  const commonTitle = this.$t('title')
  const commonKeywords = this.$t('keywords')
  const pageTitle = this.$t(`${i18nPageTag}.title`)
  const pageUrl = `${baseUrl}${this.switchLocalePath(this.$i18n.locale)}`
  const title = `${commonTitle} | ${pageTitle}`
  const logoUrl = `${baseUrl}${require('@/assets/img/logo.png')}`

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
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: logoUrl
      }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  }
}
