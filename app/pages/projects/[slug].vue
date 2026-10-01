<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const slug = String(route.params.slug)
const project = await useProject(slug)
const key = `projects.items.${project.slug}`

useSeoMeta({
  title: () => t(`${key}.title`),
  description: () => t(`${key}.description`),
  ogTitle: () => t(`${key}.title`),
  ogDescription: () => t(`${key}.description`),
})
</script>

<template>
  <article class="space-y-8 px-6 py-24 lg:px-16">
    <NuxtLink
      :to="localePath({ name: 'projects' })"
      class="font-mono text-sm text-accent hover:underline"
    >
      {{ t('projects.back') }}
    </NuxtLink>

    <h1 class="font-display text-5xl font-extrabold text-headline sm:text-6xl">
      {{ t(`${key}.title`) }}
    </h1>
    <p class="max-w-2xl text-lg text-paragraph">{{ t(`${key}.description`) }}</p>

    <dl class="space-y-4">
      <div>
        <dt class="font-mono text-xs text-accent">{{ t('projects.detail.year') }}</dt>
        <dd class="text-headline">{{ project.year }}</dd>
      </div>
      <div>
        <dt class="font-mono text-xs text-accent">{{ t('projects.detail.tags') }}</dt>
        <dd>
          <ul class="mt-1 flex flex-wrap gap-2">
            <li
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-line px-3 py-1 font-mono text-xs text-headline"
            >
              {{ tag }}
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </article>
</template>
