<script setup lang="ts">
const { t } = useI18n()

usePageSeo('about')

const { user, repos, isLoading, errorKind, retry } = useGithubProfile()
</script>

<template>
  <section class="space-y-12 px-6 py-24 lg:px-16">
    <h1 class="font-display text-5xl font-extrabold text-headline sm:text-6xl">
      {{ t('about.title') }}
    </h1>

    <AboutSkeleton v-if="isLoading" />
    <StateMessage
      v-else-if="errorKind"
      :title="t('about.error.title')"
      :description="t(`about.error.${errorKind}`)"
      :action-label="t('about.error.retry')"
      @action="retry"
    />
    <template v-else-if="user">
      <AboutProfile :user="user" />
      <AboutRepos :repos="repos" />
    </template>
  </section>
</template>
