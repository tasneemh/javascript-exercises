const minValues = (numbers) => {
  const min = numbers.reduce((acc, cv) => {
    if (cv < acc) {
      acc = cv;
    }
    return acc;
  }, numbers[0]);
  return min;
};
console.log(minValues([1260, 490, 599, 1400, 820]));
