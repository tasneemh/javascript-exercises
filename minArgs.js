// In JavaScript, define a function `minArgs` which accepts any number of numerical arguments and returns the minimum value. Next, show how you would use the function you just created (without modification) to find the minimum of values in an array.
// Example:
// minArgs(1, -6, 78, 12, 45.5, -6.9);  -6.9
function minArgs(...args) {
  let min = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}
console.log(minArgs(1, -6, 78, 12, 45.5, -6.9));

//with Array as a parameter
function minArgswithArray(args) {
  let min = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}
console.log(minArgswithArray([1, -6, 78, 12, 45.5, -6.9]));
