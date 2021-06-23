const extractUnique = (arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};
console.log(extractUnique([1, 1, 2, 2, 3, 4, 4, 5]));
/*
(function () {
  function foo(x) {
    var bar = 3;
    return function (y) {
      ++bar;
      console.log("y: " + y);
      console.log("x: " + x);
      console.log("bar: ", bar);
      console.log(x + y + bar);
    };
  }
  var moo = foo(2);
  moo(1);
  moo(1);
})();
*/
