<script setup lang="ts">
import { computed } from 'vue';
import TimeTrackingButton from './TimeTrackingButton.vue';
const props = defineProps<{
  clase: {
    subject: string;
    timeslot: string;
    started: string;
    stopped: string;
  };
}>();

// Subject status
enum statuses {
  Started = 'Started',
  Completed = 'Completed',
}

const getSubjectStatus = () => {
  if (props.clase.started !== '' && props.clase.stopped === '') {
    return statuses.Started;
  } else if (props.clase.stopped !== '') {
    return statuses.Completed;
  } else {
    return '';
  }
};

const subjectStatus = computed(() => getSubjectStatus());

// Time Tracking Button
const timeTrackingButtonText =
  getSubjectStatus() === statuses.Started ? 'Stop' : 'Start';
const timeTrackingButtonVisable =
  getSubjectStatus() === statuses.Completed ? false : true;
</script>

<template>
  <div class="subject_container">
    <h3>
      {{ clase.subject }}
      <span v-if="subjectStatus !== ''">({{ subjectStatus }})</span>
    </h3>
    <div class="timeslot">
      {{ clase.timeslot }}
    </div>
    <TimeTrackingButton
      v-if="timeTrackingButtonVisable"
      :btnText="timeTrackingButtonText"
    />
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
