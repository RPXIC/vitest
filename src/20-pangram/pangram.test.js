import { describe, expect, it } from 'vitest'
import { pangram } from './pangram.js'
import { test1, test2, test3, test4 } from './constants.js'

describe('pangram', () => {
  it('should throw error if parameter letter is not provided', () => {
    expect(() => pangram()).toThrow()
  })
  it('should throw error if parameter letter is not a string', () => {
    expect(() => pangram(1)).toThrow()
  })

  it('test1', () => {
    expect(pangram(test1)).toBeTruthy()
  })
  it('test2', () => {
    expect(pangram(test2)).toBeTruthy()
  })
  it('test3', () => {
    expect(pangram(test3)).toBeFalsy()
  })
  it('test4', () => {
    expect(pangram(test4)).toBeFalsy()
  })
})
