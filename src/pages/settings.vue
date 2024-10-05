<script setup lang="ts">
const { t } = useI18n()
const store = useGraphemesStore()

function toggleLevel(level: keyof typeof store.allGraphemes.byLevel) {
  const graphemes = store.allGraphemes.byLevel[level]
  const states = graphemes.map(grapheme => store.graphemeSettings[grapheme])

  const next = !states.every(state => state)

  for (const grapheme of graphemes) {
    store.graphemeSettings[grapheme] = next
  }
}
</script>

<template>
  <div class="flex flex-col">
    <h3 class="mb-4 text-2xl">
      {{ t('pages.settings.graphemes') }}
    </h3>
    <div class="font-grund mx-auto w-[80vw] flex flex-col gap-6">
      <div v-for="(graphemes, level) in store.allGraphemes.byLevel" :key="level" class="flex items-center gap-6 p-2">
        <h5 class="cursor-pointer border border-dark-50 p-3 text-3xl" @click="toggleLevel(level)">
          {{ level }}
          <input :checked="graphemes.every(g => store.graphemeSettings[g])" :indeterminate="graphemes.some(g => store.graphemeSettings[g]) && !graphemes.every(g => store.graphemeSettings[g])" type="checkbox" class="pointer-events-none">
        </h5>
        <label v-for="grapheme in graphemes" :key="grapheme" class="flex flex-col items-center gap-3 text-2xl">
          {{ grapheme }}
          <input v-model="store.graphemeSettings[grapheme]" type="checkbox">
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
