import { fibonacciDynamic, fibonacciDynamicRecursive, fibonacciFormula, fibonacciRecursive } from './fibonacci'
import { measure } from '../tools/performance'

describe('test cases Recursion and Dynamic', () => {
  it('should solve Fibonacci with recursion', () => {
    expect(fibonacciRecursive(5)).toEqual(5)
    expect(fibonacciRecursive(10)).toEqual(55)
    expect(fibonacciRecursive(20)).toEqual(6765)

    measure(fibonacciRecursive, 20)
  })

  it('should solve Fibonacci with the formula (aprox)', () => {
    expect(fibonacciFormula(5)).toEqual(5)
    expect(fibonacciFormula(10)).toEqual(55)
    expect(fibonacciFormula(20)).toEqual(6765)
    expect(fibonacciFormula(70)).toEqual(190392490709135)

    measure(fibonacciFormula, 200)
  })

  it('should solve Fibonacci with dynamic programming with recursion', () => {
    const fibonacci = fibonacciDynamicRecursive()
    expect(fibonacci(5)).toEqual(5)
    expect(fibonacci(10)).toEqual(55)
    expect(fibonacci(20)).toEqual(6765)
    expect(fibonacci(70)).toEqual(190392490709135)

    measure(fibonacci, 200)
  })

  it('should solve Fibonacci with dynamic programming', () => {
    const fibonacci = fibonacciDynamic()
    expect(fibonacci(5)).toEqual(5)
    expect(fibonacci(10)).toEqual(55)
    expect(fibonacci(20)).toEqual(6765)
    expect(fibonacci(70)).toEqual(190392490709135)

    measure(fibonacci, 200)
  })
})
