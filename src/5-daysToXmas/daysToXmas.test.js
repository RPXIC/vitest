import { describe, expect, it } from 'vitest'
import { daysToXmas } from './daysToXmas.js'
import { date24DaysBefore, date1DayAfter, xmasDate, date1DayBefore, date1DayBefore2, date5DaysBefore } from './constants.js'

describe('daysToXmas', () => {
  it('parameter throw error if parameter is not provided', () => {
    expect(() => daysToXmas()).toThrow()
  })
  it('parameter throw error if parameter is not Date instance', () => {
    expect(() => daysToXmas('date1')).toThrow()
  })
  it('expect to return the correct result', () => {
    expect(daysToXmas(date24DaysBefore)).toBe(24)
    expect(daysToXmas(xmasDate)).toBe(0)
    expect(daysToXmas(date1DayAfter)).toBe(-1)
    expect(daysToXmas(date1DayBefore)).toBe(1)
    expect(daysToXmas(date1DayBefore2)).toBe(1)
    expect(daysToXmas(date5DaysBefore)).toBe(5)
  })
})
