/*
You are given two non-empty arrays representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

const reverse = (num) => {
  let str = "";
  for (let i = num.length - 1; i >= 0; i--) {
    str += num[i];
  }
  return Number(str);
};

const addTwoNumbers = (l1, l2) => {
  const arr = [];
  const num1 = reverse(l1);
  const num2 = reverse(l2);
  const result = num1 + num2;
  const str = result.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(Number(str[i]));
  }
  return arr;
};
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
