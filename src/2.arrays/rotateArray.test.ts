import { measure } from '../tools/performance'
import { rotateArray } from './rotateArray'

const elementCount = 100000
const bigArray = Array.from({ length: elementCount }, (_, i) => i + 1)

describe('test cases Arrays: rotate arrays', () => {
  describe('containsDuplicate', () => {
    it('should identify is an array has duplicates', () => {
      expect(rotateArray([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4])

      measure(rotateArray, bigArray)
    })
  })
})
