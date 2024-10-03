<script setup lang="ts">
const timestamp = useTimestamp()
const start = ref(timestamp.value)

const elapsed = computed(() => (timestamp.value - start.value) / 1000)

function toFormattedTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)

  return hours ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
</script>

<template>
  <div>
    <h1 class="text-6xl text-gray-600 font-bold">
      {{ toFormattedTime(elapsed) }}
    </h1>
  </div>
</template>

<style scoped>

</style>
