const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const newNumbers = numbers.some((value) => value % 3 === 0 && value % 5 === 0);
console.log(newNumbers);
const numbers2 = [25,30, 80, 35, 55, 44];
const result = numbers2.some(Somenumbers)
console.log(result)

function Somenumbers(value: number) {
  return value % 3 === 0 && value % 5 === 0;
}