<script setup lang="ts">
import { computed } from 'vue';
defineProps<{
  clase: {
    subject: string;
    timeslot: string;
    started: string;
    stopped: string;
  };
}>();
</script>

<script lang="ts">
export default {
  computed: {
    subjectStatus() {
      if (this.clase.started !== '' && this.clase.stopped === '') {
        return '(Started)';
      } else if (this.clase.stopped !== '') {
        return '(Completed)';
      }
    },
  },
};
</script>

<template>
  <div class="subject_container">
    <h3>
      {{ clase.subject }}
      <span>{{ subjectStatus }}</span>
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
