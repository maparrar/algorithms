import { measure } from '../../tools/performance'
import { socketsort } from './socketsort'

const elementCount = 1000
const bigArrayWithoutDuplicates = Array.from({ length: elementCount }, (_, i) => i + 1)
const bigArrayWithDuplicates = [...bigArrayWithoutDuplicates, 1]

describe('test cases Sorting: socketsort', () => {
  describe('socketsort', () => {
    it('socketsort: should sort array', () => {
      expect(socketsort([3, 4, 4, -3, 0, 1])).toEqual([-3, 0, 1, 3, 4, 4])
      expect(socketsort([3, 4, 3, 0, 1])).toEqual([0, 1, 3, 3, 4])
      expect(socketsort([-100, 4, 3, 0, 1])).toEqual([-100, 0, 1, 3, 4])
      expect(socketsort([10, 0, 0, 0, 1])).toEqual([0, 0, 0, 1, 10])
      expect(socketsort([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5])
      expect(socketsort([23, 45, 17, 89, 62, 11, 34, 90])).toEqual([11, 17, 23, 34, 45, 62, 89, 90])

      measure(socketsort, bigArrayWithDuplicates)
    })
  })
})
