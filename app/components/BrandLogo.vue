<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const username = useRuntimeConfig().public.githubUser
const avatarUrl = `https://github.com/${username}.png?size=80`

const avatar = ref<HTMLImageElement>()
const hasAvatarFailed = ref(false)

onMounted(() => {
  const image = avatar.value
  if (image?.complete && image.naturalWidth === 0) hasAvatarFailed.value = true
})
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    :aria-label="t('nav.home')"
    class="grid size-10 place-items-center overflow-hidden rounded-xl bg-brand font-display text-xl font-extrabold text-brand-fg"
  >
    <span v-if="hasAvatarFailed">{{ t('brand.initial') }}</span>
    <img
      v-else
      ref="avatar"
      :src="avatarUrl"
      alt=""
      width="40"
      height="40"
      class="size-full object-cover"
      @error="hasAvatarFailed = true"
    />
  </NuxtLink>
</template>
