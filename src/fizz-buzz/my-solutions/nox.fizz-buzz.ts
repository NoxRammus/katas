export function fizzBuzz(endingNumber: number): (number | string)[] {
  const numberArray = [...Array(endingNumber).keys()].map(i => i + 1)

  return numberArray.map(number => {
    const divisibleBy3 = number % 3 === 0
    const divisibleBy5 = number % 5 === 0

    if (divisibleBy3 && divisibleBy5) {
      return 'fizzbuzz'
    }

    if (divisibleBy3) {
      return 'fizz'
    }

    if (divisibleBy5) {
      return 'buzz'
    }

    return number
  })
}
