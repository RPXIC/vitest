import { describe, expect, it } from 'vitest'
import { shouldBuyFidelity } from './shouldBuyFidelity.js'

describe('shouldBuyFidelity', () => {
  it('should throw error if param is not provided', () => {
    expect(() => shouldBuyFidelity()).toThrow()
  })
  it('should throw error if param is not a number', () => {
    expect(() => shouldBuyFidelity('1')).toThrow()
  })

  it('should return false if i buy 3 tickets with fidelity subscription', () => {
    expect(shouldBuyFidelity(3)).toBeFalsy()
  })
  it('should return true if i buy 100 tickets with fidelity subscription', () => {
    expect(shouldBuyFidelity(100)).toBeTruthy()
  })
})
