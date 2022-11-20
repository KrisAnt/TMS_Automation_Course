const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumber = numbers.find((el) => el % 2 == 0);
console.log(evenNumber);
const result = numbers.find(Even);
console.log(result);
function Even(el: number) {
  return el % 2 == 0;
}