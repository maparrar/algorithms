import { randomIntBetween } from '../../tools/utils'

export const quicksort = (numbers: number[]): number[] => {
  const pivotIndex = randomIntBetween(0, numbers.length - 1)
  const pivot = numbers[pivotIndex]

  const left: number[] = []
  const right: number[] = []

  if (numbers.length <= 1)  {
    return numbers
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i !== pivotIndex) {
      if (numbers[i] <= pivot) {
        left.push(numbers[i])
      } else {
        right.push(numbers[i])
      }
    }
  }

  const sortedLeft = quicksort(left)
  const sortedRight = quicksort(right)

  return [...sortedLeft, pivot, ...sortedRight]
}

export const quicksortRefactored = (numbers: number[]): number[] => {
  const pivotIndex = randomIntBetween(0, numbers.length - 1)
  const left: number[] = []
  const right: number[] = []

  if (numbers.length <= 1)  {
    return numbers
  }

  numbers.forEach((_, i) => {
    if (i !== pivotIndex) {
      if (numbers[i] <= numbers[pivotIndex]) {
        left.push(numbers[i])
      } else {
        right.push(numbers[i])
      }
    }
  })

  return [...quicksortRefactored(left), numbers[pivotIndex], ...quicksortRefactored(right)]
}

export const quicksortPivot0 = (numbers: number[]): number[] => {
  if (numbers.length <= 1)  {
    return numbers
  }

  const left: number[] = []
  const right: number[] = []

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[0]) {
      left.push(numbers[i])
    } else {
      right.push(numbers[i])
    }
  }

  return [...quicksortPivot0(left), numbers[0], ...quicksortPivot0(right)]
}
