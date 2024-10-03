<script setup lang="ts">
const { t } = useI18n()
const store = useGraphemesStore()
</script>

<template>
  <div class="flex flex-col">
    <h3 class="mb-4 text-2xl">
      {{ t('pages.settings.graphemes') }}
    </h3>
    <div class="grid mx-auto w-[80vw] gap-12">
      <label v-for="(_, grapheme) in store.graphemeSettings" :key="grapheme" class="flex items-baseline gap-4 text-4xl">
        <input v-model="store.graphemeSettings[grapheme]" type="checkbox">
        {{ grapheme }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
}

input {
  transform: scale(2);
}
</style>
