<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="relative flex min-h-dvh flex-col justify-center gap-6 px-6 py-24 lg:px-16">
    <FloatingIcons />
    <p class="font-mono text-sm text-accent">{{ t('home.hero.greeting') }}</p>
    <h1 class="font-display text-5xl font-extrabold text-headline sm:text-7xl lg:text-8xl">
      <TypedName :text="t('brand.name')" :alternate-text="t('brand.nameJapanese')" />
    </h1>
    <JapaneseLine :text="t('home.hero.japanese')" />
    <p class="max-w-xl text-lg text-paragraph">{{ t('home.hero.role') }}</p>
    <div class="mt-4 flex flex-wrap gap-4">
      <ButtonLink :to="localePath({ name: 'projects' })">{{
        t('home.hero.viewProjects')
      }}</ButtonLink>
      <ButtonLink :to="localePath({ name: 'about' })" variant="secondary">
        {{ t('home.hero.aboutMe') }}
      </ButtonLink>
    </div>
  </section>
</template>
