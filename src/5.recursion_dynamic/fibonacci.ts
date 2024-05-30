// Time: O(2^n) Space: O(n) 
export const fibonacciRecursive = (n: number): number => {
  if (n <= 2 ) {
    return 1
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
  }
}

// Time: O(1) Space: O(1). Warining: it is an approximation 
export const fibonacciFormula = (n: number): number => {
  const sqrt5 = Math.sqrt(5)
  const phi = (1 + sqrt5) / 2
  return Math.round((Math.pow(phi, n) - Math.pow((Math.pow(-phi, -1)), n)) / sqrt5)
}

// Time: O(n) Space: O(n)
export const fibonacciDynamicRecursive = (): (n: number) => number => {
  const cached: number[] = []

  return function fibo (n: number) {
    if (cached[n]) {
      return cached[n]
    } else if (n <= 2 ) {
      return 1
    } else {
      cached[n] = fibo(n - 1) + fibo(n - 2)
      return cached[n]
    }
  }
}

// Time: O(n) Space: O(n)
export const fibonacciDynamic = (): (n: number) => number => {
  const cached: number[] = [0, 1]

  return (n: number) => {
    for (let i = 2; i <= n; i++) {
      cached[i] = cached[i - 1] + cached[i - 2]
    }

    return cached[n]
  }
}
