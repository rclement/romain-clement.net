import shrinkRay from 'shrink-ray-current'

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Environment variable properties
  */
  env: {
    contactEmail: 'contact@romain-clement.net'
  },

  /*
  ** Router configuration
  */
  router: {
    linkExactActiveClass: 'is-active'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.author,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    ['nuxt-buefy', { css: true, materialDesignIcons: false }]
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

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://' + pkg.name,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: [],
    routes: [
      '/'
    ]
  }
}
