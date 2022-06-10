<script setup lang="ts">
const props = defineProps<{ btnText: string }>();
</script>

<template>
  <button type="button" @click="$emit('trackTime')">{{ btnText }}</button>
</template>
