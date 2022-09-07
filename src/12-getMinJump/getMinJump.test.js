import { describe, expect, it } from 'vitest'
import { getMinJump } from './getMinJump.js'
import { obstacles1, obstacles2, obstacles3, obstacles4, obstacles5, res1, res2, res3, res4, res5 } from './constants.js'

describe('getMinJump', () => {
  it('should throw error if parameter obstacles is not provided', () => {
    expect(() => getMinJump()).toThrow()
  })
  it('should throw error if parameter obstacles is not an array', () => {
    expect(() => getMinJump('a')).toThrow()
  })
  it('should throw error if parameter obstacles is not have values', () => {
    expect(() => getMinJump([])).toThrow()
  })
  it('should throw error if parameter obstacles values is not a number', () => {
    expect(() => getMinJump(['a'])).toThrow()
  })

  it('test1', () => {
    expect(getMinJump(obstacles1)).toBe(res1)
  })
  it('test2', () => {
    expect(getMinJump(obstacles2)).toBe(res2)
  })
  it('test3', () => {
    expect(getMinJump(obstacles3)).toBe(res3)
  })
  it('test4', () => {
    expect(getMinJump(obstacles4)).toBe(res4)
  })
  it('test5', () => {
    expect(getMinJump(obstacles5)).toBe(res5)
  })
})
