/*
Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i<j and ar[i] + ar[j] is divisible by k.
*/
const divisibleSumPairs = (ar, k) => {
  const pairs = [];
  ar.forEach((element, elementIndex) => {
    ar.map((value, valueIndex) => {
      if (valueIndex >= elementIndex + 1) {
        if ((element + value) % k === 0) {
          pairs.push([elementIndex, valueIndex]);
        }
      }
    });
  });
  return pairs.length;
};
/*
const divisibleSumPairs = (ar, k) =>{
  let pairs = [];
  for (let i =0; i<ar.length; i++){
    for (let j=i+1; j<ar.length; j++){
      if ((ar[i]+ar[j])%k===0){
        pairs.push([ar[i], ar[j]]);
      }
    }
    
  }
  //return pairs;
  return pairs.length;
};
*/
console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5));
