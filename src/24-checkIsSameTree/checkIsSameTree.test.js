import { describe, expect, it } from 'vitest'
import { checkIsSameTree } from './checkIsSameTree.js'
import { tree, tree2 } from './constants.js'

describe('checkIsSameTree', () => {
  it('should throw error if parameter treeA is not provided', () => {
    expect(() => checkIsSameTree()).toThrow()
  })
  it('should throw error if parameter treeB is not provided', () => {
    expect(() => checkIsSameTree(1)).toThrow()
  })
  it('should throw error if parameter treeA is not an object', () => {
    expect(() => checkIsSameTree(1)).toThrow()
  })
  it('should throw error if parameter treeB is not an object', () => {
    expect(() => checkIsSameTree({ a: 1 }, 1)).toThrow()
  })

  it('test1', () => {
    expect(checkIsSameTree(tree, tree)).toBeTruthy()
  })
  it('test2', () => {
    expect(checkIsSameTree(tree, tree2)).toBeFalsy()
  })
  it('test3', () => {
    expect(checkIsSameTree(tree2, tree)).toBeFalsy()
  })
})
