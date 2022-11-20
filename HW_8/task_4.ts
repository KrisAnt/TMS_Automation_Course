const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
const numberSum = fibonacci.reduce((accum: number, value: number) => {
  return accum + value;
}, 0);
console.log(numberSum);
const result = fibonacci.reduce(Sum);
console.log(result);

function Sum(accum: number, value: number) {
  return accum + value;
}