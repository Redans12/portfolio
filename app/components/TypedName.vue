<script setup lang="ts">
const props = defineProps<{ text: string; alternateText: string }>()

const { displayed, isTyping, isAlternate } = useTypewriter({
  primary: () => props.text,
  alternate: () => props.alternateText,
})
</script>

<template>
  <span>
    <span class="sr-only">{{ text }}</span>
    <span
      aria-hidden="true"
      class="inline-block h-[1.1em] align-top"
      :lang="isAlternate ? 'ja' : undefined"
      :class="{ 'font-pixel font-normal': isAlternate }"
    >
      {{ displayed
      }}<span
        class="ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.1em] bg-brand motion-reduce:animate-none"
        :class="{ 'animate-caret': !isTyping }"
      />
    </span>
  </span>
</template>
