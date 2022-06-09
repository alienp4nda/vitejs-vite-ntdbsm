<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Subject from './components/Subject.vue';
import DayOfWeek from './components/DayOfWeek.vue';

const schedule = [
  {
    dow: 'Monday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
      },
    ],
  },
  {
    dow: 'Tuesday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
      },
    ],
  },
];
</script>

<template>
  <div class="container">
    <DayOfWeek v-for="item in schedule" :dow="item.dow">
      <Subject
        v-for="clase in item.classes"
        :subject="clase.subject"
        :timeslot="clase.timeslot"
      />
    </DayOfWeek>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 0.5em;
}
</style>
