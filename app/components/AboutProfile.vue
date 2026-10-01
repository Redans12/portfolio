<script setup lang="ts">
import type { GithubUser } from '~/types/github'

const props = defineProps<{ user: GithubUser }>()

const { t } = useI18n()

const displayName = computed(() => props.user.name ?? props.user.login)
</script>

<template>
  <section aria-labelledby="profile-title" class="flex flex-col gap-6 sm:flex-row sm:items-center">
    <img
      :src="user.avatar_url"
      :alt="t('about.profile.avatarAlt', { name: displayName })"
      width="128"
      height="128"
      class="size-32 rounded-full border border-line"
    />
    <div>
      <h2 id="profile-title" class="font-display text-3xl font-bold text-headline">
        {{ displayName }}
      </h2>
      <p class="mt-2 max-w-xl text-paragraph">{{ user.bio ?? t('about.profile.noBio') }}</p>
      <p v-if="user.location" class="mt-1 font-mono text-sm text-accent">{{ user.location }}</p>
      <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm text-paragraph">
        <li>{{ t('about.profile.repos', { count: user.public_repos }, user.public_repos) }}</li>
        <li>{{ t('about.profile.followers', { count: user.followers }, user.followers) }}</li>
        <li>{{ t('about.profile.following', { count: user.following }) }}</li>
      </ul>
      <a
        :href="user.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-block font-display text-sm font-semibold text-accent hover:underline"
      >
        {{ t('about.profile.viewOnGithub') }}
      </a>
    </div>
  </section>
</template>
