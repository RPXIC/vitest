import { describe, expect, it } from 'vitest'
import { wrapGifts } from './wrapGifts.js'
import { test1, test2, test3, res1, res2, res3 } from './constants.js'

describe('getMinJump', () => {
  it('should throw error if parameter gifts is not provided', () => {
    expect(() => wrapGifts()).toThrow()
  })
  it('should throw error if parameter is not an array', () => {
    expect(() => wrapGifts('a')).toThrow()
  })
  it('should throw error if parameter is an empty array', () => {
    expect(() => wrapGifts([])).toThrow()
  })
  it('should throw error if parameter is not an array of strings', () => {
    expect(() => wrapGifts([2, 1])).toThrow()
  })

  it('test1', () => {
    expect(wrapGifts(test1)).toStrictEqual(res1)
  })
  it('test2', () => {
    expect(wrapGifts(test2)).toStrictEqual(res2)
  })
  it('test3', () => {
    expect(wrapGifts(test3)).toStrictEqual(res3)
  })
})
