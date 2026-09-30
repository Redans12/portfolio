<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    :aria-label="t('nav.home')"
    class="grid size-10 place-items-center rounded-xl bg-brand font-display text-xl font-extrabold text-brand-fg"
  >
    {{ t('brand.initial') }}
  </NuxtLink>
</template>
