<script setup lang="ts">
const { t } = useI18n()
const links = useNavLinks()
const route = useRoute()

const isOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-30 border-b border-line bg-page lg:hidden"
    @keydown.esc="isOpen = false"
  >
    <div class="flex h-16 items-center justify-between px-4">
      <BrandLogo />
      <div class="flex items-center gap-3">
        <LanguageSwitcher />
        <button
          type="button"
          :aria-label="isOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          class="grid size-11 place-items-center rounded-xl border border-line text-headline hover:bg-surface"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true" class="text-xl leading-none">{{ isOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>
    <nav v-show="isOpen" id="mobile-menu" :aria-label="t('nav.label')" class="px-4 pb-6">
      <ul class="flex flex-col">
        <li v-for="link in links" :key="link.key">
          <NuxtLink
            :to="link.to"
            class="block border-b border-line py-4 font-display text-xl font-semibold text-paragraph hover:text-headline aria-[current=page]:text-headline"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
