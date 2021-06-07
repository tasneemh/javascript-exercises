const returningArray = (arr1, arr2) => {
  let array = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      array.push(arr2[i]);
    }
  }
  return array;
};
const intersect = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    arr = returningArray(nums1, nums2);
  } else {
    arr = returningArray(nums2, nums1);
  }
  return arr;
};
//console.log(intersect([1, 2, 2, 1], [2, 2]));
//console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([3, 1, 2], [1, 1]));
