/**
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest. candles = [4,4,1,3]. The maximum height candles are 4 units high. There are 2 of them, so return 2.
 */

const birthdayCakeCandles = (candles) =>{
  let max = candles[0]; let count=0;
  //find max
  for (let i=0; i < candles.length; i++){
    if (candles[i]>max){
      max = candles[i];
    }
  }
  //count the number of times count appears
  for (let i = 0; i < candles.length; i++){
    if (candles[i]===max){
      count++;
    }
  }
  return count;

};
//console.log(birthdayCakeCandles([3,2,1,3]));
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));