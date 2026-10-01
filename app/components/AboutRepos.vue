<script setup lang="ts">
import type { GithubRepo } from '~/types/github'

defineProps<{ repos: GithubRepo[] }>()

const { t } = useI18n()
</script>

<template>
  <section aria-labelledby="repos-title">
    <h2 id="repos-title" class="font-display text-2xl font-bold text-headline">
      {{ t('about.repos.title') }}
    </h2>
    <p v-if="repos.length === 0" class="mt-4 text-paragraph">{{ t('about.repos.empty') }}</p>
    <ul v-else class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <li v-for="repo in repos" :key="repo.id">
        <RepoCard :repo="repo" />
      </li>
    </ul>
  </section>
</template>
