// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const measure = <T extends (...args: any[]) => any>(funct: T, ...params: any[]): void => {
  const ini = performance.now()
  funct(...params)
  const end = performance.now()
  console.log('time: ', end - ini)
}
