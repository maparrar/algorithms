import { measure } from '../../tools/performance'
import { slotsort } from './slotsort'

const elementCount = 10000
const bigArrayWithoutDuplicates = Array.from({ length: elementCount }, (_, i) => i + 1)
const bigArrayWithDuplicates = [...bigArrayWithoutDuplicates, 1]

describe('test cases Sorting: slotsort', () => {
  describe('slotsort', () => {
    it('slotsort: should sort array', () => {
      expect(slotsort([3, 4, 4, -3, 0, 1])).toEqual([-3, 0, 1, 3, 4, 4])
      expect(slotsort([3, 4, 3, 0, 1])).toEqual([0, 1, 3, 3, 4])
      expect(slotsort([-100, 4, 3, 0, 1])).toEqual([-100, 0, 1, 3, 4])
      expect(slotsort([10, 0, 0, 0, 1])).toEqual([0, 0, 0, 1, 10])
      expect(slotsort([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5])
      expect(slotsort([23, 45, 17, 89, 62, 11, 34, 90])).toEqual([11, 17, 23, 34, 45, 62, 89, 90])
      expect(slotsort([])).toEqual([])
      expect(slotsort([-10])).toEqual([-10])
      expect(slotsort([-5, -2, -8])).toEqual([-8, -5, -2])
      expect(slotsort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2])

      measure(slotsort, bigArrayWithDuplicates)
    })
  })
})
