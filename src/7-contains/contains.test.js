import { describe, expect, it } from 'vitest'
import { contains } from './contains.js'
import { obj1, obj2 } from './constants.js'

describe('contains', () => {
  it('should throw error if obj is not provided', () => {
    expect(() => contains()).toThrow()
  })
  it('should throw error if obj is not an object', () => {
    expect(() => contains([])).toThrow()
  })
  it('should throw error if el is not provided', () => {
    expect(() => contains({})).toThrow()
  })
  it('should throw error if el is not provided', () => {
    expect(() => contains({}, 1)).toThrow()
  })

  it('should return true if element is found in obj1', () => {
    expect(contains(obj1, 'camiseta')).toBeTruthy()
  })
  it('should return true if element is found in obj2', () => {
    expect(contains(obj2, 'camiseta')).toBeFalsy()
  })
})
