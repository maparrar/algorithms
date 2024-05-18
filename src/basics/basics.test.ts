import { sum } from './sum'

describe('test cases for basic functions', () => {
  describe('testing sum.ts', () => {
    it('should sum a + b', () => {
      expect(sum(3, 5)).toEqual(8)
    })
  })
})
