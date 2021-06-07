const moveZeroes = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      arr.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
