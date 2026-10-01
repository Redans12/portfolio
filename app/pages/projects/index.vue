<script setup lang="ts">
const { t } = useI18n()

usePageSeo('projects')

const { projects, isLoading, error, retry } = useProjects()
</script>

<template>
  <section class="space-y-12 px-6 py-24 lg:px-16">
    <header>
      <h1 class="font-display text-5xl font-extrabold text-headline sm:text-6xl">
        {{ t('projects.title') }}
      </h1>
      <p v-if="!isLoading && !error && projects.length" class="mt-4 text-paragraph">
        {{ t('projects.count', { count: projects.length }, projects.length) }}
      </p>
    </header>

    <ProjectsSkeleton v-if="isLoading" />
    <StateMessage
      v-else-if="error"
      :title="t('projects.error.title')"
      :description="t('projects.error.description')"
      :action-label="t('projects.error.retry')"
      @action="retry"
    />
    <p v-else-if="projects.length === 0" class="text-paragraph">{{ t('projects.empty') }}</p>
    <ul v-else class="grid gap-4 sm:grid-cols-2">
      <li v-for="project in projects" :key="project.slug">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </section>
</template>
