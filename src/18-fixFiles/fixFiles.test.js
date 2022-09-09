import { describe, expect, it } from 'vitest'
import { fixFiles } from './fixFiles.js'
import { test1, test2, test3, test4, res1, res2, res3, res4 } from './constants.js'

describe('fixFiles', () => {
  it('should throw error if parameter files is not provided', () => {
    expect(() => fixFiles()).toThrow()
  })
  it('should throw error if parameter files is not an array', () => {
    expect(() => fixFiles(1)).toThrow()
  })
  it('should throw error if parameter files is empty', () => {
    expect(() => fixFiles([])).toThrow()
  })
  it('should throw error if parameter files is not an array of strings', () => {
    expect(() => fixFiles([1])).toThrow()
  })

  it('test1', () => {
    expect(fixFiles(test1)).toStrictEqual(res1)
  })
  it('test2', () => {
    expect(fixFiles(test2)).toStrictEqual(res2)
  })
  it('test3', () => {
    expect(fixFiles(test3)).toStrictEqual(res3)
  })
  it('test4', () => {
    expect(fixFiles(test4)).toStrictEqual(res4)
  })
})
