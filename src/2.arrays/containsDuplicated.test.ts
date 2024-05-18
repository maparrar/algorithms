import { containsDuplicate } from './containsDuplicated'

describe('test cases Arrays: Contain Duplicates', () => {
  describe('containsDuplicate', () => {
    it('should identify is an array has duplicates', () => {
      expect(containsDuplicate([1,2,3,1])).toBeTruthy()
      expect(containsDuplicate([1,2,3,4])).toBeFalsy()
      expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy()
      expect(containsDuplicate([1,0,1,1,3,3,4,3,2,4,2])).toBeTruthy()
    })
  })
})
