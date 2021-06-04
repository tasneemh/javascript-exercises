const rotateArray = (arr, k) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > k) {
      arr2.push(arr[i]);
    }
  }
  console.log(arr2);
  for (let i = 0; i <= k; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
};
//console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1, -100, 3, 99], 2));
//[5,6,7,1,2,3,4]
// 0 1 2 3 4 5 6
