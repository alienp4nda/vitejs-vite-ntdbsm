<script setup lang="ts">
import Subject from '../components/Subject.vue';
import DayOfWeek from '../components/DayOfWeek.vue';

interface Clase {
  subject: string;
  timeslot: string;
  started: string;
  stopped: string;
}

interface Schedule {
  [index: number]: {
    dow: string;
    classes: Clase[];
  };
}

const schedule: Schedule = [
  {
    dow: 'Monday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
        started: '07:50 2022-06-07',
        stopped: '08:50 2022-06-07',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
        started: '08:50 2022-06-07',
        stopped: '',
      },
    ],
  },
  {
    dow: 'Tuesday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
      {
        subject: 'Science',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
    ],
  },
  {
    dow: 'Wednesday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
    ],
  },
  {
    dow: 'Thursday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
    ],
  },
  {
    dow: 'Friday',
    classes: [
      {
        subject: 'Math',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
      {
        subject: 'Writing',
        timeslot: '09:00 - 10:00',
        started: '',
        stopped: '',
      },
    ],
  },
];
</script>

<template>
<DayOfWeek
      v-for="(item, index) in schedule"
      :key="item + index"
      :dow="item.dow"
      class="dow"
    >
      <Subject v-for="clase in item.classes" :clase="clase" class="subject" />
    </DayOfWeek>
</template>