/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/
/*
const twoSum = (nums, target) => {
  const arr = [];
  nums.forEach((num, numIndex) => {
    nums.map((value, valueIndex) => {
      if (numIndex < valueIndex) {
        if (num + value === target) {
          return arr.push(numIndex, valueIndex);
        }
      }
    });
  });
  return arr;
};*/
//fastest
const twoSum = (nums, target) => {
  const result = {};
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]] === undefined) {
      result[target - nums[i]] = i;
    } else {
      return [result[nums[i]], i];
    }
  }
  //return "No results found";
};
/*
const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
*/
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 1, 4], 6));
console.log(twoSum([3, 3], 6));
