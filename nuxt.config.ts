import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: { githubUser: 'Redans12', contactEmail: 'andresibarrola_01@hotmail.com' },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
  },
  i18n: {
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'es', language: 'es-MX', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      about: { es: '/sobre-mi', en: '/about' },
      'projects/index': { es: '/proyectos', en: '/projects' },
      'projects/[slug]': { es: '/proyectos/[slug]', en: '/projects/[slug]' },
      contact: { es: '/contacto', en: '/contact' },
    },
  },
})
