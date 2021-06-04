const removeDuplicates = (arr) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }
  const arr2 = Object.keys(result);
  const arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(Number(arr2[i]));
  }
  return arr3;
};
console.log(removeDuplicates([1, 1, 2]));
