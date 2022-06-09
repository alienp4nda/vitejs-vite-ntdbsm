<script setup lang="ts">
defineProps<{ btnText: sttring }>()
</script>

<template>
  <button type="button" @click="$emit('trackTime')">{{ btnText }}</button>
</template>