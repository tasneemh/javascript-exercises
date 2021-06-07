const plusOne = (digits) => {
  const arr = [];
  for (let i = 0; i < digits.length; i++) {
    if (i === digits.length - 1) {
      const str = (digits[digits.length - 1] + 1).toString();
      if (str.length > 1) {
        for (let i = 0; i < str.length; i++) {
          arr.push(Number(str[i]));
        }
      } else {
        arr.push(Number(str));
      }
    } else {
      arr.push(digits[i]);
    }
  }
  return arr;
};
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
//console.log(plusOne([9]));
