import { Configuration } from '@nuxt/types'
import i18n from './i18n'
import { findContent } from './content'

require('dotenv').config()

const appCommon = i18n.messages.en.common.app
const appName = appCommon.name
const appShortName = appCommon.shortName
const appDescription = appCommon.description
const appAuthor = process.env.npm_package_author_name || ''
const appVersion = process.env.npm_package_version || ''
const appKeywords = appCommon.keywords
const appColor = appCommon.color

const baseUrl = process.env.BASE_URL || ''
const baseProtocol = process.env.BASE_PROTOCOL || 'https'
const staticPrefix = process.env.STATIC_PREFIX || ''
const mailerUrl = process.env.MAILER_URL || ''
const chiffrePublicKey = process.env.CHIFFRE_PUBLIC_KEY || ''
const chiffreProjectId = process.env.CHIFFRE_PROJECT_ID || ''
const sentryDsn = process.env.SENTRY_DSN || ''

const hostname = `${baseProtocol}://${baseUrl}${staticPrefix}`

const sitemapPath = '/sitemap.xml'
const sitemapUrl = `${hostname}${sitemapPath}`

const content = findContent()
const articlesDynamicRoutes = content.articles.reduce((obj: string[], a) => {
  const localeRoutes = i18n.locales.map((l) => {
    const code = l.code
    let route = `/articles/${a.slug}`
    if (code !== i18n.defaultLocale) {
      route = `/${code}${route}`
    }
    return route
  })

  obj.push(...localeRoutes)
  return obj
}, [])
const contentDynamicRoutes = [...articlesDynamicRoutes]

const feedArticles = () => {
  const feedsCommon = i18n.messages.en.common.feeds
  const baseUrlArticles = '/articles'
  const baseUrlFeed = `${feedsCommon.basepath}${baseUrlArticles}`

  function feedCreateArticles(feed: { [key: string]: any }) {
    const baseLinkArticles = `${hostname}${baseUrlArticles}`

    feed.options = {
      title: 'Articles from Romain Clement',
      description: i18n.messages.en.articles.text,
      id: baseLinkArticles,
      link: baseLinkArticles,
      feedLinks: {
        rss: `${hostname}${baseUrlFeed}/${feedsCommon.formats.rss.file}`,
        atom: `${hostname}${baseUrlFeed}/${feedsCommon.formats.atom.file}`,
        json: `${hostname}${baseUrlFeed}/${feedsCommon.formats.json.file}`,
      },
    }

    content.articles.forEach((article) => {
      const url = `${baseLinkArticles}/${article.slug}`
      feed.addItem({
        title: article.meta.title,
        id: url,
        link: url,
        date: article.meta.published,
        description: article.meta.summary,
        content: article.meta.summary,
        author: Object.values(feedsCommon.authors),
      })
    })

    feed.addContributor(feedsCommon.authors.romain)
  }

  return Object.values(feedsCommon.formats).map((f) => ({
    path: `${baseUrlFeed}/${f.file}`,
    type: f.type,
    create: feedCreateArticles,
  }))
}

const config: Configuration = {
  mode: 'universal',

  env: {
    APP_VERSION: appVersion,
    STATIC_PREFIX: staticPrefix,
    MAILER_URL: mailerUrl,
  },

  loading: { color: '#fff' },

  head: {
    meta: [
      { hid: 'keywords', name: 'keywords', content: appKeywords.join(',') },
    ],
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/scss/main.scss',
  ],

  router: {
    base: `${staticPrefix}/`,
    linkExactActiveClass: 'is-active',
  },

  generate: {
    fallback: true,
    routes: contentDynamicRoutes,
  },

  plugins: ['~/plugins/font-awesome.ts', '~/plugins/vuelidate.ts'],

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '~/modules/content.ts',
    ['nuxt-cname-module', { baseUrl, generateCNAME: true }],
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-chiffre',
    'nuxt-i18n',
    'nuxt-buefy',
    '@nuxtjs/sentry',
    '@nuxtjs/pwa',
    '@nuxtjs/feed',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  typescript: {
    typeCheck: {
      eslint: true,
    },
  },

  content: {
    content,
  },

  chiffre: {
    publicKey: chiffrePublicKey,
    projectId: chiffreProjectId,
  },

  i18n: {
    locales: i18n.locales,
    defaultLocale: i18n.defaultLocale,
    seo: false,
    baseUrl: hostname,
    vueI18n: {
      fallbackLocale: i18n.defaultLocale,
      messages: i18n.messages,
      dateTimeFormats: i18n.dateTimeFormats,
    },
  },

  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon',
  },

  sentry: {
    dsn: sentryDsn,
  },

  pwa: {
    meta: {
      name: appName,
      author: appAuthor,
      description: appDescription,
      theme_color: appColor,
      ogHost: hostname,
    },
    manifest: {
      name: appName,
      short_name: appShortName,
      description: appDescription,
      background_color: '#ffffff',
      theme_color: appColor,
    },
  },

  feed: feedArticles,

  robots: [
    {
      UserAgent: '*',
      Disallow: '',
      Sitemap: sitemapUrl,
    },
  ],

  sitemap: {
    path: sitemapPath,
    hostname,
    gzip: true,
    routes: contentDynamicRoutes,
  },
}

export default config
