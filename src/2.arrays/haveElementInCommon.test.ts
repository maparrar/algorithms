import { checkCommon } from './haveElementInCommon'

describe('test cases Arrays: Have Elements in Common', () => {
  describe('checkCommon', () => {
    it('should identify if two arrays has element in common', () => {
      expect(checkCommon(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])).toBeFalsy()
      expect(checkCommon(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])).toBeTruthy()
      expect(checkCommon(['a', 'd', 'c', 'x'], ['z', 'y', 'l'])).toBeFalsy()
      expect(checkCommon(['a'], [])).toBeFalsy()
    })
  })
})
