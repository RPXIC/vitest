import { describe, expect, it } from 'vitest'
import { getCoins } from './getCoins.js'
import { test1, test2, test3, test4, test5, result1, result2, result3, result4, result5 } from './constants.js'

describe('getCoins', () => {
  it('should throw error if param is not provided', () => {
    expect(() => getCoins()).toThrow()
  })
  it('should throw error if param is not a number', () => {
    expect(() => getCoins('1')).toThrow()
  })

  it('should test number should match with array result', () => {
    expect(getCoins(test1)).toStrictEqual(result1)
  })
  it('should test number should match with array result', () => {
    expect(getCoins(test2)).toStrictEqual(result2)
  })
  it('should test number should match with array result', () => {
    expect(getCoins(test3)).toStrictEqual(result3)
  })
  it('should test number should match with array result', () => {
    expect(getCoins(test4)).toStrictEqual(result4)
  })
  it('should test number should match with array result', () => {
    expect(getCoins(test5)).toStrictEqual(result5)
  })
})
