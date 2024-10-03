import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGraphemesStore = defineStore('graphemes', () => {
  const allGraphemes = readonly(reactive({
    byType: {
      vowels: parseGraphemeString('aeiou<au><eu><ei>äöü'),
      consonants: parseGraphemeString('<sch>jgbdwslm<ch>rkptfzhnyxvc<qu><sp><st>'),
    },
    byLevel: {
      1: parseGraphemeString('loamist'),
      2: parseGraphemeString('endupk'),
      3: parseGraphemeString('bf<ei>rhw'),
      4: parseGraphemeString('g<au><sch><ie><z><eu><ch>'),
      5: parseGraphemeString('<sp><st>äöü<ng><äu>vj'),
      6: parseGraphemeString('<nk>ßxyc<ck><qu>'),
    },
  }))

  const graphemeSettings = ref<Record<string, boolean>>({
    l: true,
    o: true,
    a: true,
    m: true,
  })

  for (const grapheme of allGraphemes.byType.vowels.concat(allGraphemes.byType.consonants).concat(allGraphemes.byLevel[1]).concat(allGraphemes.byLevel[2]).concat(allGraphemes.byLevel[3]).concat(allGraphemes.byLevel[4]).concat(allGraphemes.byLevel[5]).concat(allGraphemes.byLevel[6])) {
    if (graphemeSettings.value[grapheme] === undefined) {
      graphemeSettings.value[grapheme] = false
    }
  }

  const activeGraphemes = computed(() => ({
    byType: {
      vowels: allGraphemes.byType.vowels.filter(v => graphemeSettings.value[v]),
      consonants: allGraphemes.byType.consonants.filter(c => graphemeSettings.value[c]),
    },
    byLevel: {
      1: allGraphemes.byLevel[1].filter(g => graphemeSettings.value[g]),
      2: allGraphemes.byLevel[2].filter(g => graphemeSettings.value[g]),
      3: allGraphemes.byLevel[3].filter(g => graphemeSettings.value[g]),
      4: allGraphemes.byLevel[4].filter(g => graphemeSettings.value[g]),
      5: allGraphemes.byLevel[5].filter(g => graphemeSettings.value[g]),
      6: allGraphemes.byLevel[6].filter(g => graphemeSettings.value[g]),
    },
  }))

  const buildSyllableBound = (patterns: string, capitalize?: boolean) => buildSyllable(patterns, capitalize, activeGraphemes.value.byType)

  const buildWordBound = (wordPatterns: string, capitalize?: boolean) => buildWord(wordPatterns, capitalize, activeGraphemes.value.byType)

  return { allGraphemes, graphemeSettings, activeGraphemes, buildSyllable: buildSyllableBound, buildWord: buildWordBound }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGraphemesStore as any, import.meta.hot))
