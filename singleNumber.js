const singleNumber = (nums) => {
  const result = {};
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      result[nums[i]]++;
    } else {
      result[nums[i]] = 1;
    }
  }
  for (let num in result) {
    //console.log("num: ", num);
    if (result[num] === 1) {
      return num;
    }
  }
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
