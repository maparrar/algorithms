
// O(n)
export function haveCommonElements(array1: string[], array2: string[]): boolean {
  let a = array1
  let b = array2
  const existingInA: string[] = new Array(200)
  const existingInB: string[] = new Array(200)

  if(array1.length < array2.length){
    a = array2
    b = array1
  }

  for(let i = 0; i < a.length; i++){
    const codeInA = a[i].toString().charCodeAt(0)
    if(typeof existingInB[codeInA] === 'undefined') {
      existingInA.splice(codeInA, 0, 'true')
    }else{
      return true
    }
    if(i < b.length) {
      const codeInB = b[i].toString().charCodeAt(0) // O(1)
      if (typeof existingInA[codeInB] === 'undefined') {
        existingInB.splice(codeInB, 0, 'true')
      } else {
        return true
      }
    }
  }
  return false
}

export function haveCommonElementsSet(array1: string[], array2: string[]): boolean {
  const concatenated = [...new Set(array1), ...new Set(array2)]
  return new Set(concatenated).size !== concatenated.length
}
