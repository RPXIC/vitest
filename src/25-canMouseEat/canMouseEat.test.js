import { describe, expect, it } from 'vitest'
import { canMouseEat } from './canMouseEat.js'
import { room, room2, up, down, left, right } from './constants.js'

describe('canMouseEat', () => {
  it('should throw error if parameter direction is not provided', () => {
    expect(() => canMouseEat()).toThrow()
  })
  it('should throw error if parameter direction is not a string', () => {
    expect(() => canMouseEat(2)).toThrow()
  })
  it('should throw error if parameter direction is not a direction', () => {
    expect(() => canMouseEat('up')).toThrow()
  })
  it('should throw error if parameter room is not provided', () => {
    expect(() => canMouseEat('up')).toThrow()
  })
  it('should throw error if parameter room is not an array', () => {
    expect(() => canMouseEat('up', 1)).toThrow()
  })
  it('should throw error if parameter room is an empty array', () => {
    expect(() => canMouseEat('up', [])).toThrow()
  })
  it('should throw error if parameter room values is not an array', () => {
    expect(() => canMouseEat('up', [1])).toThrow()
  })
  it('should throw error if parameter room values do not have values', () => {
    expect(() => canMouseEat('up', [[]])).toThrow()
  })
  it('should throw error if parameter room values do not have string values', () => {
    expect(() => canMouseEat('up', [[2]])).toThrow()
  })

  it('test1', () => {
    expect(canMouseEat(up, room)).toBeFalsy()
    expect(canMouseEat(down, room)).toBeTruthy()
    expect(canMouseEat(right, room)).toBeFalsy()
    expect(canMouseEat(left, room)).toBeFalsy()
  })
  it('test2', () => {
    expect(canMouseEat(up, room2)).toBeFalsy()
    expect(canMouseEat(down, room2)).toBeFalsy()
    expect(canMouseEat(right, room2)).toBeTruthy()
    expect(canMouseEat(left, room2)).toBeFalsy()
  })
})
