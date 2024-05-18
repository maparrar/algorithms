// Source: https://leetcode.com/problems/contains-duplicate/description/

export const containsDuplicate = function(nums: number[]): boolean {
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
