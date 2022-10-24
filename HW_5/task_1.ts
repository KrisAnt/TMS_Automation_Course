function getSum(endWith: number) {
  let sum = 0;
  for (let i = 1; i <= endWith; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(100));