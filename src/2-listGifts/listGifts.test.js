import { describe, expect, it } from 'vitest'
import { listGifts } from './listGifts.js'
import { letter, result, incorrectResult } from './constants.js'

describe('listGifts', () => {
  it('should throw error if param is not a string', () => {
    expect(() => listGifts()).toThrow()
  })
  it('should fail if letter not match with incorrect result', () => {
    expect(listGifts(letter)).not.toStrictEqual(incorrectResult)
  })
  it('should pass if letter match with correct result', () => {
    expect(listGifts(letter)).toStrictEqual(result)
  })
})
