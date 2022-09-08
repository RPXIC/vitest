import { describe, expect, it } from 'vitest'
import { checkSledJump } from './checkSledJump.js'
import { test1, test2, test3, test4, test5, test6, test7, res1, res2, res3, res4, res5, res6, res7 } from './constants.js'

describe('checkSledJump', () => {
  it('should throw error if parameter heights is not provided', () => {
    expect(() => checkSledJump()).toThrow()
  })
  it('should throw error if parameter heights is not an array', () => {
    expect(() => checkSledJump('a')).toThrow()
  })
  it('should throw error if parameter heights is empty', () => {
    expect(() => checkSledJump([])).toThrow()
  })
  it('should throw error if parameter heights is lower than 3 values', () => {
    expect(() => checkSledJump([1, 2])).toThrow()
  })
  it('should throw error if parameter heights is not an array of number', () => {
    expect(() => checkSledJump(['a', 'b'])).toThrow()
  })

  it('test1', () => {
    expect(checkSledJump(test1)).toBe(res1)
  })
  it('test2', () => {
    expect(checkSledJump(test2)).toBe(res2)
  })
  it('test3', () => {
    expect(checkSledJump(test3)).toBe(res3)
  })
  it('test4', () => {
    expect(checkSledJump(test4)).toBe(res4)
  })
  it('test5', () => {
    expect(checkSledJump(test5)).toBe(res5)
  })
  it('test6', () => {
    expect(checkSledJump(test6)).toBe(res6)
  })
  it('test7', () => {
    expect(checkSledJump(test7)).toBe(res7)
  })
})
