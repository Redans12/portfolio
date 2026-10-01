<script setup lang="ts">
import { animate, stagger } from 'animejs'
import { pixelIcons } from '~/data/pixelIcons'

const container = ref<HTMLElement>()
const positions = ['top-[12%] right-[10%]', 'top-[55%] right-[22%]', 'bottom-[14%] right-[8%]']
const colors = ['text-brand', 'text-accent', 'text-headline']

let animation: ReturnType<typeof animate> | undefined

onMounted(() => {
  if (!container.value || prefersReducedMotion()) return

  animation = animate(container.value.children, {
    translateY: [-14, 14],
    rotate: [-8, 8],
    duration: 2800,
    delay: stagger(450),
    alternate: true,
    loop: true,
    ease: 'inOutSine',
  })
})

onBeforeUnmount(() => animation?.revert())
</script>

<template>
  <div
    ref="container"
    class="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <PixelIcon
      v-for="(icon, index) in pixelIcons"
      :key="icon.name"
      :icon="icon"
      class="absolute size-8 sm:size-12"
      :class="[positions[index], colors[index]]"
    />
  </div>
</template>
