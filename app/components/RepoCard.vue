<script setup lang="ts">
import type { GithubRepo } from '~/types/github'

const props = defineProps<{ repo: GithubRepo }>()

const { t, locale } = useI18n()

const updatedAt = computed(() =>
  new Intl.DateTimeFormat(locale.value, { year: 'numeric', month: 'short' }).format(
    new Date(props.repo.pushed_at),
  ),
)
</script>

<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors focus-within:border-brand hover:border-brand"
  >
    <h3 class="font-display text-lg font-bold text-headline">
      <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="hover:text-accent">
        {{ repo.name }} <span aria-hidden="true">↗</span>
      </a>
    </h3>
    <p class="mt-2 flex-1 text-sm text-paragraph">
      {{ repo.description ?? t('about.repos.noDescription') }}
    </p>
    <p class="mt-4 flex flex-wrap gap-x-4 font-mono text-xs text-paragraph">
      <span v-if="repo.language">{{ repo.language }}</span>
      <span>{{ t('about.repos.stars', { count: repo.stargazers_count }) }}</span>
      <span>{{ t('about.repos.updated', { date: updatedAt }) }}</span>
    </p>
  </article>
</template>
