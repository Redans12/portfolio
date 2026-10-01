<script setup lang="ts">
import { animate, stagger } from 'animejs'

const props = defineProps<{ text: string }>()

const container = ref<HTMLElement>()
const chars = computed(() => [...props.text])

let animation: ReturnType<typeof animate> | undefined

onMounted(() => {
  if (!container.value || prefersReducedMotion()) return

  animation = animate(container.value.children, {
    opacity: [0, 1],
    translateY: [12, 0],
    duration: 600,
    delay: stagger(70, { start: 1200 }),
    ease: 'outQuad',
  })
})

onBeforeUnmount(() => animation?.revert())
</script>

<template>
  <p lang="ja" class="font-pixel text-xl text-accent sm:text-2xl">
    <span class="sr-only">{{ text }}</span>
    <span ref="container" aria-hidden="true">
      <span v-for="(char, index) in chars" :key="index" class="inline-block whitespace-pre">{{
        char
      }}</span>
    </span>
  </p>
</template>
