const siteUrl = process.env.BASE_URL || 'http://localhost:3000'

import tailwindTypography from '@tailwindcss/typography'

export default {
  // Tailwind config
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      theme: {
        extend: {
          minHeight: {
            '1/2': '50vh',
          },
        },
      },
    },
  },

  eslint: {
    cache: false
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    titleTemplate: '%s Ronald Otieno Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Personal corner on the internet where I share my thoughts on various topics, learnings, new discoveries & development.',
      },
      // OG
      { property: 'og:site_name', content: 'Ronald Otieno Blog' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: siteUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ronald Otieno Blog',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Personal corner on the internet where I share my thoughts on various topics, learnings, new discoveries & development.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${siteUrl}/lat2-smaller.png`,
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '627' },

      // Twitter card
      { name: 'twitter:site', content: '@Ron_Lats' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: siteUrl,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Ronald Otieno Blog',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Personal corner on the internet where I share my thoughts on various topics, learnings, new discoveries & development.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${siteUrl}/lat2-smaller.png`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: siteUrl,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',

    // google fonts
    '@nuxtjs/google-fonts'

  ],

  //google fonts
  googleFonts:{
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      'Play': true,
      'Poppins': true,
      'Belleza': true,
      'Coco': true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    loaders: {
      vue: {
        prettify: false
      }
    }

  },
}

