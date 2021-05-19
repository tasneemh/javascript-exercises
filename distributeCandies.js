const removeRepetitiveElements = (candyType) => {
  const result = candyType.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  const arr = Object.keys(result);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(Number(arr[i]));
  }
  return res;
};
const distributeCandies = (candyType) => {
  const candies = candyType.length / 2;
  console.log(candies);
  const arr = removeRepetitiveElements(candyType);
};
console.log(removeRepetitiveElements([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
