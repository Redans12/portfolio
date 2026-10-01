<script setup lang="ts">
const props = defineProps<{ text: string }>()

const { displayed } = useTypewriter(() => props.text)
</script>

<template>
  <span>
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true">
      {{ displayed
      }}<span
        class="ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.1em] animate-pulse bg-brand motion-reduce:animate-none"
      />
    </span>
  </span>
</template>
