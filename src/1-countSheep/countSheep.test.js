import { describe, expect, it } from 'vitest'
import { sheeps, result, invalidResult } from './constants.js'
import { countSheep } from './countSheep.js'

describe('countSheep', () => {
  it('should throw error if param of array of sheeps is not provided or empty', () => {
    expect(() => countSheep()).toThrow()
    expect(() => countSheep('')).toThrow()
    expect(() => countSheep({})).toThrow()
    expect(() => countSheep([])).toThrow()
  })
  it('should fail with the invalid result', () => {
    expect(countSheep(sheeps)).not.toStrictEqual(invalidResult)
  })
  it('should match with the result', () => {
    expect(countSheep(sheeps)).toStrictEqual(result)
  })
})
