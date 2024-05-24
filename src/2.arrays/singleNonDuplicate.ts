/*
Source: https://leetcode.com/problems/single-element-in-a-sorted-array/description/

Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
*/

export const singleNonDuplicate = (numbers: number[]): number => {
  const indicator = Math.floor(numbers.length / 2)

  if (numbers.length === 1) {
    return numbers[0]
  } else if (numbers.length === 3) {
    if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
      return numbers[0]
    } else if (numbers[1] !== numbers[0] && numbers[1] !== numbers[2]) {
      return numbers[1]
    } else {
      return numbers[2]
    }
  } else {
    if (indicator % 2 === 0) {
      return singleNonDuplicate(numbers.filter((n, index) => index <= indicator))
    } else {
      return singleNonDuplicate(numbers.filter((n, index) => index > indicator))
    }
  }
}

export const singleNonDuplicateOof1space = (numbers: number[], iniIndex = 0, endIndex = numbers.length - 1): number => {
  const mid = Math.floor((endIndex - iniIndex) / 2)

  // console.log('numbers', numbers)
  console.log('NUMBERS', numbers.filter(n => n >= iniIndex && n <= endIndex))
  console.log('iniIndex', iniIndex)
  console.log('endIndex', endIndex)
  console.log('mid', mid)

  console.log('diffright', endIndex - mid)

  if ((endIndex - iniIndex) === 1) {
    return numbers[iniIndex]
  } else if ((endIndex - iniIndex) === 3) {
    if (numbers[iniIndex] !== numbers[iniIndex + 1] && numbers[iniIndex] !== numbers[iniIndex + 2]) {
      return numbers[iniIndex]
    } else if (numbers[iniIndex + 1] !== numbers[iniIndex] && numbers[iniIndex + 1] !== numbers[iniIndex + 2]) {
      return numbers[iniIndex + 1]
    } else {
      return numbers[iniIndex + 2]
    }
  }


  if ((mid - iniIndex) % 2 === 0) {
    console.log('odd part', numbers.filter(n => n >= iniIndex && n < mid))
    console.log('diff', mid - iniIndex)
    return singleNonDuplicateOof1space(numbers, iniIndex, mid)
  } else if (endIndex - mid % 2 !== 0) {
    console.log('even part', numbers.filter(n => n >= mid && n < endIndex))
    return singleNonDuplicateOof1space(numbers, mid, endIndex)
  }


  
  

  // if (mid -) {
  //   return numbers[0]
  // } else if (numbers.length === 3) {
  //   if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
  //     return numbers[0]
  //   } else if (numbers[1] !== numbers[0] && numbers[1] !== numbers[2]) {
  //     return numbers[1]
  //   } else {
  //     return numbers[2]
  //   }
  // } else {
  //   if (indicator % 2 === 0) {
  //     return singleNonDuplicate(numbers.filter((n, index) => index <= indicator))
  //   } else {
  //     return singleNonDuplicate(numbers.filter((n, index) => index > indicator))
  //   }
  // }

  // return 0
}
