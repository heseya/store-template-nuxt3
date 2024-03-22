import pkg from './package.json'

const {
  NUXT_PUBLIC_PRODUCTION = 'false',
  NUXT_PUBLIC_API_URL,
  NUXT_PUBLIC_CDN_URL,
  NUXT_PUBLIC_I18N_BASE_URL,
} = process.env

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | Store',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,maximum-scale=5',
        },
        { name: 'version', content: pkg.version },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:wght@300;400&family=Oswald:wght@400;500;600&display=swap',
        },
      ],
      script: [
        {
          hid: 'polyfill',
          defer: true,
          fetchpriority: 'low',
          src: 'https://polyfill.io/v3/polyfill.min.js?features=Intl.NumberFormat%2CIntl.PluralRules.~locale.pl',
        },
      ],
    },
  },

  css: ['@/assets/scss/index.scss'],

  runtimeConfig: {
    public: {
      production: NUXT_PUBLIC_PRODUCTION,
      apiUrl: NUXT_PUBLIC_API_URL,
      cdnUrl: NUXT_PUBLIC_CDN_URL,

      i18n: {
        baseUrl: NUXT_PUBLIC_I18N_BASE_URL,
      },
    },
  },

  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
    strategy: 'prefix_except_default',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/global.scss" as *;`,
        },
      },
    },
  },
})
