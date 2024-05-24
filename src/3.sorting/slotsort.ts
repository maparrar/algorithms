// This is a version of Pidgeon Sort


export const slotsort = (numbers: number[]): number[] => {
  const slots: number[] = []
  // O(n): find min to calculate offset in slots indexes (for negative numbers)
  const min = numbers.reduce((acc, n) => n < acc ? n : acc, Infinity)
  const offset = min < 0 ? -min : 0

  // O(n): assign each number to its slot, adding occurrences for repeated numbers 
  numbers.forEach(n => {
    if (slots[n + offset]) {
      slots[n + offset]++
    } else {
      slots[n + offset] = 1
    }
  })

  // O(n+k): iterate over slots ignoring undefined indexes and removing offset
  const sorted = slots.reduce<number[]>((acc, slot, index) => {
    if (slot) {
      const nums = new Array(slot).fill(index - offset)
      return [...acc, ...nums]
    } else {
      return acc
    }
  }, [])

  return sorted
}

