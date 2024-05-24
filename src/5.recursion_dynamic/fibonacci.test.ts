import { fibonacciRecursion } from './fibonacci'
import { measure } from '../tools/performance'

describe('test cases Recursion and Dynamic', () => {
  it('Fibonacci: recursion', () => {
    expect(fibonacciRecursion(5)).toEqual(5)
    expect(fibonacciRecursion(10)).toEqual(55)
    expect(fibonacciRecursion(20)).toEqual(6765)

    measure(fibonacciRecursion, 20)
  })
})
