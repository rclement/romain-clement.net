import shrinkRay from 'shrink-ray-current'

require('dotenv').config()

const glob = require('glob')
const path = require('path')
const fs = require('fs')
const pkg = require('./package')

const environment = process.env.NODE_ENV
const development = environment === 'development'
const production = environment === 'production'

const baseUrl = production ? `https://${pkg.name}` : ''
const sitemapPath = '/sitemap.xml'
const sitemapUrl = `${baseUrl}${sitemapPath}`

const mailerUrl = process.env.MAILER_URL
const formspreeUrl = process.env.FORMSPREE_URL
const matomoUrl = process.env.MATOMO_URL || undefined
const matomoSiteId = process.env.MATOMO_SITE_ID || undefined
const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID || undefined
const sentryDsn = process.env.SENTRY_DSN || undefined

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
      const content = isdir ? findContent(filepath) : require(`./${filepath}`)

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
  const commonPath = path.join('content', 'common')
  const localePath = path.join('content', locale)
  return {
    common: findContent(commonPath),
    ...findContent(localePath)
  }
}

const locales = {
  en: findLocaleContent('en'),
  fr: findLocaleContent('fr')
}

module.exports = {
  mode: 'universal',

  /*
  ** Environment variable properties
  */
  env: {
    BASE_URL: baseUrl,
    MAILER_URL: mailerUrl,
    FORMSPREE_URL: formspreeUrl
  },

  /*
  ** Router configuration
  */
  router: {
    linkExactActiveClass: 'is-active',
    middleware: ['matomo-consent', 'google-analytics-consent']
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'black'
  },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css',
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/dnt-support', ssr: false },
    '~/plugins/page-head'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        baseUrl: baseUrl,
        locales: [
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
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        vueI18n: {
          fallbackLocale: 'en',
          messages: locales
        }
      }
    ],
    [
      'nuxt-buefy',
      {
        css: true,
        materialDesignIcons: false
      }
    ],
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [
      'nuxt-robots-module',
      [
        {
          UserAgent: '*',
          Allow: '/',
          Disallow: '/admin',
          Sitemap: sitemapUrl
        }
      ]
    ],
    ...(matomoUrl && matomoSiteId
      ? [
          [
            'nuxt-matomo',
            {
              matomoUrl: `//${matomoUrl}/`,
              siteId: matomoSiteId,
              consentRequired: true,
              cookies: false,
              doNotTrack: true,
              debug: development
            }
          ]
        ]
      : []),
    ...(googleAnalyticsId
      ? [
          [
            '@nuxtjs/google-analytics',
            {
              id: googleAnalyticsId,
              debug: {
                enabled: development,
                sendHitTask: production
              }
            }
          ]
        ]
      : []),
    ...(sentryDsn
      ? [
          [
            '@nuxtjs/sentry',
            {
              dsn: sentryDsn,
              disabled: development,
              disableClientSide: development,
              config: {
                environment: environment,
                release: pkg.version,
                beforeSend: function(event) {
                  if (event.exception) {
                    Sentry.showReportDialog()
                  }
                  return event
                }
              }
            }
          ]
        ]
      : [])
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  render: {
    compressor: shrinkRay()
  },

  generate: {
    fallback: true
  },

  axios: {
    debug: development
  },

  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true
  },

  icon: {
    iconSrc: 'assets/img/logo.png'
  },

  sitemap: {
    path: sitemapPath,
    hostname: baseUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: [],
    routes: ['/']
  }
}
