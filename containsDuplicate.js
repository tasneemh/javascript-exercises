const containsDuplicate = (arr) => {
  const result = {};
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }
  const arr2 = Object.values(result);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 1) {
      bool = true;
    }
  }
  if (bool === true) {
    return true;
  } else {
    return false;
  }
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
