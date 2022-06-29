<script setup lang="ts">
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Header>
    <Navigation />
  </Header>
  <h2>Class Schedule</h2>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 0.5em;
}

@media (max-width: 30.5em) {
  .container {
    margin: 0 auto;
  }
}
</style>
