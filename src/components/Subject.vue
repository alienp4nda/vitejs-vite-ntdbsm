<script setup lang="ts">
defineProps<{ subject: string; timeslot: string }>();
</script>

<template>
  <div class="subject_container">
    <h3>{{ subject }}</h3>
    <div class="timeslot">
      {{ timeslot }}
    </div>
  </div>
</template>

<style scoped>
.subject_container {
  width: 10em;
  height: 5em;
  margin: 1em;
  background-color: #414141;
  border-radius: 0.5em;
}

h3 {
  padding-top: 0.5em;
  margin: 0.5em;
  font-weight: normal;
}
</style>
