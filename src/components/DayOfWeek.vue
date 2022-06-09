<script setup lang="ts">
defineProps<{ dow: string }>();
</script>

<template>
  <div class="dow_container">
    <h2>{{ dow }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped></style>
