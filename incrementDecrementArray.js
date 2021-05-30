// In JavaScript, define a function `foo` which accepts a JavaScript array of integers and returns a new list where elements with an even index are incremented by 1 and elements with an odd index are decremented by 1. Assume 0 is an even number.
// e.g. foo([10, 10, 10, 10, 10]) => [11, 9, 11, 9, 11]

const foo = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(++arr[i]);
    } else {
      newArr.push(--arr[i]);
    }
  }
  return newArr;
};
console.log(foo([10, 10, 10, 10, 10]));
