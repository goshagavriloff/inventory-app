<script setup lang="ts">
const props = defineProps({
  className: String
})
</script>

<template>
  <div :class="'stub '.concat(props.className)"></div>
</template>

<style scoped></style>
