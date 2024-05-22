import { measure } from '../../tools/performance'
import { haveCommonElements, haveCommonElementsSet } from './haveElementInCommon'


describe('test cases Arrays: Have Elements in Common', () => {
  describe('haveCommonElements', () => {
    it('should identify if two arrays has element in common', () => {
      expect(haveCommonElements(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])).toBeFalsy()
      expect(haveCommonElements(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])).toBeTruthy()
      expect(haveCommonElements(['a', 'd', 'c', 'x'], ['z', 'y', 'l'])).toBeFalsy()
      expect(haveCommonElements(['a'], [])).toBeFalsy()
      expect(haveCommonElements(['a', 'd'], ['z', 'y', 'l'])).toBeFalsy()
      expect(haveCommonElements(['z', 'd'], ['z', 'y', 'l'])).toBeTruthy()

      measure(haveCommonElements, ['a', 'b', 'c', 'x'], ['z', 'y', 'x'])
    })
  })

  describe('haveCommonElementsSet', () => {
    it('should identify if two arrays has element in common', () => {
      expect(haveCommonElementsSet(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])).toBeFalsy()
      expect(haveCommonElementsSet(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])).toBeTruthy()
      expect(haveCommonElementsSet(['a', 'd', 'c', 'x'], ['z', 'y', 'l'])).toBeFalsy()
      expect(haveCommonElementsSet(['a'], [])).toBeFalsy()
      expect(haveCommonElementsSet(['a', 'd'], ['z', 'y', 'l'])).toBeFalsy()
      expect(haveCommonElementsSet(['z', 'd'], ['z', 'y', 'l'])).toBeTruthy()

      measure(haveCommonElementsSet, ['a', 'b', 'c', 'x'], ['z', 'y', 'x'])
    })
  })
})
