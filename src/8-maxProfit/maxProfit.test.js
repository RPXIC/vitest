import { describe, expect, it } from 'vitest'
import { maxProfit } from './maxProfit'
import { pricesAda, pricesBtc, pricesDoge, pricesEth } from './constants.js'

describe('maxProfit', () => {
  it('should throw error if prices param not be provided', () => {
    expect(() => maxProfit()).toThrow()
  })
  it('should throw error if prices param is not an array', () => {
    expect(() => maxProfit(1)).toThrow()
  })
  it('should throw error if prices param is not an array of numbers', () => {
    expect(() => maxProfit(['2', '4'])).toThrow()
  })

  it('test', () => {
    expect(maxProfit(pricesEth)).toBe(60)
  })

  it('test', () => {
    expect(maxProfit(pricesAda)).toBe(-1)
  })

  it('test', () => {
    expect(maxProfit(pricesBtc)).toBe(16)
  })

  it('test', () => {
    expect(maxProfit(pricesDoge)).toBe(-1)
  })
})
