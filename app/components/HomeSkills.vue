<script setup lang="ts">
import { skills } from '~/data/skills'

const { t } = useI18n()
</script>

<template>
  <section aria-labelledby="skills-title" class="px-6 py-24 lg:px-16">
    <h2 id="skills-title" class="font-display text-3xl font-bold text-headline">
      {{ t('home.skills.title') }}
    </h2>
    <p class="mt-3 max-w-xl text-paragraph">
      {{ t('home.skills.description', { count: skills.length }) }}
    </p>
    <ul class="mt-8 flex flex-wrap gap-3">
      <li
        v-for="skill in skills"
        :key="skill"
        class="rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm text-headline"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>
