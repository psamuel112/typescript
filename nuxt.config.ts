// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  typescript
    : {
    strict
      : true
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/main.scss',
    'vuetify/lib/styles/main.sass'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  plugins: [{ src: '~/plugins/useBootstrap.client.ts', mode: 'client' }] ,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

})
