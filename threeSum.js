/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = []
Output: []

Input: nums = [0]
Output: []
*/

const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  console.log("nums: ", nums);
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    //console.log("i: ", i);
    for (let j = i + 1; j < nums.length; j++) {
      //console.log("j: ", j);
      for (let k = i + 2; k < nums.length; k++) {
        //console.log("k: ", k);
        if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            arr.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return arr;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
