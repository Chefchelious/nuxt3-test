// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint', 'nuxt-quasar-ui'],
  css: ['~/assets/styles/main.scss'],
  alias: {
    '@': '/<rootDir>',
    '@assets': '/<rootDir>/assets',
    '@images': '/<rootDir>/assets/images',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  quasar: {
    cssAddon: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/styles/quasar.variables.scss";
            @import "~/assets/styles/mixins.scss"; // Импортируйте миксины здесь
          `,
        },
      },
    },
  },
});
