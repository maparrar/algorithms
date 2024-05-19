import { measure } from '../tools/performance'
import { quicksort, quicksortPivot0, quicksortRefactored } from './quicksort'

const elementCount = 1000
const bigArrayWithoutDuplicates = Array.from({ length: elementCount }, (_, i) => i + 1)
const bigArrayWithDuplicates = [...bigArrayWithoutDuplicates, 1]

describe('test cases Sorting: quicksort', () => {
  describe('quicksort', () => {
    it('quicksort: should sort array', () => {
      expect(quicksort([4, 3, 0, 1])).toEqual([0, 1, 3, 4])
      expect(quicksort([10, 0, 0, 0, 1])).toEqual([0, 0, 0, 1, 10])
      expect(quicksort([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5])
      expect(quicksort([23, 45, 17, 89, 62, 11, 34, 90])).toEqual([11, 17, 23, 34, 45, 62, 89, 90])

      measure(quicksort, bigArrayWithDuplicates)
    })
  })

  describe('quicksortRefactored', () => {
    it('quicksortRefactored: should sort array', () => {
      expect(quicksortRefactored([4, 3, 0, 1])).toEqual([0, 1, 3, 4])
      expect(quicksortRefactored([10, 0, 0, 0, 1])).toEqual([0, 0, 0, 1, 10])
      expect(quicksortRefactored([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5])
      expect(quicksortRefactored([23, 45, 17, 89, 62, 11, 34, 90])).toEqual([11, 17, 23, 34, 45, 62, 89, 90])

      measure(quicksortRefactored, bigArrayWithDuplicates)
    })
  })

  describe('quicksortPivot0', () => {
    it('quicksortPivot0: should sort array', () => {
      expect(quicksortPivot0([4, 3, 0, 1])).toEqual([0, 1, 3, 4])
      expect(quicksortPivot0([10, 0, 0, 0, 1])).toEqual([0, 0, 0, 1, 10])
      expect(quicksortPivot0([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5])
      expect(quicksortPivot0([23, 45, 17, 89, 62, 11, 34, 90])).toEqual([11, 17, 23, 34, 45, 62, 89, 90])

      measure(quicksortPivot0, bigArrayWithDuplicates)
    })
  })
})
