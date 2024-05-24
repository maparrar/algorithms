import { measure } from '../tools/performance'
import { findMissingInteger, findMissingIntegerRefactored } from './findMissingInteger'

const elementCount = 1000
const bigArrayWithoutDuplicates = Array.from({ length: elementCount }, (_, i) => i + 1)
const bigArrayWithDuplicates = [...bigArrayWithoutDuplicates, 1]

describe('test cases Arrays: Find Missing Integer', () => {
  describe('findMissingInteger', () => {
    it('findMissingInteger: should sort array', () => {
      expect(findMissingInteger([4, 3, 1, 5])).toEqual(2)
      expect(findMissingInteger([])).toEqual(1)
      expect(findMissingInteger([1])).toEqual(2)
      expect(findMissingInteger([1, 3, 2, 4])).toEqual(5)
      expect(findMissingInteger([2, 3, 4])).toEqual(1)

      measure(findMissingInteger, bigArrayWithDuplicates)
    })
  })

  describe('findMissingIntegerRefactored', () => {
    it('findMissingIntegerRefactored: should sort array', () => {
      expect(findMissingIntegerRefactored([4, 3, 1, 5])).toEqual(2)
      expect(findMissingIntegerRefactored([])).toEqual(1)
      expect(findMissingIntegerRefactored([1])).toEqual(2)
      expect(findMissingIntegerRefactored([1, 3, 2, 4])).toEqual(5)
      expect(findMissingIntegerRefactored([2, 3, 4])).toEqual(1)

      measure(findMissingIntegerRefactored, bigArrayWithDuplicates)
    })
  })
})
