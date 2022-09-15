import { describe, expect, it } from 'vitest'
import { canReconfigure } from './canReconfigure.js'
import { from1, from2, from3, from4, from5, to1, to2, to3, to4, to5 } from './constants.js'

describe('canReconfigure', () => {
  it('should throw error if parameter from is not provided', () => {
    expect(() => canReconfigure()).toThrow()
  })
  it('should throw error if parameter from is not a string', () => {
    expect(() => canReconfigure(1)).toThrow()
  })
  it('should throw error if parameter to is not provided', () => {
    expect(() => canReconfigure(1)).toThrow()
  })
  it('should throw error if parameter to is not a string', () => {
    expect(() => canReconfigure('a', 1)).toThrow()
  })

  it('test1', () => {
    expect(canReconfigure(from1, to1)).toBeTruthy()
  })
  it('test2', () => {
    expect(canReconfigure(from2, to2)).toBeFalsy()
  })
  it('test3', () => {
    expect(canReconfigure(from3, to3)).toBeFalsy()
  })
  it('test4', () => {
    expect(canReconfigure(from4, to4)).toBeTruthy()
  })
  it('test5', () => {
    expect(canReconfigure(from5, to5)).toBeFalsy()
  })
})
