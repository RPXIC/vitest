import { describe, expect, it } from 'vitest'
import { learn } from './learn.js'
import { test1P1, test1P2, test2P1, test2P2, test3P1, test3P2, test4P1, test4P2, test5P1, test5P2, test6P1, test6P2, test7P1, test7P2 } from './constants.js'
import { res1, res2, res3, res4, res5, res6, res7 } from './constants.js'

describe('learn', () => {
  it('should throw error if parameter time is not provided', () => {
    expect(() => learn()).toThrow()
  })
  it('should throw error if parameter time is not a number', () => {
    expect(() => learn('a')).toThrow()
  })

  it('should throw error if parameter courses is not provided', () => {
    expect(() => learn(1)).toThrow()
  })
  it('should throw error if parameter courses is not an array', () => {
    expect(() => learn(1, 1)).toThrow()
  })
  it('should throw error if parameter courses length is lower than 2', () => {
    expect(() => learn(1, [1])).toThrow()
  })
  it('should throw error if values of courses is not a number', () => {
    expect(() => learn(1, ['1', '2'])).toThrow()
  })

  it('test1', () => {
    expect(learn(test1P1, test1P2)).toStrictEqual(res1)
  })
  it('test2', () => {
    expect(learn(test2P1, test2P2)).toStrictEqual(res2)
  })
  it('test3', () => {
    expect(learn(test3P1, test3P2)).toStrictEqual(res3)
  })
  it('test4', () => {
    expect(learn(test4P1, test4P2)).toStrictEqual(res4)
  })
  it('test5', () => {
    expect(learn(test5P1, test5P2)).toStrictEqual(res5)
  })
  it('test6', () => {
    expect(learn(test6P1, test6P2)).toStrictEqual(res6)
  })
  it('test7', () => {
    expect(learn(test7P1, test7P2)).toStrictEqual(res7)
  })
})
