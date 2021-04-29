/**
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:
[[1,2,3], [4,5,6], [9,8,9]]
The left-to-right diagonal 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is |15-17| = 2
 */

const diagonalDifference = (arr) =>{
let firstDiagonalSum = 0;
    for (let i=0; i<arr.length; i++){
      for (let j=0; j<arr.length; j++){
        if (i===j){
          //1+5+9 = 15
        firstDiagonalSum+=arr[i][j];
        }
      }
    }
//console.log("firstDiagonalSum: ",firstDiagonalSum);
let secDiagonalSum = 0; let countForI = 0; let countForJ = arr.length-1;
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (i===countForI && j===countForJ){
        //3+5+9 = 17
        secDiagonalSum+=arr[i][j];
        countForI++;
        countForJ--;
        }
      }
    }
//console.log("secDiagonalSum: ",secDiagonalSum);
//to get absolute value
let diff = firstDiagonalSum - secDiagonalSum;
  if (diff<0){
    return diff * (-1);
  } else {
    return diff;
  }  
};

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));
