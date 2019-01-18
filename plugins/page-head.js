import Vue from 'vue'

Vue.prototype.$pageHead = function(i18nPageTag) {
  const baseUrl = process.env.BASE_URL
  const canonicalUrl = `${baseUrl}${this.$route.path}`
  const commonTitle = this.$t('head.title')
  const commonKeywords = this.$t('head.keywords').join(',')
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
        hid: 'og:host',
        name: 'og:host',
        property: 'og:host',
        content: pageUrl
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: pageUrl
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl
      }
    ]
  }
}
