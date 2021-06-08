const reverse = (x) => {
  const str = x.toString();
  let len = "";
  let num = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    len += str[i];
  }
  num = Number(len);
  return num;
};
const reverseInteger = (x) => {
  let ont = 0;
  if (x > 0) {
    const num = reverse(x);
    ont = num * 1;
  } else {
    x = x * -1;
    const num = reverse(x);
    ont = num * -1;
  }
  return ont;
};
console.log(reverseInteger(-123));
