import { describe, expect, it } from 'vitest'
import { countPackages } from './countPackages.js'
import { test1P1, test1P2, test2P1, test2P2, res1, res2 } from './constants.js'

describe('countPackages', () => {
  it('should throw error if parameter carrier is not provided', () => {
    expect(() => countPackages()).toThrow()
  })
  it('should throw error if parameter carrier is not an array', () => {
    expect(() => countPackages(1)).toThrow()
  })
  it('should throw error if parameter carrier do not have values', () => {
    expect(() => countPackages([])).toThrow()
  })
  it('should throw error if first parameter of carrier is not a string', () => {
    expect(() => countPackages([2, 2, [1]])).toThrow()
  })
  it('should throw error if second parameter of carrier is not a number', () => {
    expect(() => countPackages(['a', '2', []])).toThrow()
  })
  it('should throw error if third parameter of carrier is not an array', () => {
    expect(() => countPackages([['a', 2, 2]], 'a')).toThrow()
  })
  it('should throw error if third parameter of carrier is not an array of strings', () => {
    expect(() => countPackages([['a', 2, [2]]], 'a')).toThrow()
  })

  it('should throw error if parameter carrierID is not provided', () => {
    expect(() => countPackages([['a', 2, ['a']]])).toThrow()
  })
  it('should throw error if parameter carrierID is not a string', () => {
    expect(() => countPackages([['a', 2, ['a']]], 1)).toThrow()
  })

  it('test1', () => {
    expect(countPackages(test1P1, test1P2)).toBe(res1)
  })
  it('test2', () => {
    expect(countPackages(test2P1, test2P2)).toBe(res2)
  })
})
