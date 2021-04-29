/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

arr = [1,3,5,7,9]. The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9 = 24. The function prints 16 24
*/

const miniMax = (arr) =>{
  arr = arr.sort();
  let minSum = 0;
  for (let i=0; i<arr.length-1; i++){
    minSum += arr[i];
  }
  let maxSum = 0;
  for (let j = 1; j < arr.length; j++){
    maxSum += arr[j];
  }
  console.log(minSum, maxSum);
  return minSum+" "+maxSum;
};
console.log(miniMax([1,3,5,7,9]));