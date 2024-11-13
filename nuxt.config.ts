// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts', '@formkit/auto-animate/nuxt'],

  googleFonts: {
    families: {
    "Zilla Slab": [ 400, 500, 600, 700],
    },
    display: 'swap',
  },

  css: ['~/assets/css/tailwind.css'],
  
  pages: true,
  typescript: {
    shim: false
  },
  components: [{
    path: '~/components',
    pathPrefix: false
  }]
})