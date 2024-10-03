function toTitleCase(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function buildSyllable(patterns: string, capitalize: boolean | undefined, { vowels, consonants }: { vowels: string[], consonants: string[] }) {
  const patternOptions = patterns.split('|')
  const pattern = patternOptions[Math.floor(Math.random() * patternOptions.length)]

  const syllable = pattern.split('').map((char) => {
    switch (char) {
      case 'v':
        return vowels[Math.floor(Math.random() * vowels.length)]
      case 'c':
        return consonants[Math.floor(Math.random() * consonants.length)]
      default:
        return char
    }
  }).join('')

  return capitalize ?? Math.random() < 0.5
    ? toTitleCase(syllable)
    : syllable
}

export function buildWord(wordPatterns: string, capitalize: boolean | undefined, { vowels, consonants }: { vowels: string[], consonants: string[] }) {
  const wordPatternOptions = wordPatterns.split('||')
  const wordPattern = wordPatternOptions[Math.floor(Math.random() * wordPatternOptions.length)]

  const syllablePatterns = wordPattern.split('-')
  return syllablePatterns.map((syllablePattern, i) => {
    return buildSyllable(syllablePattern, i === 0 && capitalize, { vowels, consonants })
  })
}
