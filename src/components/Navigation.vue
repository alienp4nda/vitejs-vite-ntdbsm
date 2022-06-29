<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
let currentPath = router.currentRoute.value.path;
</script>

<template>
  <nav v-if="currentPath !== '/login'">
    <a href="/admin">Admin</a>
    <a href="/logout">Logout</a>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  top: 1rem;
  right: 1em;
}

nav a {
  padding: 0.75em;
  margin: 0 0.25em 0 0.25em;
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
