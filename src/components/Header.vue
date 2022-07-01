<script setup lang="ts">
import { useRoute } from 'vue-router';

defineProps<{
  title: string;
}>();

const route = useRoute();
</script>
<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <div class="header-content" v-if="route.path !== '/login'">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 1.5rem;
  height: 2rem;
  margin-bottom: 2em;
  background-color: #414141;
}

.header h1 {
  margin: 0;
}
</style>
