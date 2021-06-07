const containsDuplicate = (nums) => {
  const result = {};
  let bool = false;
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      result[nums[i]]++;
    } else {
      result[nums[i]] = 1;
    }
  }
  const nums2 = Object.values(result);
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] > 1) {
      bool = true;
    }
  }
  if (bool) {
    return true;
  } else {
    return false;
  }
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
