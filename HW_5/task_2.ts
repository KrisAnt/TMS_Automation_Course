function credit(creditSum: number) {
  const procent = 17;
  const year = 5;
  let overPay = ((creditSum * procent) / 100) * year;
  return overPay;
}
console.log(credit(100000));