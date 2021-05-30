//Count the number of unique words in a sentence
const uniqueWords = (s) => {
  const arr = s.split(" ");
  const count = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return count;
};
console.log(uniqueWords("Hello World World"));
