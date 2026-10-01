<template>
  <ul class="grid gap-4 sm:grid-cols-2" aria-hidden="true">
    <li
      v-for="n in 4"
      :key="n"
      class="h-48 animate-pulse rounded-2xl bg-surface motion-reduce:animate-none"
    />
  </ul>
</template>
