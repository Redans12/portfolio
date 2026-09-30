<script setup lang="ts">
import { socialLinks } from '~/data/social'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line px-6 pt-12 pb-24 lg:px-20 lg:pb-10">
    <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex flex-col gap-2">
        <p class="font-display text-3xl font-extrabold text-headline">{{ t('brand.name') }}</p>
        <p>{{ t('brand.tagline') }}</p>
      </div>
      <nav :aria-label="t('footer.social.label')">
        <ul class="flex gap-8">
          <li v-for="link in socialLinks" :key="link.key">
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="font-display text-lg font-medium text-headline transition-colors hover:text-brand"
            >
              <span aria-hidden="true">↗</span>
              {{ t(`footer.social.${link.key}`) }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <p class="mt-10 text-sm">
      {{ t('footer.copyright', { year, name: t('brand.name') }) }}
    </p>
  </footer>
</template>
