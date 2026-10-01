<script setup lang="ts">
const SIZE = 32
const FOLLOW_SPEED = 0.18
const INTERACTIVE = 'a, button, input, textarea, [role="button"]'

const cursor = ref<HTMLElement>()
const isActive = ref(false)
const isOverLink = ref(false)

const target = { x: 0, y: 0 }
const current = { x: 0, y: 0 }
let frame = 0

function onMove(event: PointerEvent) {
  target.x = event.clientX
  target.y = event.clientY
  isActive.value = true
  isOverLink.value = Boolean((event.target as Element | null)?.closest(INTERACTIVE))
}

function render() {
  current.x += (target.x - current.x) * FOLLOW_SPEED
  current.y += (target.y - current.y) * FOLLOW_SPEED
  if (cursor.value) {
    cursor.value.style.transform = `translate3d(${current.x - SIZE / 2}px, ${current.y - SIZE / 2}px, 0)`
  }
  frame = requestAnimationFrame(render)
}

onMounted(() => {
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches
  if (!hasFinePointer || prefersReducedMotion()) return

  window.addEventListener('pointermove', onMove)
  document.documentElement.addEventListener('pointerleave', () => (isActive.value = false))
  frame = requestAnimationFrame(render)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <div
    ref="cursor"
    class="pointer-events-none fixed top-0 left-0 z-[100] size-8 rounded-full bg-white mix-blend-difference transition-[opacity,scale] duration-200"
    :class="[isActive ? 'opacity-100' : 'opacity-0', isOverLink ? 'scale-150' : 'scale-100']"
    aria-hidden="true"
  />
</template>
