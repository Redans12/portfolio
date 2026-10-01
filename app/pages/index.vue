<script setup lang="ts">
const { t } = useI18n()

usePageSeo('home')
</script>

<template>
  <section class="grid min-h-[70dvh] place-items-center p-6">
    <h1 class="font-display text-5xl font-extrabold text-headline">
      {{ t('home.title') }}
    </h1>
  </section>
</template>
