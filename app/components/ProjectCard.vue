<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{ project: Project }>()

const { t } = useI18n()
const localePath = useLocalePath()

const key = computed(() => `projects.items.${props.project.slug}`)
</script>

<template>
  <article
    class="relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors focus-within:border-brand hover:border-brand"
  >
    <p class="font-mono text-xs text-accent">{{ project.year }}</p>
    <h2 class="mt-2 font-display text-xl font-bold text-headline">
      <NuxtLink
        :to="localePath({ name: 'projects-slug', params: { slug: project.slug } })"
        class="after:absolute after:inset-0 hover:text-brand"
      >
        {{ t(`${key}.title`) }}
      </NuxtLink>
    </h2>
    <p class="mt-2 flex-1 text-sm text-paragraph">{{ t(`${key}.description`) }}</p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="tag in project.tags"
        :key="tag"
        class="rounded-full border border-line px-3 py-1 font-mono text-xs text-headline"
      >
        {{ tag }}
      </li>
    </ul>
  </article>
</template>
