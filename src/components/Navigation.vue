<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
let currentPath = router.currentRoute.value.path;
</script>

<template>
  <nav v-if="currentPath !== '/login'">
    <a href="/logout">Logout</a>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  top: 1em;
  right: 0.75em;
}

nav a {
  padding: 0.75em;
}

@media (max-width: 30.5em) {
  /* .container {
    margin: 0 auto;
  } */

  nav {
    width: 100%;
    position: relative;
    right: inherit;
    top: inherit;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  nav a {
    padding-left: 10em;
    padding-right: 10em;
  }
}
</style>