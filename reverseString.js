const reverseString = (s) => {
  const arr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }
  return arr;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));
