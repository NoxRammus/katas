export function addAllNumbers(numbers: number[]): number {
  return numbers.reduce((acc, number) => acc + number, 0)
}
