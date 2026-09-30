<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
})
</script>

<template>
  <main class="grid min-h-dvh place-items-center p-6">
    <h1 class="font-display text-5xl font-extrabold text-headline">
      {{ t('home.title') }}
    </h1>
  </main>
</template>
