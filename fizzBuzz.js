/**
 * Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
 * if i is the multiple of both 3 and 5 print FizzBuzz
 * if i is the multiple of 3 print Fizz
 * if i is the multiple of 5 print Buzz
 * if i is not the multiple of 3 or 5 print the value of i
 */
const fizzBuzz = (n) =>{
  for (let i = 1; i <= n; i++){
    (i%3 === 0 && i%5 === 0) ? console.log("FizzBuzz") : (i%3 === 0) ? console.log("Fizz") : (i%5 === 0) ? console.log("Buzz") : console.log(i);
  }
};
(fizzBuzz(15));