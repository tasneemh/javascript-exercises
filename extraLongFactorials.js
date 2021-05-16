const extraLongFactorials = (n) =>{
  let fact = 1; const arr = []; let str="";
  for (let i=1; i<=n; i++){
    fact *= i;
    //console.log();  
  }
  //fact=fact.toString();
  //console.log(fact);
  
  if (n <= 20){
    //console.log(fact);
    return fact;
  } else {
    //console.log(BigInt(fact));
    return BigInt(fact);
  }
  
};
console.log(extraLongFactorials(25));
//console.log(extraLongFactorials(30));
console.log(extraLongFactorials(20));