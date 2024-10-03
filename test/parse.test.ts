import { describe, expect, it } from 'vitest'
import { parseGraphemeString } from '../src/utils/parse'

describe('parseGraphemeString', () => {
  it('should parse a string', () => {
    expect(parseGraphemeString('<sch>jgbdwslm<ch>rkptfzhnyxvc<qu><sp><st>')).toEqual([
      'sch',
      'j',
      'g',
      'b',
      'd',
      'w',
      's',
      'l',
      'm',
      'ch',
      'r',
      'k',
      'p',
      't',
      'f',
      'z',
      'h',
      'n',
      'y',
      'x',
      'v',
      'c',
      'qu',
      'sp',
      'st',
    ])
  })
})
