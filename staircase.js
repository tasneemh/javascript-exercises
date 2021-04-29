/**
 * This is a staircase of size n. Its base and height are both equal to n. It is drawn using #. symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size n
 
     #
    ##
   ###
  ####
 #####
######
 */

const staircase = (n) =>{
  let output = '';
  for (let i = 1; i<=n; i++){
    //for spaces
    for (let spaces=n-1; spaces>=i; spaces--){
      output+=" ";
    }
    //for #
    for (let j=1; j<=i; j++){
      output+="#";
    }
    output+="\n";
  }
  console.log(output);
}
console.log(staircase(6));