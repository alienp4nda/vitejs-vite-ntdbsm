<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <nav>
    <button type="button">Login</button>
  </nav>
  <!-- <h2>Class Schedule</h2> -->
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

nav {
  position: absolute;
  top: 1em;
  right: 0.75em;
}

nav button {
  padding: 0.75em;
}

@media (max-width: 30.5em) {
  .container {
    margin: 0 auto;
  }

  /* .dow {
    width: 100%;
  }

  .subject {
    width: 90%;
  } */

  nav {
    width: 100%;
    position: relative;
    right: inherit;
    top: inherit;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  nav button {
    padding-left: 10em;
    padding-right: 10em;
  }
}
</style>
