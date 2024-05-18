// Source: https://leetcode.com/problems/contains-duplicate/description/

const containsDuplicate = function(nums) {
  const duplicated = {}
  for(let i = 0; i < nums.length; i++) {
    if(duplicated[nums[i]]) {
      return true
    }else{
      duplicated[nums[i]] = true
    }
  }
  return false
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,0,1,1,3,3,4,3,2,4,2]))
