<script setup lang="ts">
defineProps<{
  counter?: number
}>()
</script>

<template>
  <div class="h-full w-full flex flex-col select-none gap-4">
    <div class="status-bar mx-auto w-[80vw]">
      <RunningTimer class="place-self-start" />
      <div>
        <slot name="instructions" />
      </div>
      <div v-if="counter !== undefined" class="place-self-end">
        <span class="text-6xl text-gray-600 font-bold">{{ counter }}</span>
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.status-bar {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: center;
}
</style>
