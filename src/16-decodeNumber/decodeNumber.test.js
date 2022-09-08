import { describe, expect, it } from 'vitest'
import { decodeNumber } from './decodeNumber.js'
import { test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12 } from './constants.js'
import { res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12 } from './constants.js'

describe('decodeNumber', () => {
  it('should throw error if parameter symbols is not provided', () => {
    expect(() => decodeNumber()).toThrow()
  })
  it('should throw error if parameter symbols is not string', () => {
    expect(() => decodeNumber(2)).toThrow()
  })

  it('test1', () => {
    expect(decodeNumber(test1)).toBe(res1)
  })
  it('test2', () => {
    expect(decodeNumber(test2)).toBe(res2)
  })
  it('test3', () => {
    expect(decodeNumber(test3)).toBe(res3)
  })
  it('test4', () => {
    expect(decodeNumber(test4)).toBe(res4)
  })
  it('test5', () => {
    expect(decodeNumber(test5)).toBe(res5)
  })
  it('test6', () => {
    expect(decodeNumber(test6)).toBe(res6)
  })
  it('test7', () => {
    expect(decodeNumber(test7)).toBe(res7)
  })
  it('test8', () => {
    expect(decodeNumber(test8)).toBe(res8)
  })
  it('test9', () => {
    expect(decodeNumber(test9)).toBe(res9)
  })
  it('test10', () => {
    expect(decodeNumber(test10)).toBe(res10)
  })
  it('test11', () => {
    expect(decodeNumber(test11)).toBe(res11)
  })
  it('test12', () => {
    expect(decodeNumber(test12)).toBe(res12)
  })
})
