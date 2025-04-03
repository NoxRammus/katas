import { describe, it, expect } from 'vitest'
import { addAllNumbers } from './nox.add-all-numbers'

describe('The addAllNumbers function', () => {
  describe('when there are multiple items in the array', () => {
    it('should return the sum of all items in the array', () => {
      const numbers = [2, 5, 10]

      const result = addAllNumbers(numbers)

      expect(result).toStrictEqual(17)
    })
  })

  describe('when there is a single item in the array', () => {
    it('should return the single number in the array', () => {
      const numbers = [100]

      const result = addAllNumbers(numbers)

      expect(result).toStrictEqual(100)
    })
  })

  describe('when there are negative items in the array', () => {
    it('should return the sum of all items in the array', () => {
      const numbers = [-2, -5, -10]

      const result = addAllNumbers(numbers)

      expect(result).toStrictEqual(-17)
    })
  })
})
