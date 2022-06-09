<script setup lang="ts">
defineProps<{
  clase: {
    subject: string;
    timeslot: string;
    started: string;
    stopped: string;
  };
}>();
</script>

<template>
  <div class="subject_container">
    <h3>
      {{ clase.subject }}
      <span v-if="clase.started !== '' && clase.stopped === ''">(Started)</span>
      <span v-else-if="clase.stopped !== ''">(Completed)</span>
    </h3>
    <div class="timeslot">
      {{ clase.timeslot }}
    </div>
  </div>
</template>

<style scoped>
.subject_container {
  width: 10em;
  height: 5em;
  margin: 1em;
  background-color: #545454;
  border-radius: 0.5em;
}

h3 {
  padding-top: 0.5em;
  margin: 0.5em;
  font-weight: normal;
}

h3 span {
  font-size: 1rem;
}
</style>
