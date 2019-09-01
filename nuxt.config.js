import content from './content'
import pkg from './package'

const environment = process.env.NODE_ENV
const development = environment === 'development'
const production = environment === 'production'

if (development) {
  require('dotenv').config()
}

const appName = pkg.name
const appAuthor = pkg.author
const appDescription = pkg.description
const appTitle = `${appName} | ${appDescription}`
const appVersion = pkg.version

const baseUrl = production ? `https://${appName}` : ''
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

export default {
  mode: 'universal',

  env: {
    BASE_URL: baseUrl,
    MAILER_URL: mailerUrl,
    FORMSPREE_URL: formspreeUrl,
    GOOGLE_RECAPTCHA_SITE_KEY: googleRecaptchaSiteKey
  },

  router: {
    linkExactActiveClass: 'is-active',
    middleware: ['matomo-consent', 'google-analytics-consent']
  },

  loading: {
    color: 'black'
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'highlight.js/styles/ocean.css',
    '~/assets/scss/main.scss'
  ],

  plugins: [
    { src: '~/plugins/dnt', mode: 'client' },
    '~/plugins/fontawesome',
    '~/plugins/page-head'
  ],

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
        seo: true,
        vueI18n: {
          fallbackLocale: content.defaultLocale,
          messages: content.messages
        }
      }
    ],
    'nuxt-webfontloader',
    'nuxt-buefy',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-robots-module',
    'nuxt-compress',
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
    ...(googleAnalyticsId ? ['@nuxtjs/google-analytics'] : []),
    ...(sentryDsn ? ['@nuxtjs/sentry'] : [])
  ],

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

  generate: {
    fallback: true,
    routes: content.dynamicRoutes
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

  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },

  icon: {
    iconSrc: 'static/media/logo.png',
    accessibleIcons: true
  },

  meta: {
    name: appTitle,
    author: appAuthor,
    description: appDescription,
    lang: content.defaultLocale,
    ogHost: baseUrl
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
        strategyOptions: {
          cacheName: 'google-fonts',
          cacheExpiration: {
            maxEntries: 30,
            maxAgeSeconds: 300
          }
        }
      }
    ]
  },

  sitemap: {
    path: sitemapPath,
    hostname: baseUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: [],
    trailingSlash: true,
    routes: content.dynamicRoutes
  },

  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Disallow: '/admin',
      Sitemap: sitemapUrl
    }
  ],

  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },

  ...(googleAnalyticsId
    ? {
        googleAnalytics: {
          id: googleAnalyticsId,
          disabled: true,
          debug: {
            enabled: development,
            sendHitTask: production
          }
        }
      }
    : {}),

  ...(sentryDsn
    ? {
        sentry: {
          dsn: sentryDsn,
          disabled: development,
          disableClientSide: development,
          config: {
            environment: environment,
            release: appVersion,
            beforeSend: function(event) {
              if (event.exception) {
                Sentry.showReportDialog()
              }
              return event
            }
          }
        }
      }
    : {})
}
