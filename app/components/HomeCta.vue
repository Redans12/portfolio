<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section aria-labelledby="cta-title" class="px-6 py-24 lg:px-16">
    <h2 id="cta-title" class="font-display text-3xl font-bold text-headline">
      {{ t('home.cta.title') }}
    </h2>
    <p class="mt-3 max-w-xl text-paragraph">{{ t('home.cta.description') }}</p>
    <div class="mt-8">
      <ButtonLink :to="localePath({ name: 'contact' })">{{ t('home.cta.button') }}</ButtonLink>
    </div>
  </section>
</template>
