import { describe, expect, it } from 'vitest'
import { canCarry } from './canCarry.js'
import { test1P1, test1P2, test2P1, test2P2, test3P1, test3P2, test4P1, test4P2, test5P1, test5P2, test6P1, test6P2 } from './constants.js'

describe('canCarry', () => {
  it('should throw error if parameter capacity is not provided', () => {
    expect(() => canCarry()).toThrow()
  })
  it('should throw error if parameter capacity is not a number', () => {
    expect(() => canCarry('a')).toThrow()
  })
  it('should throw error if parameter trip is not a provided', () => {
    expect(() => canCarry(1)).toThrow()
  })
  it('should throw error if parameter trip is not an array', () => {
    expect(() => canCarry(1, 1)).toThrow()
  })
  it('should throw error if parameter trip not have value', () => {
    expect(() => canCarry(1, [])).toThrow()
  })
  it('should throw error if values of trip is not an array', () => {
    expect(() => canCarry(1, [1])).toThrow()
  })
  it('should throw error if values of trip is an empty array', () => {
    expect(() => canCarry(1, [[]])).toThrow()
  })
  it('should throw error if trip values do not be an array of numbers', () => {
    expect(() => canCarry(1, [['a']])).toThrow()
  })

  it('test1', () => {
    expect(canCarry(test1P1, test1P2)).toBeFalsy()
  })
  it('test2', () => {
    expect(canCarry(test2P1, test2P2)).toBeTruthy()
  })
  it('test3', () => {
    expect(canCarry(test3P1, test3P2)).toBeTruthy()
  })
  it('test4', () => {
    expect(canCarry(test4P1, test4P2)).toBeTruthy()
  })
  it('test5', () => {
    expect(canCarry(test5P1, test5P2)).toBeFalsy()
  })
  it('test6', () => {
    expect(canCarry(test6P1, test6P2)).toBeFalsy()
  })
})
