<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Subject from './components/Subject.vue';
import DayOfWeek from './components/DayOfWeek.vue';

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
  <nav>
    <button type="button">Login</button>
  </nav>
  <h2>Class Schedule</h2>
  <div class="container">
    <DayOfWeek
      v-for="(item, index) in schedule"
      :key="item + index"
      :dow="item.dow"
      class="dow"
    >
      <Subject v-for="clase in item.classes" :clase="clase" class="subject" />
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

  .dow {
    width: 100%;
  }

  .subject {
    width: 90%;
  }

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
