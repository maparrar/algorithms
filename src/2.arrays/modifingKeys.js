const hash = {
  1: 3,
  2: 6
}

console.log(hash)

Object.defineProperty(hash, 5, Object.getOwnPropertyDescriptor(hash, 1))
delete hash[1]

console.log(hash)