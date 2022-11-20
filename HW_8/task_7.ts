const trueArray = [2, 8, 11];
const falseArray = [2, 7, 10];

const isEven = trueArray.every((el) => {
  const pow = el * el;
  const sum = digit(pow);
  return sum % 2 == 0;
});
console.log(isEven);
const isNotEven = falseArray.every((el) => {
  const pow = el * el;
  const sum = digit(pow);
  return sum % 2 === 0;
});
console.log(isNotEven);

function digit(number: number) {
  var figures = "" + number;
  var sum = 0;

  for (var i = 0; i < figures.length; i++) sum += +figures[i];

  return sum;
}
