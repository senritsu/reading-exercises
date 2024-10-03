<script setup lang="ts">
const { t } = useI18n()
const store = useGraphemesStore()

const syllables = ref<string[]>([])
const activeIndex = ref(-1)
const counter = ref(0)

function generate() {
  activeIndex.value = -1
  syllables.value = Array.from({ length: 40 }, _ => store.buildSyllable('cv|vc'))
}

generate()

function next() {
  counter.value++
  activeIndex.value = Math.floor(Math.random() * syllables.value.length)
}

onKeyStroke(' ', next)
</script>

<template>
  <ExerciseLayout :counter="counter" @click="next">
    <template #instructions>
      <i18n-t keypath="instructions.grid">
        <template #keys>
          <KeyHint>Space</KeyHint> / <KeyHint>Tap</KeyHint>
        </template>
      </i18n-t>
    </template>

    <div class="grid mx-auto border border-[grey]">
      <span v-for="(syllable, i) in syllables" :key="i" class="flex items-center justify-center border border-[grey] text-[3.5vw]" :class="[activeIndex === i && 'border-[lightskyblue] bg-sky-600']">{{ syllable }}</span>
    </div>
    <div>
      <button class="focus:ring-gray-500; border border-gray-600 rounded-md bg-gray-800 px-4 py-2 text-white active:bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2" @click.stop="generate">
        {{ t('pages.grid.generate') }}
      </button>
    </div>
  </ExerciseLayout>
</template>

<style scoped>
.grid {
  width: 80vw;
  height: 32vw;
  grid-template-columns: repeat(10, 8vw);
  grid-auto-rows: 8vw;
}
</style>
