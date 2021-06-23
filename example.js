const pickNumbers = (s) => {
  const arr = s.split("");
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(typeof Number(arr[i]));
    console.log(Number(arr[i]));
    if (!isNaN(Number(arr[i]))) {
      arr2.push(Number(arr[i]));
    }
  }
  console.log(arr2.join(""));
};
pickNumbers("sfsd8fsdf6dsfsd8sdfs28fd0");
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
