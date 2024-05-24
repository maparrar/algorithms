/*
Source: https://leetcode.com/problems/move-zeroes/description/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/

export const moveZeroes = function(numbers: number[]): number[] {
  let zeroes = 0
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 0) {
      numbers.splice(i, 1)
      zeroes++
      i--
    }
  }
  return numbers.concat(new Array(zeroes).fill(0))
}

//Changed because leetcode.com doesn't support new Array(zeroes).fill(0)
export const moveZeroes2 = function(numbers: number[]): number[] {
  let length = numbers.length
  for(let i = 0; i < length; i++) {
    if(numbers[i] === 0) {
      numbers.splice(i, 1)
      numbers.push(0)
      i--
      length--
    }
  }
  return numbers
}

console.log(moveZeroes2([0, 1, 0, 3, 12]))
console.log('=============')
console.log(moveZeroes2([0, 0, 0, 0, 1, 0, 3, 12]))
console.log('=============')
console.log(moveZeroes2([1, 0, 0, 0, 0, 0, 0, 0, 0, 2]))
console.log('=============')
