import { describe, expect, it } from 'vitest'
import { isValid } from './isValidLetter.js'

describe('isValidLetter', () => {
  it('should return false if letter is not a string', () => {
    expect(isValid(2)).toBe(false)
    expect(isValid(null)).toBe(false)
    expect(isValid(undefined)).toBe(false)
    expect(isValid(true)).toBe(false)
    expect(isValid('rpxi(c)')).toBe(true)
  })
  it('should be valid', () => {
    expect(isValid('bici coche (balón) bici coche peluche')).toBe(true)
    expect(isValid('(muñeca) consola bici')).toBe(true)
  })
  it('should be invalid', () => {
    expect(isValid('bici coche (balón bici coche')).toBe(false)
    expect(isValid('peluche (bici [coche) bici coche balón')).toBe(false)
    expect(isValid('(peluche {) bici')).toBe(false)
    expect(isValid('() bici')).toBe(false)
    expect(isValid('(()) bici')).toBe(false)
  })
})
