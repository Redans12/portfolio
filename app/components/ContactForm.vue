<script setup lang="ts">
const { t } = useI18n()
const { values, errors, isSent, submit } = useContactForm()

function onSubmit() {
  const firstInvalid = submit()
  if (firstInvalid) document.getElementById(`contact-${firstInvalid}`)?.focus()
}
</script>

<template>
  <form class="max-w-xl space-y-6" novalidate @submit.prevent="onSubmit">
    <FormField
      id="contact-name"
      v-model="values.name"
      :label="t('contact.form.name')"
      :error="errors.name"
      autocomplete="name"
    />
    <FormField
      id="contact-email"
      v-model="values.email"
      :label="t('contact.form.email')"
      :error="errors.email"
      type="email"
      autocomplete="email"
    />
    <FormField
      id="contact-message"
      v-model="values.message"
      :label="t('contact.form.message')"
      :error="errors.message"
      multiline
    />
    <button
      type="submit"
      class="rounded-full bg-brand px-6 py-3 font-display text-sm font-semibold text-brand-fg transition-colors hover:bg-brand/85 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {{ t('contact.form.submit') }}
    </button>
    <p v-if="isSent" role="status" class="text-success">{{ t('contact.form.sent') }}</p>
  </form>
</template>
