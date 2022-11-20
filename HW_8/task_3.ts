const numbers = [7, -4, 32, -90, 54, 32, -21];
const result = numbers.filter((el) => el >= 0);
console.log(result);
const newResult = numbers.filter(noNegative);
console.log(newResult);

function noNegative(el: number) {
  return el >= 0;
}