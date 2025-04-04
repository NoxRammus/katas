import { describe, it, expect } from 'vitest'
import { fizzBuzz } from './nox.fizz-buzz'

describe('fizzBuzz', () => {
  it('should replace the 3 by fizz', () => {
    const given = 3

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should replace the 5 by buzz', () => {
    const given = 5

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace all numbers whose modulus is 0 when divided by 3', () => {
    const given = 6

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz'])
  })

  it('should replace all numbers whose modulus is 0 when divided by 3 and 5 to fizzbuzz', () => {
    const given = 15
    const result = fizzBuzz(given)
    expect(result).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
