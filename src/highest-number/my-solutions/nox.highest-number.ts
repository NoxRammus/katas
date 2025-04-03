export function getHighestNumber(numbers: number[]): number {
  let highestNumber = -Infinity

  for (const number of numbers) {
    if (number > highestNumber) {
      highestNumber = number
    }
  }

  return highestNumber
}
