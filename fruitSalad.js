const fruitSalad = (fruits) => {
  const arr = [];
  for (let i = 0; i < fruits.length; i++) {git add 
    arr.push(fruits[i].substring(0, fruits[i].length / 2));
    arr.push(fruits[i].substring(fruits[i].length / 2));
  }
  return arr.sort().join("");
};
console.log(fruitSalad(["apple", "pear", "grapes"]));
console.log(fruitSalad(["raspberries", "mango"]));
console.log(fruitSalad(["banana"]));
