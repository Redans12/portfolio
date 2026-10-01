<script setup lang="ts">
import type { PixelIcon } from '~/data/pixelIcons'

const props = defineProps<{ icon: PixelIcon }>()

const cells = computed(() =>
  props.icon.rows.flatMap((row, y) =>
    [...row].flatMap((char, x) => (char === '#' ? [{ x, y }] : [])),
  ),
)
</script>

<template>
  <svg viewBox="0 0 7 7" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true">
    <rect
      v-for="cell in cells"
      :key="`${cell.x}-${cell.y}`"
      :x="cell.x"
      :y="cell.y"
      width="1"
      height="1"
    />
  </svg>
</template>
