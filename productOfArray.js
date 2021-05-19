/*
Given an array of integers called nums, return an array of integers called answers of the same length, in which answers[i] is the product of all elements of the input array except nums[i].
Example 1:
Input: nums = [1,2,3,4]
Output: answers = [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: answers = [0,0,9,0,0]
*/

const profuctOfArrays = (nums) => {
  const answers = [];
  nums.forEach((num, numIndex) => {
    let prod = 1;
    nums.map((element, elementIndex) => {
      if (numIndex !== elementIndex) {
        prod *= element;
      }
    });
    answers.push(prod);
    return prod;
  });
  return answers;
};
console.log(profuctOfArrays([1, 2, 3, 4]));
/*
const productOfArrays = (nums) => {
  let count = 0;
  let answers = [];
  while (count < nums.length) {
    let prod = 1;
    for (let i = 0; i < nums.length; i++) {
      if (i !== count) {
        prod = prod * nums[i];
      }
    }
    if (prod === -0) {
      prod = 0;
    } else {
      prod = prod;
    }
    answers.push(prod);
    count++;
  }
  return answers;
};
console.log(productOfArrays([1, 2, 3, 4]));
console.log(productOfArrays([-1, 1, 0, -3, 3]));
*/
