<script setup lang="ts">
const props = defineProps<{
  id: string
  label: string
  error: string
  type?: string
  multiline?: boolean
  autocomplete?: string
}>()

const model = defineModel<string>({ required: true })

const errorId = computed(() => `${props.id}-error`)
const fieldClasses =
  'mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-headline transition-colors placeholder:text-muted hover:border-brand'
</script>

<template>
  <div>
    <label :for="id" class="font-display text-sm font-semibold text-headline">{{ label }}</label>
    <textarea
      v-if="multiline"
      :id="id"
      v-model="model"
      rows="6"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? errorId : undefined"
      :class="[fieldClasses, error ? 'border-danger' : 'border-line']"
    />
    <input
      v-else
      :id="id"
      v-model="model"
      :type="type ?? 'text'"
      :autocomplete="autocomplete"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? errorId : undefined"
      :class="[fieldClasses, error ? 'border-danger' : 'border-line']"
    />
    <p v-if="error" :id="errorId" class="mt-2 text-sm text-danger">{{ error }}</p>
  </div>
</template>
