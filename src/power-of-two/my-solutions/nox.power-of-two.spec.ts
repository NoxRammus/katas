import { describe, it, expect } from 'vitest'
import { powerOfTwo } from './nox.power-of-two'

describe('The powerOfTwo function', () => {
  describe('when there are multiple items in the array', () => {
    it('should return an array with all items raised to the power of two', () => {
      const numbers = [2, 5, 10]

      const result = powerOfTwo(numbers)

      expect(result).toStrictEqual([4, 25, 100])
    })
  })

  describe('when there is a single item in the array', () => {
    it('should return an array with all items raised to the power of two', () => {
      const numbers = [100]

      const result = powerOfTwo(numbers)

      expect(result).toStrictEqual([10000])
    })
  })

  describe('when there are negative items in the array', () => {
    it('should return an array with all items raised to the power of two', () => {
      const numbers = [-2, -5, -10]

      const result = powerOfTwo(numbers)

      expect(result).toStrictEqual([4, 25, 100])
    })
  })
})
