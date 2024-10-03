<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const store = useGraphemesStore()

const lines = ref<string[][][]>([])
function generateLine(count: number, wordPatterns: string, capitalize?: boolean) {
  return Array.from({ length: count }, () => store.buildWord(wordPatterns, capitalize))
}

function generate() {
  lines.value = [
    generateLine(6, 'cv'),
    generateLine(6, 'cv||vc'),
    generateLine(6, 'cvc||vcv'),
    generateLine(6, 'cv||cvc'),
    generateLine(5, 'cv-cv||vc-vc'),
    generateLine(5, 'cv-cv-c||vc-vc-v'),
  ]
}

generate()

onKeyStroke(' ', generate)
</script>

<template>
  <ExerciseLayout @click="generate">
    <template #instructions>
      <i18n-t keypath="instructions.sheet">
        <template #keys>
          <KeyHint>Space</KeyHint> / <KeyHint>Tap</KeyHint>
        </template>
      </i18n-t>
    </template>

    <div class="mx-auto my-6 w-[80vw] flex flex-col">
      <div v-for="(line, lineIndex) of lines" :key="line.join('')">
        <div class="flex justify-between text-xl">
          <div v-for="(word, i) in line" :key="i" class="word text-[4vw]">
            <span v-for="(syllable, j) in word" :key="j">{{ syllable }}</span>
          </div>
        </div>
        <hr v-if="lineIndex < lines.length - 1" class="my-[2vw] border-dark">
      </div>
    </div>
  </ExerciseLayout>
</template>

<style scoped>
.word {
  > span:nth-child(even) {
    color: #3e8ee9;
  }
}
</style>
