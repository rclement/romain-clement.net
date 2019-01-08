import shrinkRay from 'shrink-ray-current'
import locales from './locales'

const pkg = require('./package')
const development = process.env.NODE_ENV === 'development'
const production = process.env.NODE_ENV === 'production'
const baseUrl = production ? `https://${pkg.name}` : ''
const sitemapPath = '/sitemap.xml'
const sitemapUrl = `${baseUrl}${sitemapPath}`
const matomoUrl = 'matomo.docker.me'

module.exports = {
  mode: 'universal',

  /*
  ** Environment variable properties
  */
  env: {
    baseUrl: baseUrl,
    contactEmail: 'contact@romain-clement.net'
  },

  /*
  ** Router configuration
  */
  router: {
    linkExactActiveClass: 'is-active',
    middleware: ['matomo-consent']
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
  plugins: ['~/plugins/page-head'],

  /*
  ** Nuxt.js modules
  */
  modules: [
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
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [
      'nuxt-robots-module',
      [
        {
          UserAgent: '*',
          Allow: '/',
          Sitemap: sitemapUrl
        }
      ]
    ],
    [
      'nuxt-matomo',
      {
        matomoUrl: `//${matomoUrl}/`,
        siteId: 1,
        consentRequired: true,
        cookies: false,
        doNotTrack: true,
        debug: development
      }
    ]
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
