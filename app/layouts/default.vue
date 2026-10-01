<script setup lang="ts">
const { t } = useI18n()
const head = useLocaleHead({ seo: true })

useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs?.lang },
  link: () => head.value.link ?? [],
  meta: () => head.value.meta ?? [],
})
</script>

<template>
  <div class="min-h-dvh bg-page text-paragraph">
    <a
      href="#main"
      class="sr-only z-50 rounded-lg bg-brand px-4 py-2 font-semibold text-brand-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      {{ t('a11y.skipToContent') }}
    </a>
    <AppSidebar />
    <AppMobileHeader />
    <div class="flex min-h-dvh flex-col pt-16 lg:pt-0 lg:pl-sidebar">
      <LanguageSwitcher class="fixed top-8 right-8 z-30 hidden lg:flex" />
      <main id="main" class="flex-1">
        <slot />
      </main>
      <AppFooter />
    </div>
    <ContactFab />
    <CustomCursor />
  </div>
</template>
