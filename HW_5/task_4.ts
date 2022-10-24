function getSumNumbers(userNumber: string) {
  let figures = "" + userNumber;
  let sum = 0;
  for (let i = 0; i < figures.length; i++) {
    sum += +figures[i];
  }
  return sum;
}
console.log(getSumNumbers("2021"));