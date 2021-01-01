import { NuxtConfig } from '@nuxt/types'
import i18n from './i18n'

const appCommon = i18n.messages.en.common.app
const appName = appCommon.name
const appShortName = appCommon.shortName
const appDescription = appCommon.description
const appAuthor = process.env.npm_package_author_name || ''
const appVersion = process.env.npm_package_version || ''
const appKeywords = appCommon.keywords
const appColor = appCommon.color

const appEnvironment = process.env.APP_ENVIRONMENT || process.env.NODE_ENV
const baseUrl = process.env.BASE_URL || ''
const baseProtocol = process.env.BASE_PROTOCOL || 'https'
const mailerUrl = process.env.MAILER_URL || ''
const chiffrePublicKey = process.env.CHIFFRE_PUBLIC_KEY || ''
const chiffreProjectId = process.env.CHIFFRE_PROJECT_ID || ''
const sentryDsn = process.env.SENTRY_DSN || ''

const hostname = `${baseProtocol}://${baseUrl}`

const sitemapPath = '/sitemap.xml'
const sitemapUrl = `${hostname}${sitemapPath}`

type Article = {
  path: string
  slug: string
  author: string
  title: string
  published: string
  summary: string
}

const contentArticles = async (): Promise<Article[]> => {
  const { $content } = require('@nuxt/content')
  return await $content('articles')
    .where({ draft: false })
    .sortBy('published', 'desc')
    .fetch()
}

const feedArticles = () => {
  const feedsCommon = i18n.messages.en.common.feeds
  const baseUrlArticles = '/articles'
  const baseUrlFeed = `${feedsCommon.basepath}${baseUrlArticles}`

  async function feedCreateArticles(feed: { [key: string]: any }) {
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

    const articles: Article[] = await contentArticles()

    articles.forEach((article) => {
      const url = `${baseLinkArticles}/${article.slug}`
      const authors: { [key: string]: any } = feedsCommon.authors
      const author = authors[article.author]

      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        date: new Date(article.published),
        published: new Date(article.published),
        description: article.summary,
        content: article.summary,
        author: [author],
      })
    })
  }

  return Object.values(feedsCommon.formats).map((f) => ({
    path: `${baseUrlFeed}/${f.file}`,
    type: f.type,
    create: feedCreateArticles,
  }))
}

const config: NuxtConfig = {
  target: 'static',
  telemetry: false,

  env: {
    APP_VERSION: appVersion,
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
    linkExactActiveClass: 'is-active',
  },

  generate: {
    fallback: '404.html',
    exclude: [/^\/.well-known/],
  },

  hooks: {
    // @ts-ignore
    'content:file:beforeInsert': (document) => {
      if (document.dir === '/articles') {
        const readingTime = require('reading-time')
        const stats = readingTime(document.text, { wordsPerMinute: 130 })
        document.readingTime = Math.ceil(stats.minutes)
      }
    },
  },

  plugins: ['~/plugins/font-awesome.ts', '~/plugins/vuelidate.ts'],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    ['nuxt-cname-module', { baseUrl, generateCNAME: true }],
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-chiffre',
    'nuxt-i18n',
    'nuxt-buefy',
    '@nuxt/content',
    '@nuxtjs/sentry',
    '@nuxtjs/pwa',
    '@nuxtjs/feed',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  typescript: {
    typeCheck: {
      eslint: {
        enabled: true,
        files: './**/*.{ts,js,vue}',
      },
    },
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
    config: {
      environment: appEnvironment,
      release: appVersion,
    },
  },

  pwa: {
    meta: {
      name: appName,
      author: appAuthor,
      description: appDescription,
      theme_color: appColor,
      ogHost: hostname,
      ogImage: {
        path: '/preview.png',
        width: 1280,
        height: 640,
      },
      twitterCard: 'summary_large_image',
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
    routes: async () => {
      const articles: Article[] = await contentArticles()
      return articles.map((article) => ({
        url: article.path,
        links: i18n.locales.map((locale) => ({
          lang: locale.code,
          url:
            locale.code === i18n.defaultLocale
              ? article.path
              : `${locale.code}${article.path}`,
        })),
      }))
    },
    i18n: true,
    gzip: true,
  },
}

export default config
