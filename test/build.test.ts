import { describe, expect, it } from 'vitest'
import { buildSyllable } from '../src/utils/build'

describe('buildSyllable', () => {
  it('should build valid syllables', () => {
    expect(buildSyllable('cv|cv|vc', undefined, {
      vowels: parseGraphemeString('ao'),
      consonants: parseGraphemeString('lm'),
    })).toHaveLength(2)
  })
})
