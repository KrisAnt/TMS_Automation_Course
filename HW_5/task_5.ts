function getSum(numbA: number, numbB: number) {
  let sum = 0;
  for (let i = numbA; i <= numbB; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(-1, 4));