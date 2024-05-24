import { mapArray } from './arrayManipulationWithGenerics'

describe('test cases Typescript', () => {
  it('mapArray: Array Manipulation With Generics', () => {
    const numbers = [1, 2, 3]
    const doubledNumbers = mapArray(numbers, (num: number) => num * 2)

    const strings = ['hello', 'world']
    const capitalizedStrings = mapArray(strings, (str: string) => str.toUpperCase())

    expect(doubledNumbers).toEqual([2, 4, 6])
    expect(capitalizedStrings).toEqual(['HELLO', 'WORLD'])
  })
})
