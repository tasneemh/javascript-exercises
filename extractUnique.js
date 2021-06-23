const extractUnique = (arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};
console.log(extractUnique([1, 1, 2, 2, 3, 4, 4, 5]));
