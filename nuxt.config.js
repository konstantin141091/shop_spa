export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shop_spa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/nullstyle.scss',
    '~/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/validate.js",
    // { src: '~/plugins/paginate.client.js' }
    "~plugins/paginate.client.js",
    "~plugins/vueSlickCarousel.client.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brand: true
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['~/assets/styles/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },

  auth: {
    // Options
  }
}
