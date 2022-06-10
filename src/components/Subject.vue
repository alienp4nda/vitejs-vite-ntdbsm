<script setup lang="ts">
import { computed } from 'vue';
import TimeTrackingButton from './TimeTrackingButton.vue';

// Props
interface Props {
  clase: {
    subject: string;
    timeslot: string;
    started: string;
    stopped: string;
  };
}

const props = defineProps<Props>();

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
  <div
    class="subject_container"
    :class="{
      isCompleted: subjectStatus === statuses.Completed,
    }"
  >
    <h3>
      {{ clase.subject }}
      <span class="subjectStatus" v-if="subjectStatus !== ''"
        >({{ subjectStatus }})</span
      >
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
  margin: 1em;
  background-color: #545454;
  border-radius: 0.5em;
}

.isCompleted {
  background-color: #16725c;
}

.subjectStatus {
  display: block;
  margin-top: 0.25em;
}

h3 {
  padding-top: 0.5em;
  margin: 0.25em;
  font-weight: normal;
}

h3 span {
  font-size: 1rem;
}

button {
  background-color: #1a6b87;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  margin-top: 0.35em;
  margin-bottom: 0.35em;
  width: 8rem;
}

button:hover,
button:focus {
  background-color: #228db2;
}

@media (max-width: 30.5em) {
  button {
    width: 85%;
  }
}
</style>
