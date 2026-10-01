<script setup lang="ts">
defineProps<{ title: string; description: string; actionLabel: string }>()
defineEmits<{ action: [] }>()
</script>

<template>
  <div role="alert" class="rounded-2xl border border-danger/40 bg-surface p-6">
    <h2 class="font-display text-xl font-bold text-danger">{{ title }}</h2>
    <p class="mt-2 text-paragraph">{{ description }}</p>
    <button
      type="button"
      class="mt-4 rounded-full border border-line px-5 py-2 text-sm font-semibold text-headline transition-colors hover:border-brand hover:text-accent"
      @click="$emit('action')"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>
