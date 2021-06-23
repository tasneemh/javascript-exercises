/*
We are required to write a JavaScript function that takes in a string that might contain some numbers embedded inside it.

The function should extract all the numbers from the string return the new number.
*/
const pickNumbers = (s) => {
  const arr = s.split("");
  const filtered = arr.filter((el) => !isNaN(Number(el)));
  return filtered.join("");
};
/*
const pickNumbers = (s) => {
  const arr = s.split("");
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(typeof Number(arr[i]));
    console.log(Number(arr[i]));
    if (!isNaN(Number(arr[i]))) {
      arr2.push(Number(arr[i]));
    }
  }
  return arr2.join("");
};
*/
console.log(pickNumbers("sfsd8fsdf6dsfsd8sdfs28fd0"));
