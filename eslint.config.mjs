import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default withNuxt(prettier, ...vueI18n.configs.recommended, {
  settings: {
    'vue-i18n': {
      localeDir: './i18n/locales/*.json',
      messageSyntaxVersion: '^11.0.0',
    },
  },
  rules: {
    // Every visible text must live in the locale files.
    '@intlify/vue-i18n/no-raw-text': ['error', { ignorePattern: '^[\\s↗✕☰]+$' }],
    '@intlify/vue-i18n/no-missing-keys': 'error',
  },
})
