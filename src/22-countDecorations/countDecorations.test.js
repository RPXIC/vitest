import { describe, expect, it } from 'vitest'
import { countDecorations } from './countDecorations.js'
import { test1, test2, res1, res2 } from './constants.js'

describe('countDecorations', () => {
  it('should throw error if parameter bigTree is not provided', () => {
    expect(() => countDecorations()).toThrow()
  })
  it('should throw error if parameter bigTree is not an object', () => {
    expect(() => countDecorations(1)).toThrow()
    expect(() => countDecorations([])).toThrow()
    expect(() => countDecorations(null)).toThrow()
  })

  it('test1', () => {
    expect(countDecorations(test1)).toBe(res1)
  })
  it('test2', () => {
    expect(countDecorations(test2)).toBe(res2)
  })
})
