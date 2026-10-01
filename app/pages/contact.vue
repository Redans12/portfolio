<script setup lang="ts">
const { t } = useI18n()

usePageSeo('contact')
</script>

<template>
  <section class="px-6 py-24 lg:px-20">
    <h1 class="font-display text-6xl font-extrabold text-headline">
      {{ t('contact.title') }}
    </h1>
  </section>
</template>
