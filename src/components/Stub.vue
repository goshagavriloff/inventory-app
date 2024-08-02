<script setup lang="ts">
defineProps<{
  className: string
}>()
</script>

<template>
  <div :class="'stub '.concat(className)"></div>
</template>

<style scoped></style>
