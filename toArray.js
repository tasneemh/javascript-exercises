//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array

const toArray = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
};
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));
