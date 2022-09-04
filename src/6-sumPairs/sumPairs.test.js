import { describe, expect, it } from 'vitest'
import { sumPairs } from './sumPairs.js'
import { arr1, arr2, arr3, arr4, arr5 } from './constants.js'

describe('sumPairs', () => {
  it('should throw error if array is not provided', () => {
    expect(() => sumPairs()).toThrow()
  })
  it('should throw error if array is empty', () => {
    expect(() => sumPairs([])).toThrow()
  })
  it('should throw error if array is provided with less of two values', () => {
    expect(() => sumPairs([1])).toThrow()
  })
  it('should throw error if array values is not numbers', () => {
    expect(() => sumPairs(['1', 'a'])).toThrow()
  })
  it('should throw error if result is not provided', () => {
    expect(() => sumPairs([1, 2])).toThrow()
  })
  it('should throw error if result is not a number', () => {
    expect(() => sumPairs([1, 2], 'a')).toThrow()
  })

  it('should return [3,7] with result 10', () => {
    expect(sumPairs(arr1, 10)).toEqual([3, 7])
  })

  it('should return null with result 10', () => {
    expect(sumPairs(arr2, 10)).toEqual(null)
  })

  it('should return [2,2] with result 4', () => {
    expect(sumPairs(arr3, 4)).toEqual([2, 2])
  })

  it('should return [6,2] with result 8', () => {
    expect(sumPairs(arr4, 8)).toEqual([6, 2])
  })

  it('should return [1,5] with result 6', () => {
    expect(sumPairs(arr5, 6)).toEqual([1, 5])
  })
})
