<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const options = computed(() =>
  locales.value.map((item) => ({
    code: item.code,
    name: item.name ?? item.code,
    active: item.code === locale.value,
  })),
)
</script>

<template>
  <nav :aria-label="t('language.label')" class="flex gap-1 rounded-full border border-line p-1">
    <NuxtLink
      v-for="option in options"
      :key="option.code"
      :to="switchLocalePath(option.code)"
      :lang="option.code"
      :hreflang="option.code"
      :aria-label="option.name"
      :aria-current="option.active ? 'true' : undefined"
      class="rounded-full px-3.5 py-1.5 text-sm font-semibold text-paragraph uppercase transition-colors hover:text-headline aria-[current=true]:bg-brand aria-[current=true]:text-brand-fg"
    >
      {{ option.code }}
    </NuxtLink>
  </nav>
</template>
