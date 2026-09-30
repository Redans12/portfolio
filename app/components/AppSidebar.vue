<script setup lang="ts">
const { t } = useI18n()
const links = useNavLinks()
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-20 hidden w-sidebar flex-col items-center border-r border-line bg-page py-6 lg:flex"
  >
    <BrandLogo />
    <nav :aria-label="t('nav.label')" class="mt-16">
      <ul class="flex flex-col gap-10">
        <li v-for="link in links" :key="link.key">
          <NuxtLink
            :to="link.to"
            class="block text-vertical text-base font-medium text-paragraph transition-colors hover:text-headline aria-[current=page]:text-headline"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
