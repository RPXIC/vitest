import { describe, expect, it } from 'vitest'
import { missingReinder } from './missingReinder.js'
import { test1, test2, test3, test4, test5, test6, res1, res2, res3, res4, res5, res6 } from './constants.js'

describe('missingReinder', () => {
  it('should throw error if parameter ids is not provided', () => {
    expect(() => missingReinder()).toThrow()
  })
  it('should throw error if parameter ids is not an array', () => {
    expect(() => missingReinder('a')).toThrow()
  })
  it('should throw error if parameter ids is empty', () => {
    expect(() => missingReinder([])).toThrow()
  })
  it('should throw error if parameter ids is not an array of number', () => {
    expect(() => missingReinder(['a', 'b'])).toThrow()
  })

  it('test1', () => {
    expect(missingReinder(test1)).toBe(res1)
  })
  it('test2', () => {
    expect(missingReinder(test2)).toBe(res2)
  })
  it('tes3', () => {
    expect(missingReinder(test3)).toBe(res3)
  })
  it('test4', () => {
    expect(missingReinder(test4)).toBe(res4)
  })
  it('test5', () => {
    expect(missingReinder(test5)).toBe(res5)
  })
  it('test6', () => {
    expect(missingReinder(test6)).toBe(res6)
  })
})
