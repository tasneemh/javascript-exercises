/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
If arr = [-4, 3, -9, 0, 4, 1]

o/p is
0.500000
0.333333
0.166667
*/

const plusMinus = (arr) =>{
  let positive = 0; let negative = 0; let zero = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]<0){
            negative++;
        } else if (arr[i]>0){
            positive++;
        } else {
            zero++;
        }
    }

  const len = arr.length;
  let pos = positive/len;
  let neg = negative/len;
  let zer = zero/len;
  //to get output with 6 places after the decimal.
  zer = zer.toFixed(6);
  neg = neg.toFixed(6);
  pos = pos.toFixed(6);
  //to print the output on new line
  return pos+"\n"+neg+"\n"+zer;
};

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));