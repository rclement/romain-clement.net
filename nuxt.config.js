import shrinkRay from 'shrink-ray-current'
import content from './content'

require('dotenv').config()

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
const googleRecaptchaSiteKey =
  process.env.GOOGLE_RECAPTCHA_SITE_KEY || undefined
const sentryDsn = process.env.SENTRY_DSN || undefined

module.exports = {
  mode: 'universal',

  /*
  ** Environment variable properties
  */
  env: {
    BASE_URL: baseUrl,
    MAILER_URL: mailerUrl,
    FORMSPREE_URL: formspreeUrl,
    GOOGLE_RECAPTCHA_SITE_KEY: googleRecaptchaSiteKey
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
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        type: 'text/javascript'
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
    'highlight.js/styles/ocean.css',
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
        locales: content.locales,
        defaultLocale: content.defaultLocale,
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        vueI18n: {
          fallbackLocale: content.defaultLocale,
          messages: content.messages
        }
      }
    ],
    'nuxt-webfontloader',
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
    html: true,
    langPrefix: 'language-',
    use: ['markdown-it-highlightjs']
  },

  webfontloader: {
    google: {
      families: ['Quicksand:300,400']
    }
  },

  icon: {
    iconSrc: 'static/media/logo.png',
    accessibleIcons: true
  },

  meta: {
    ogSiteName: pkg.name,
    ogHost: baseUrl
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
