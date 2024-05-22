
export const socketsort = (numbers: number[]): number[] => {
  const sockets: number[] = []
  const min = numbers.reduce((acc, n) => n < acc ? n : acc, Infinity)
  const diff = min < 0 ? -min : 0

  numbers.forEach(n => {
    if (sockets[n + diff]) {
      sockets[n + diff]++
    } else {
      sockets[n + diff] = 1
    }
  })

  const sorted = sockets.reduce<number[]>((acc, socket, index) => {
    if (socket) {
      const nums = new Array(socket).fill(index - diff)
      return [...acc, ...nums]
    } else {
      return acc
    }
  }, [])

  return sorted
}

