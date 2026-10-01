<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const localePath = useLocalePath()

const kind = computed(() => (props.error.statusCode === 404 ? 'notFound' : 'generic'))

useSeoMeta({ title: () => t(`errorPage.${kind.value}.title`), robots: 'noindex' })

function goHome() {
  return clearError({ redirect: localePath('/') })
}
</script>

<template>
  <NuxtLayout>
    <section class="flex min-h-dvh flex-col justify-center gap-6 px-6 py-24 lg:px-16">
      <p class="font-mono text-sm text-accent">
        {{ t('errorPage.code', { code: error.statusCode }) }}
      </p>
      <h1 class="font-display text-5xl font-extrabold text-headline sm:text-7xl">
        {{ t(`errorPage.${kind}.title`) }}
      </h1>
      <p class="max-w-xl text-lg text-paragraph">{{ t(`errorPage.${kind}.description`) }}</p>
      <div>
        <button
          type="button"
          class="rounded-full bg-brand px-6 py-3 font-display text-sm font-semibold text-brand-fg transition-colors hover:bg-brand/85"
          @click="goHome"
        >
          {{ t('errorPage.backHome') }}
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>
