<script setup lang="ts">
const { t } = useI18n()

usePageSeo('contact')
</script>

<template>
  <section class="space-y-8 px-6 py-24 lg:px-16">
    <h1 class="font-display text-5xl font-extrabold text-headline sm:text-6xl">
      {{ t('contact.title') }}
    </h1>
    <p class="max-w-xl text-paragraph">{{ t('contact.intro') }}</p>
    <ContactForm />
  </section>
</template>
