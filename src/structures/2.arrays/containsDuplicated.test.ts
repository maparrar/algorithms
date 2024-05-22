import { measure } from '../../tools/performance'
import { containsDuplicate, containsDuplicateHash, containsDuplicateSet } from './containsDuplicated'

const elementCount = 100000
const bigArrayWithoutDuplicates = Array.from({ length: elementCount }, (_, i) => i + 1)
const bigArrayWithDuplicates = [...bigArrayWithoutDuplicates, 1]

describe('test cases Arrays: Contain Duplicates', () => {
  describe('containsDuplicate', () => {
    it('should identify is an array has duplicates', () => {
      expect(containsDuplicate([1,2,3,1])).toBeTruthy()
      expect(containsDuplicate([1,2,3,4])).toBeFalsy()
      expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy()
      expect(containsDuplicate([1,0,1,1,3,3,4,3,2,4,2])).toBeTruthy()

      measure(containsDuplicate, bigArrayWithDuplicates)
    })
  })

  describe('containsDuplicateHash', () => {
    it('should identify is an array has duplicates', () => {
      expect(containsDuplicateHash([1,2,3,1])).toBeTruthy()
      expect(containsDuplicateHash([1,2,3,4])).toBeFalsy()
      expect(containsDuplicateHash([1,1,1,3,3,4,3,2,4,2])).toBeTruthy()
      expect(containsDuplicateHash([1,0,1,1,3,3,4,3,2,4,2])).toBeTruthy()

      measure(containsDuplicateHash, bigArrayWithDuplicates)
    })
  })

  describe('containsDuplicateSet', () => {
    it('should identify is an array has duplicates', () => {
      expect(containsDuplicateSet([1,2,3,1])).toBeTruthy()
      expect(containsDuplicateSet([1,2,3,4])).toBeFalsy()
      expect(containsDuplicateSet([1,1,1,3,3,4,3,2,4,2])).toBeTruthy()
      expect(containsDuplicateSet([1,0,1,1,3,3,4,3,2,4,2])).toBeTruthy()
      expect(containsDuplicateSet(bigArrayWithoutDuplicates)).toBeFalsy()
      expect(containsDuplicateSet(bigArrayWithDuplicates)).toBeTruthy()

      measure(containsDuplicateSet, bigArrayWithDuplicates)
    })
  })
})
