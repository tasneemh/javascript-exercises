/**
 An integer  is a divisor of an integer  if the remainder of n/d = 0. Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer. n =124 Check whether 1,2  and 4 are divisors of 124. All 3 numbers divide evenly into  so return 3. n = 111, Check whether 1,1  and 1 are divisors of 111. All 3 numbers divide evenly into  so return 3. n = 10 Check whether 1 and 0 are divisors of 10. 1 is, but 0 is not. Return 1.
 */

const findDigits = (n) =>{
  const str = n.toString();
  let count = 0;
  for (let i=0; i<str.length; i++){
    if (n % Number(str[i])===0){
      count++;
    }
  }
  //console.log(count);
  return count;
};
console.log(findDigits(124));
console.log(findDigits(111));
console.log(findDigits(10));