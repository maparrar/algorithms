// Source: https://leetcode.com/problems/rotate-array/

const rotate = function(nums, k) {
  nums.unshift(...nums.splice(-(k % nums.length), k % nums.length))
}

const array = [1,2,3,1]
rotate([1,2,3,1], 3)
console.log(array)
rotate([1,2,3,1], 6)
console.log(array)

