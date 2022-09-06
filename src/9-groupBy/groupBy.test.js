import { describe, expect, it } from 'vitest'
import { groupBy } from './groupBy.js'
import { arr1, arr2, arr3, arr4, arr5 } from './constants.js'

describe('groupBy', () => {
  it('should throw error if collection param is not provided', () => {
    expect(() => groupBy()).toThrow()
  })
  it('should throw error if collection param is not an array', () => {
    expect(() => groupBy('test')).toThrow()
  })
  it('should throw error if it param is not provided', () => {
    expect(() => groupBy([])).toThrow()
  })

  it('order arr1 by length', () => {
    expect(groupBy(arr1, Math.floor)).toStrictEqual({ 6: [6.1, 6.3], 4: [4.2] })
  })
  it('order arr2 by length', () => {
    expect(groupBy(arr2, 'length')).toStrictEqual({ 3: ['one', 'two'], 5: ['three'] })
  })
  it('order arr3 by age', () => {
    expect(groupBy(arr3, 'age')).toStrictEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] })
  })
  it('order arr4 by rating', () => {
    expect(groupBy(arr4, (timestamp) => new Date(timestamp).getFullYear())).toStrictEqual({ 2013: [1363223700000], 2014: [1397639141184] })
  })
  it('order arr5 by rating', () => {
    expect(groupBy(arr5, 'rating')).toStrictEqual({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }]
    })
  })
})
