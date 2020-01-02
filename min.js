// const min = (num1, num2) => {
//   return num1 > num2 ? num1 : num2;
// };

// const theValue = min(8, 4);

// console.log(theValue);

const isEven = n => {
  console.log(n);
  if (n == 0) {
    return 0;
  } else {
    return n + isEven(n - 1);
  }
};

console.log(isEven(90));
isEven(8);
