//Count the number of unique words in a sentence

const uniqueWords = (s, word) => {
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
  let count = 0;
  if (s.includes(word)) {
    count++;
  }
  console.log("count: ", count);
};
uniqueWords("length ng", "ng");
