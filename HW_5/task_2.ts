function credit(creditSum: number) {
  let procent = 17;
  let year = 5;
  let overPay = ((creditSum * procent) / 100) * year;
  return overPay;
}
console.log(credit(100000));