const longestSubstring = (s) => {
  let count = 0;
  const arr = [];
  let str = s[0];
  for (let i = 0; i < s.length; i++) {
    console.log("i: ", i);
    console.log("s[i]: ", s[i]);
    if (!str.includes(s[i])) {
      if (s[i] === s[i + 1]) {
        str = "";
        console.log("i inside if loop: ", i);
      } else {
        str += s[i];
        console.log("str inside else: ", str);
      }
    }
  }
};
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
