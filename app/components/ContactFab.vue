<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath({ name: 'contact' })"
    class="hover:text-accent-fg fixed right-4 bottom-4 z-30 flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-display text-lg font-semibold text-brand transition-colors hover:bg-brand lg:right-6 lg:bottom-6"
  >
    <span aria-hidden="true">↗</span>
    {{ t('nav.contact') }}
  </NuxtLink>
</template>
