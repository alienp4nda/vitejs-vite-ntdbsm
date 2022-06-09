<script setup lang="ts">
defineProps<{ dow: string }>();
</script>

<template>
  <div class="dow_container">
    <h2>{{ dow }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.dow_container {
  display: inline-block;
  vertical-align: top;
  border: 0.25em #414141 solid;
  border-radius: 0.5em;
}

h2 {
  background-color: #414141;
  margin: 0;
  padding: 0.35em;
}
</style>
