// import { measure } from '../../tools/performance'

import { singleNonDuplicate, singleNonDuplicateOof1space } from './singleNonDuplicate'

// const elementCount = 10000
// const bigArrayWithoutDuplicates = Array.from({ length: elementCount }, (_, i) => i + 1)
// const bigArrayWithDuplicates = [...bigArrayWithoutDuplicates, 1]

describe('test cases Find duplicate: singleNonDuplicate', () => {
  it('singleNonDuplicate: should get the non-duplicated value in a sorted array', () => {
    expect(singleNonDuplicate([1,1,2,3,3,4,4,8,8])).toEqual(2)
    expect(singleNonDuplicate([3,3,7,7,10,11,11])).toEqual(10)
    expect(singleNonDuplicate([3])).toEqual(3)
  })

  it('singleNonDuplicateOof1space: should get the non-duplicated value in a sorted array with O(1) space complexity', () => {
    expect(singleNonDuplicateOof1space([1,1,2,3,3,4,4,8,8])).toEqual(2)
    expect(singleNonDuplicateOof1space([3,3,7,7,10,11,11])).toEqual(10)
    expect(singleNonDuplicateOof1space([3])).toEqual(3)
  })
})
