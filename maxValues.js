const maxValues = (numbers) => {
  const max = numbers.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, numbers[0]);
  return max;
};
console.log(maxValues([1260, 490, 599, 1400, 820]));
