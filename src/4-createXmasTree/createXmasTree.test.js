import { describe, expect, it } from 'vitest'
import { createXmasTree } from './createXmasTree.js'
import { treeWithFiveRows } from './constants'

describe('createXmasTree', () => {
  it('should throw an error if not parameter provided', () => {
    expect(() => createXmasTree()).toThrow()
  })
  it('should not match a tree with different rows', () => {
    expect(createXmasTree(3)).not.toStrictEqual(treeWithFiveRows)
  })
  it('should match return a tree with five rows', () => {
    expect(createXmasTree(5)).toStrictEqual(treeWithFiveRows)
  })
})
