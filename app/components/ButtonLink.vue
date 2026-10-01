<script setup lang="ts">
withDefaults(defineProps<{ to: string; variant?: 'primary' | 'secondary' }>(), {
  variant: 'primary',
})

const variants = {
  primary: 'bg-brand text-brand-fg hover:bg-brand/85',
  secondary: 'border border-line text-headline hover:border-brand hover:text-brand',
}
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold transition-colors"
    :class="variants[variant]"
  >
    <slot />
  </NuxtLink>
</template>
