// Source: https://leetcode.com/problems/move-zeroes/description/

const moveZeroes = function(nums) {
  let zeroes = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.splice(i, 1)
      zeroes++
      i--
    }
  }
  return nums.concat(new Array(zeroes).fill(0))
}

//Changed because leetcode.com doesn't support new Array(zeroes).fill(0)
const moveZeroes2 = function(nums) {
  let length = nums.length
  for(let i = 0; i < length; i++) {
    if(nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      length--
    }
  }
  return nums
}

console.log(moveZeroes2([0, 1, 0, 3, 12]))
console.log('=============')
console.log(moveZeroes2([0, 0, 0, 0, 1, 0, 3, 12]))
console.log('=============')
console.log(moveZeroes2([1, 0, 0, 0, 0, 0, 0, 0, 0, 2]))
console.log('=============')
